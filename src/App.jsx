import React, { useState } from 'react';
import { BookOpen, Brain, Target, Award, ArrowLeft, ArrowRight, Home, FileText, Presentation, ClipboardList, Zap } from 'lucide-react';

const LearningPlatform = () => {
  const [currentView, setCurrentView] = useState('home');
  const [currentModule, setCurrentModule] = useState(null);

  // Данни за курса
  const courseData = {
    title: "Невронни мрежи",
    subtitle: "Бакалавърска програма - Последна година",
    description: "Курсът представя основите на изкуствените невронни мрежи, техните биологични прототипи, математически модели и практически приложения. Студентите ще се научат да проектират, обучават и прилагат невронни мрежи за решаване на реални проблеми.",
    duration: "60 академични часа (30 лекции + 30 упражнения)",
    goals: [
      "Разбиране на биологичните основи на невронните мрежи",
      "Математическо моделиране на неврони и мрежи",
      "Проектиране и имплементация на различни архитектури",
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
      "Модул 3: Алгоритми за обучение - Backpropagation",
      "Модул 4: Конволюционни невронни мрежи (CNN)",
      "Модул 5: Рекурентни невронни мрежи (RNN)",
      "Модул 6: Съвременни архитектури и приложения"
    ]
  };

  // Данни за модулите
  const modules = [
    {
      id: 1,
      title: "Биологичен и формален неврон",
      icon: Brain,
      color: "bg-blue-500",
      duration: "4 академични часа",
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
            "Структура: дендрити, сома, аксон, синапси",
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
            "Активационни функции: стъпална, sigmoid, tanh, ReLU",
            "Геометрична интерпретация"
          ]
        }
      ],
      presentation: "https://docs.google.com/presentation/d/example1",
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
      interactive: true,
      interactiveUrl: "#neuron-simulator"
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
      interactive: true,
      interactiveUrl: "#backprop-viz"
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

  // HomePage Component
  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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

        {/* Course Info Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Goals */}
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

          {/* Requirements */}
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

        {/* Syllabus */}
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

        {/* Modules Grid */}
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

  // ModulePage Component
  const ModulePage = () => {
    if (!currentModule) return null;
    
    const Icon = currentModule.icon;
    const currentIndex = modules.findIndex(m => m.id === currentModule.id);
    const hasPrevious = currentIndex > 0;
    const hasNext = currentIndex < modules.length - 1;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
        <div className="max-w-5xl mx-auto">
          {/* Module Header */}
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

          {/* Goals */}
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

          {/* Content */}
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

          {/* Presentation */}
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

          {/* Interactive Demo */}
          {currentModule.interactive && (
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-800">Интерактивна демонстрация</h2>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-6 text-center">
                <p className="text-gray-700 mb-4">Интерактивна визуализация за по-добро разбиране</p>
                <button
                  className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
                  onClick={() => alert('Интерактивната демонстрация ще се зареди в нов прозорец')}
                >
                  Стартирай демонстрация
                </button>
              </div>
            </div>
          )}

          {/* Assignment */}
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

          {/* Navigation */}
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
    </div>
  );
};

export default LearningPlatform;