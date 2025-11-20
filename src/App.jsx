import React, { useState } from 'react';
import { BookOpen, Brain, Target, Award, ArrowLeft, ArrowRight, Home, FileText, Presentation, ClipboardList, Zap, RotateCcw } from 'lucide-react';

// Neuron Simulator Component
const NeuronSimulator = ({ onBack }) => {
  const [x1, setX1] = useState(1);
  const [x2, setX2] = useState(1);
  const [w1, setW1] = useState(1);
  const [w2, setW2] = useState(1);
  const [bias, setBias] = useState(-1.5);
  const [activationFunction, setActivationFunction] = useState('step');
  
  const z = w1 * x1 + w2 * x2 + bias;
  
  const calculateOutput = () => {
    switch(activationFunction) {
      case 'step':
        return z >= 0 ? 1 : 0;
      case 'sigmoid':
        return 1 / (1 + Math.exp(-z));
      case 'tanh':
        return Math.tanh(z);
      case 'relu':
        return Math.max(0, z);
      default:
        return z;
    }
  };
  
  const y = calculateOutput();
  
  const loadExample = (example) => {
    switch(example) {
      case 'AND':
        setW1(1);
        setW2(1);
        setBias(-1.5);
        setActivationFunction('step');
        break;
      case 'OR':
        setW1(1);
        setW2(1);
        setBias(-0.5);
        setActivationFunction('step');
        break;
      case 'NOT':
        setW1(-1);
        setW2(0);
        setBias(0.5);
        setActivationFunction('step');
        break;
      case 'RESET':
        setX1(1);
        setX2(1);
        setW1(1);
        setW2(1);
        setBias(0);
        setActivationFunction('step');
        break;
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Back Button */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Brain className="w-12 h-12 text-purple-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  Интерактивна демонстрация: Формален неврон
                </h1>
                <p className="text-gray-600 mt-1">
                  Експериментирайте с параметрите и вижте как работи невронът
                </p>
              </div>
            </div>
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Назад към модула
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Panel - Controls */}
          <div className="space-y-6">
            {/* Inputs */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                🎯 Входни стойности
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Вход x₁: <span className="text-purple-600">{x1.toFixed(2)}</span>
                  </label>
                  <input
                    type="range"
                    min="-2"
                    max="2"
                    step="0.1"
                    value={x1}
                    onChange={(e) => setX1(parseFloat(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Вход x₂: <span className="text-purple-600">{x2.toFixed(2)}</span>
                  </label>
                  <input
                    type="range"
                    min="-2"
                    max="2"
                    step="0.1"
                    value={x2}
                    onChange={(e) => setX2(parseFloat(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Weights */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                ⚖️ Тегла и Bias
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Тегло w₁: <span className="text-blue-600">{w1.toFixed(2)}</span>
                  </label>
                  <input
                    type="range"
                    min="-3"
                    max="3"
                    step="0.1"
                    value={w1}
                    onChange={(e) => setW1(parseFloat(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Тегло w₂: <span className="text-blue-600">{w2.toFixed(2)}</span>
                  </label>
                  <input
                    type="range"
                    min="-3"
                    max="3"
                    step="0.1"
                    value={w2}
                    onChange={(e) => setW2(parseFloat(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Bias b: <span className="text-orange-600">{bias.toFixed(2)}</span>
                  </label>
                  <input
                    type="range"
                    min="-3"
                    max="3"
                    step="0.1"
                    value={bias}
                    onChange={(e) => setBias(parseFloat(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Activation Function */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                📊 Активационна функция
              </h2>
              
              <select
                value={activationFunction}
                onChange={(e) => setActivationFunction(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg text-lg font-semibold cursor-pointer hover:border-purple-500 transition-colors"
              >
                <option value="step">Стъпална (Step)</option>
                <option value="sigmoid">Sigmoid (σ)</option>
                <option value="tanh">Tanh</option>
                <option value="relu">ReLU</option>
              </select>
            </div>

            {/* Examples */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                💡 Готови примери
              </h2>
              
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => loadExample('AND')}
                  className="px-4 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  AND
                </button>
                
                <button
                  onClick={() => loadExample('OR')}
                  className="px-4 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  OR
                </button>
                
                <button
                  onClick={() => loadExample('NOT')}
                  className="px-4 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  NOT
                </button>
                
                <button
                  onClick={() => loadExample('RESET')}
                  className="px-4 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  RESET
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel - Visualization */}
          <div className="space-y-6">
            {/* Neuron Diagram */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
                🧠 Визуализация на неврон
              </h2>
              
              <svg width="100%" height="300" viewBox="0 0 500 300" className="mx-auto">
                <circle cx="50" cy="80" r="20" fill="#9333ea" />
                <text x="50" y="85" textAnchor="middle" fill="white" fontWeight="bold">x₁</text>
                <text x="50" y="120" textAnchor="middle" fill="#1f2937" fontSize="14" fontWeight="bold">{x1.toFixed(2)}</text>
                
                <circle cx="50" cy="220" r="20" fill="#9333ea" />
                <text x="50" y="225" textAnchor="middle" fill="white" fontWeight="bold">x₂</text>
                <text x="50" y="260" textAnchor="middle" fill="#1f2937" fontSize="14" fontWeight="bold">{x2.toFixed(2)}</text>
                
                <line x1="70" y1="80" x2="220" y2="130" stroke="#3b82f6" strokeWidth="3" />
                <text x="145" y="95" fill="#3b82f6" fontWeight="bold" fontSize="14">w₁={w1.toFixed(1)}</text>
                
                <line x1="70" y1="220" x2="220" y2="170" stroke="#3b82f6" strokeWidth="3" />
                <text x="145" y="215" fill="#3b82f6" fontWeight="bold" fontSize="14">w₂={w2.toFixed(1)}</text>
                
                <circle cx="250" cy="150" r="50" fill="#6366f1" stroke="#9333ea" strokeWidth="3" />
                <text x="250" y="145" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">Σ</text>
                <text x="250" y="165" textAnchor="middle" fill="white" fontSize="14">f(z)</text>
                
                <circle cx="250" cy="50" r="15" fill="#f97316" />
                <text x="250" y="55" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">b</text>
                <line x1="250" y1="65" x2="250" y2="100" stroke="#f97316" strokeWidth="2" strokeDasharray="5,5" />
                <text x="280" y="60" fill="#f97316" fontWeight="bold" fontSize="14">{bias.toFixed(1)}</text>
                
                <line x1="300" y1="150" x2="400" y2="150" stroke="#10b981" strokeWidth="3" />
                <circle cx="430" cy="150" r="20" fill="#10b981" />
                <text x="430" y="155" textAnchor="middle" fill="white" fontWeight="bold">y</text>
                <text x="430" y="190" textAnchor="middle" fill="#1f2937" fontSize="16" fontWeight="bold">{y.toFixed(3)}</text>
              </svg>
            </div>

            {/* Calculations */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                📐 Изчисление стъпка по стъпка
              </h2>
              
              <div className="bg-gray-50 rounded-lg p-6 font-mono text-sm space-y-4">
                <div>
                  <div className="font-bold text-purple-600 mb-2">Стъпка 1: Претеглена сума</div>
                  <div className="text-gray-700 mb-1">z = w₁·x₁ + w₂·x₂ + b</div>
                  <div className="text-gray-700 mb-1">
                    z = ({w1.toFixed(2)})·({x1.toFixed(2)}) + ({w2.toFixed(2)})·({x2.toFixed(2)}) + ({bias.toFixed(2)})
                  </div>
                  <div className="text-purple-700 font-bold text-lg">z = {z.toFixed(4)}</div>
                </div>
                
                <div>
                  <div className="font-bold text-indigo-600 mb-2">Стъпка 2: Активационна функция</div>
                  <div className="text-gray-700 mb-1">
                    {activationFunction === 'step' && 'y = step(z) = ' + (z >= 0 ? '1' : '0')}
                    {activationFunction === 'sigmoid' && 'y = σ(z) = 1 / (1 + e⁻ᶻ)'}
                    {activationFunction === 'tanh' && 'y = tanh(z)'}
                    {activationFunction === 'relu' && 'y = ReLU(z) = max(0, z)'}
                  </div>
                  <div className="text-green-700 font-bold text-xl">y = {y.toFixed(4)}</div>
                </div>
              </div>
            </div>

            {/* Output */}
            <div className={`${z >= 0 ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-red-500 to-rose-600'} rounded-xl shadow-lg p-8 text-white text-center`}>
              <div className="text-lg mb-3 opacity-90">Изходна стойност</div>
              <div className="text-6xl font-bold mb-3">{y.toFixed(3)}</div>
              <div className="text-lg opacity-90">
                {z >= 0 ? '✓ Неврон активиран (z ≥ 0)' : '✗ Неврон неактивиран (z < 0)'}
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">
            💡 Как да използвате демонстрацията:
          </h3>
          <ul className="space-y-2 text-gray-700 list-disc list-inside">
            <li>Променяйте входовете x₁ и x₂ с плъзгачите</li>
            <li>Настройвайте теглата w₁, w₂ и bias b</li>
            <li>Изберете различна активационна функция</li>
            <li>Натиснете бутоните AND, OR, NOT за готови примери на логически функции</li>
            <li>Наблюдавайте как се променят изчисленията и изходът в реално време</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Main Learning Platform
const LearningPlatform = () => {
  const [currentView, setCurrentView] = useState('home');
  const [currentModule, setCurrentModule] = useState(null);

  const courseData = {
    title: "Невронни мрежи",
    subtitle: "Бакалавърска програма",
    description: "Курсът представя основите на изкуствените невронни мрежи, техните биологични прототипи, математически модели и практически приложения. Студентите ще се научат да проектират, обучават и прилагат невронни мрежи за решаване на реални проблеми.",
    duration: "50 академични часа (25 лекции + 25 упражнения)",
    goals: [
      "Разбиране на биологичните основи на невронните мрежи",
      "Математическо моделиране на неврони и мрежи",
      "Проектиране и имплементация на многослойни архитектури",
      "Обучение на мрежи с различни алгоритми",
      "Практическо приложение в реални задачи"
    ],
    requirements: [
      "Присъствие минимум 75% от лекциите и упражненията",
      "Успешно решени практически задачи (минимум 60%)",
      "Реализиран финален проект",
      "Положен писмен изпит (минимум 50%)"
    ],
    syllabus: [
      "Модул 1: Биологичен и формален неврон",
      "Модул 2: Многослойни мрежи и перцептрон",
      "Модул 3: Обратно разпростанение на грешката (Backpropagation)",
      "Модул 4: Конволюционни невронни мрежи (CNN)",
      "Модул 5: Рекурентни невронни мрежи (RNN)",
      "Модул 6: Съвременни архитектури и приложения"
    ]
  };

  const modules = [
    {
      id: 1,
      title: "Биологичен и формален неврон",
      icon: Brain,
      color: "bg-blue-500",
      duration: "Лекция и семинар",
      summary: "Модулът въвежда основните понятия за структурата и функционирането на биологичния неврон, и как те се трансформират в математически модел - формалния неврон. Студентите ще научат как работи McCulloch-Pitts модела и перцептронът на Rosenblatt.",
      goals: [
        "Обяснение на структурата на биологичния неврон",
        "Разбиране на процеса на предаване на нервен импулс",
        "Дефиниране на формалния неврон като математически модел",
        "Изчисляване на изход на неврон при зададени параметри",
        "Прилагане на различни активационни функции"
      ],
      content: [
        {
          title: "Биологичен неврон",
          topics: [
            "Структура: дендрити, сома (клетъчно тяло), аксон, синапси",
            "Функциониране: рецепция, интеграция, активация",
            "Акционен потенциал и праг на активация",
            "Синаптична пластичност"
          ]
        },
        {
          title: "Формален неврон",
          topics: [
            "McCulloch-Pitts модел (1943)",
            "Перцептрон на Rosenblatt (1958)",
            "Математическо описание: z = Σ(wᵢxᵢ) + b",
            "Активационни функции",
            "Геометрична интерпретация"
          ]
        }
      ],
      presentation: "https://docs.google.com/presentation/d/10Gs-rRrL9xXtj3lKf9fTItSWleO7nOy-rUNq4hY1lJA/edit?usp=sharing",
      assignment: {
        title: "Практическа задача: Моделиране на логически функции",
        description: "Проектирайте формален неврон, който реализира следните логически функции:",
        tasks: [
          "AND функция с 2 входа",
          "OR функция с 2 входа",
          "NOT функция с 1 вход",
          "Обяснете защо XOR не може да се реализира с един неврон"
        ],
        deliverables: "Изчисления на ръка + Python код + кратко обяснение",
        deadline: "1 седмица"
      },
      interactive: true
    },
    {
      id: 2,
      title: "Многослойни мрежи и перцептрон",
      icon: BookOpen,
      color: "bg-green-500",
      duration: "6 академични часа",
      summary: "Изучаване на многослойни невронни мрежи, тяхната архитектура и изчислителни възможности.",
      goals: [
        "Разбиране на концепцията за слоеве в невронните мрежи",
        "Проектиране на многослойни архитектури"
      ],
      content: [
        {
          title: "Архитектура на многослойни мрежи",
          topics: [
            "Входен, скрит и изходен слой",
            "Feed-forward мрежи"
          ]
        }
      ],
      presentation: "https://docs.google.com/presentation/d/example2",
      assignment: {
        title: "Проектиране на многослойна мрежа",
        description: "Проектирайте архитектура за класификация на ръкописни цифри",
        tasks: [
          "Определете броя слоеве и неврони",
          "Изберете активационни функции"
        ],
        deliverables: "Схема + обосновка",
        deadline: "1 седмица"
      },
      interactive: false
    },
    {
      id: 3,
      title: "Backpropagation",
      icon: Target,
      color: "bg-purple-500",
      duration: "8 академични часа",
      summary: "Алгоритъмът за обучение на многослойни мрежи чрез обратно разпространение на грешката.",
      goals: [
        "Разбиране на градиентно спускане",
        "Имплементация на backpropagation"
      ],
      content: [
        {
          title: "Градиентно спускане",
          topics: [
            "Функции на загубата",
            "Частни производни"
          ]
        }
      ],
      presentation: "https://docs.google.com/presentation/d/example3",
      assignment: {
        title: "Имплементация на backpropagation",
        description: "Реализирайте алгоритъма от нулата",
        tasks: [
          "Forward pass",
          "Backward pass",
          "Обновяване на тегла"
        ],
        deliverables: "Python код + тестове",
        deadline: "2 седмици"
      },
      interactive: false
    }
  ];

  const goToModule = (moduleId) => {
    const module = modules.find(m => m.id === moduleId);
    setCurrentModule(module);
    setCurrentView('module');
  };

  const goToHome = () => {
    setCurrentView('home');
    setCurrentModule(null);
  };

  const goToInteractive = () => {
    setCurrentView('interactive');
  };

  const goBackToModule = () => {
    setCurrentView('module');
  };

  const goToNextModule = () => {
    if (currentModule) {
      const currentIndex = modules.findIndex(m => m.id === currentModule.id);
      if (currentIndex < modules.length - 1) {
        goToModule(modules[currentIndex + 1].id);
      }
    }
  };

  const goToPreviousModule = () => {
    if (currentModule) {
      const currentIndex = modules.findIndex(m => m.id === currentModule.id);
      if (currentIndex > 0) {
        goToModule(modules[currentIndex - 1].id);
      }
    }
  };

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Brain className="w-16 h-16 text-blue-600" />
            <div>
              <h1 className="text-4xl font-bold text-gray-800">{courseData.title}</h1>
              <p className="text-gray-600 text-lg">{courseData.subtitle}</p>
            </div>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">{courseData.description}</p>
          <div className="mt-4 inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
            <span className="font-semibold">Продължителност:</span> {courseData.duration}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-800">Учебни цели</h2>
            </div>
            <ul className="space-y-2">
              {courseData.goals.map((goal, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-800">Изисквания за завършване</h2>
            </div>
            <ul className="space-y-2">
              {courseData.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">Учебно съдържание</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {courseData.syllabus.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Учебни модули</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <button
                  key={module.id}
                  onClick={() => goToModule(module.id)}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:-translate-y-1 text-left"
                >
                  <div className={`${module.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-gray-500 mb-2">Модул {module.id}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{module.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{module.summary.substring(0, 100)}...</p>
                  <div className="text-blue-600 font-semibold text-sm">Отвори модул →</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  const ModulePage = () => {
    if (!currentModule) return null;
    
    const Icon = currentModule.icon;
    const currentIndex = modules.findIndex(m => m.id === currentModule.id);
    const hasPrevious = currentIndex > 0;
    const hasNext = currentIndex < modules.length - 1;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className={`${currentModule.color} w-20 h-20 rounded-2xl flex items-center justify-center`}>
                <Icon className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-1">Модул {currentModule.id}</div>
                <h1 className="text-3xl font-bold text-gray-800">{currentModule.title}</h1>
                <div className="text-gray-600 mt-2">{currentModule.duration}</div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{currentModule.summary}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-800">Учебни цели</h2>
            </div>
            <ul className="space-y-2">
              {currentModule.goals.map((goal, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-gray-700">{goal}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">Съдържание</h2>
            </div>
            <div className="space-y-6">
              {currentModule.content.map((section, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Presentation className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-800">Презентация</h2>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6 text-center">
              <p className="text-gray-700 mb-4">Лекционна презентация по модула</p>
              <a
                href={currentModule.presentation}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Отвори презентация
              </a>
            </div>
          </div>

          {currentModule.interactive && (
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-800">Интерактивна демонстрация</h2>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-6 text-center">
                <p className="text-gray-700 mb-4">Интерактивна визуализация за по-добро разбиране на формалния неврон</p>
                <button
                  onClick={goToInteractive}
                  className="inline-flex items-center gap-2 bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
                >
                  <Zap className="w-5 h-5" />
                  Стартирай демонстрация
                </button>
              </div>
            </div>
          )}

          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardList className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-800">Практическа задача</h2>
            </div>
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{currentModule.assignment.title}</h3>
              <p className="text-gray-700 mb-4">{currentModule.assignment.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Задачи:</h4>
                <ul className="space-y-2">
                  {currentModule.assignment.tasks.map((task, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">{index + 1}.</span>
                      <span className="text-gray-700">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-red-200 pt-4 mt-4">
                <p className="text-gray-700"><span className="font-semibold">За предаване:</span> {currentModule.assignment.deliverables}</p>
                <p className="text-gray-700 mt-2"><span className="font-semibold">Срок:</span> {currentModule.assignment.deadline}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between bg-white rounded-xl shadow-lg p-6">
            <button
              onClick={goToPreviousModule}
              disabled={!hasPrevious}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                hasPrevious
                  ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              Предишен модул
            </button>

            <button
              onClick={goToHome}
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <Home className="w-5 h-5" />
              Начало
            </button>

            <button
              onClick={goToNextModule}
              disabled={!hasNext}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                hasNext
                  ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              Следващ модул
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {currentView === 'home' && <HomePage />}
      {currentView === 'module' && <ModulePage />}
      {currentView === 'interactive' && <NeuronSimulator onBack={goBackToModule} />}
    </div>
  );
};

export default LearningPlatform;
