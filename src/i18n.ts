import { Language } from './types';

export const i18n = {
  uz: {
    appName: "Fraction Land - Oddiy Kasrlar",
    characterName: "Aziza",
    mascotName: "Kasrjon",
    mascotGreeting: "Salom do'stim! Men Kasrjonman. Keling, birgalikda mazali kasrlarni o'rganamiz!",
    nav: {
      home: "Bosh sahifa",
      learn: "Darslar",
      play: "O'yinlar",
      quiz: "Viktorina",
      exam: "Imtihon",
      progress: "Yutuqlarim"
    },
    common: {
      next: "Keyingisi",
      prev: "Oldingisi",
      check: "Tekshirish",
      correct: "Ajoyib! To'g'ri!",
      incorrect: "Biroz xato ketdi. Qaytadan urinib ko'r!",
      hint: "Yordam (Maslahat)",
      showSolution: "Yechimni ko'rish",
      tryAgain: "Qayta urinish",
      score: "Ball",
      stars: "Yulduzlar",
      level: "Bosqich",
      lives: "Jonlar",
      start: "Boshlash",
      finish: "Tugatish",
      playAgain: "Yana o'ynash",
      numerator: "Surat",
      denominator: "Maxraj",
      fractionBar: "Kasr chizig'i",
      properFraction: "To'g'ri kasr",
      improperFraction: "Noto'g'ri kasr",
      mixedNumber: "Aralash son",
      whole: "Butun",
      parts: "bo'lak",
      streak: "kunlik seriya",
      calmMode: "Tinch rejim",
      sound: "Ovoz",
      theme: "Mavzu",
      resetProgress: "Barcha natijalarni tozalash",
      confirmReset: "Haqiqatan ham barcha natijalarni tozalashni xohlaysizmi?",
      resetDone: "Barcha natijalar tozalandi!",
      xpGained: "XP berildi!",
      understandQuestion: "Mavzuni tushundingizmi?",
      easy: "Oson",
      medium: "O'rtacha",
      hard: "Qiyin"
    },
    home: {
      welcomeTitle: "Kasrlar mamlakatiga xush kelibsiz!",
      welcomeSub: "5-sinf o'quvchilari uchun eng qiziqarli interaktiv qo'llanma",
      enterName: "Ismingizni kiriting:",
      chooseAvatar: "Qahramoningizni tanlang:",
      startJourney: "Sayohatni boshlash!",
      mapTitle: "Mening o'rganish xaritam",
      dailyChallengeTitle: "Kunlik vazifa (Bonus XP)",
      dailyChallengeBtn: "Kunlik savollarni yechish",
      realLifeFactsTitle: "Hayotimizdagi kasrlar",
      continueLesson: "Darsni davom ettirish"
    },
    learn: {
      lessonPrefix: "-dars",
      caseTitle: "Tug'ilgan kun voqeasi (Muammo):",
      interactiveToolTitle: "Interaktiv kasr laboratoriyasi",
      interactiveDesc: "Surat va maxrajni o'zgartiring, pitsa va shokolad qanday o'zgarishini kuzating!",
      tasksTitle: "O'zingiz sinab ko'ring!",
      rememberTitle: "Eslab qoling!",
      slicePizza: "Pitsani bo'lish",
      selectSlices: "Bo'laklarni tanlang",
      unlockedNotice: "Keyingi dars ochildi!",
      congratsLesson: "Tabriklaymiz, dars muvaffaqiyatli yakunlandi!"
    },
    games: {
      arcadeTitle: "Kasrlar o'yingohi",
      arcadeSub: "O'ynang, zavqlaning va kasrlarni mukammal o'rganing!",
      chooseDifficulty: "Qiyinlik darajasini tanlang:",
      pizzaChef: {
        title: "Pitsa Oshpazi",
        desc: "Mijoz buyurtma bergan kasrga mos pitsani tayyorlang!",
        order: "Mijoz buyurtmasi:",
        serve: "Pitsani berish!",
        sliceBtn: "Pitsani bo'laklash"
      },
      balloonPop: {
        title: "Sharlar Parvozi",
        desc: "Faqat shartga mos keladigan sharlarni yoring!",
        target: "Vazifa:"
      },
      memory: {
        title: "Kasrlar Xotirasi",
        desc: "Bir-biriga mos keluvchi kasr soni va rasmini toping!",
        turns: "Urinishlar:"
      },
      sorter: {
        title: "Saralovchi Sehrgar",
        desc: "Kasrlarni to'g'ri qutilarga joylashtiring (To'g'ri / Noto'g'ri / Aralash)!",
        boxProper: "To'g'ri kasrlar",
        boxImproper: "Noto'g'ri kasrlar",
        boxMixed: "Aralash sonlar"
      },
      race: {
        title: "Kasr Poygasi",
        desc: "Savollarga tez va to'g'ri javob berib, robotdan o'zib keting!",
        player: "Sizning mashinangiz",
        robot: "Robot poygachi",
        distance: "Masofa"
      },
      monster: {
        title: "Maxluqchani To'ydir",
        desc: "Ochko'z Nom-Nom so'ragan kasr qismini shokoladdan ajratib bering!",
        feedBtn: "Maxluqchaga berish!"
      },
      frog: {
        title: "Sakrovchi Qurbaqa",
        desc: "Qurbaqani to'g'ri kasr nuqtasiga sakrating!",
        jumpTo: "Sakrash manzili:",
        jumpBtn: "Sakrash!"
      }
    },
    quiz: {
      title: "Bilimlar sinovi (Viktorina)",
      selectCategory: "Mavzuni tanlang:",
      selectDifficulty: "Qiyinlik darajasi:",
      allCategories: "Barcha mavzular",
      timerOption: "Vaqt bilan sinov (Taymer)",
      questionCount: "Savol",
      of: "/",
      hintCost: "Yordam (2 XP)",
      answered: "Javob berildi",
      practiceMistakesTitle: "Xatolar ustida ishlash",
      practiceMistakesDesc: "Oldingi testlarda xato qilgan savollaringizni qaytadan yechib mustahkamlang!",
      noMistakes: "Sizda hozircha xatolar yo'q! Ajoyib natija!",
      startQuizBtn: "Viktorinani boshlash"
    },
    exam: {
      title: "Yillik Katta Imtihon",
      desc: "20 ta aralash savol orqali butun mavzuni qanchalik o'zlashtirganingizni sinab ko'ring!",
      startExamBtn: "Imtihonni boshlash",
      resultsTitle: "Imtihon natijalari",
      finalGrade: "Yakuniy baho (5 ballik tizim):",
      grade5: "5 (A'LO) - Siz haqiqiy kasrlar ustasisiz!",
      grade4: "4 (YAXSHI) - Barakalla, juda yaxshi natija!",
      grade3: "3 (QONIQARLI) - Yaxshi, lekin ba'zi mavzularni takrorlash kerak.",
      grade2: "2 (QAYTA O'RGANISH KERAK) - Xafa bo'lmang, darslarni qaytadan ko'rib chiqing!",
      topicBreakdown: "Mavzular bo'yicha tahlil:",
      recommendations: "Shaxsiy tavsiyalar:",
      certificateBtn: "Sertifikatni chop etish (PDF)",
      retakeBtn: "Imtihonni qayta topshirish"
    },
    certificate: {
      title: "MAXSUS SERTIFIKAT",
      subtitle: "Ushbu sertifikat kasrlar bo'yicha bilimdon o'quvchiga taqdim etiladi",
      awardedTo: "Taqdirlanadi:",
      bodyText: "5-sinf matematika fani bo'yicha 'Oddiy kasrlar' kursini muvaffaqiyatli tamomlagani va ajoyib natija ko'rsatgani uchun.",
      date: "Sana:",
      grade: "Baho:",
      mentor: "O'qituvchi:",
      mentorSign: "Kasrjon Matematika Akademiyasi"
    },
    progress: {
      title: "Mening Yutuqlarim va Ko'rsatkichlarim",
      totalXp: "Umumiy XP:",
      totalStars: "To'plangan yulduzlar:",
      lessonsDone: "O'tilgan darslar:",
      currentRank: "Hozirgi unvoningiz:",
      badgesTitle: "Yutuq nishonlari (Medallar)",
      parentTipTitle: "Ota-onalar va o'qituvchilar uchun tavsiya:",
      parentTipDesc: "Bolaga kasrlarni o'rgatishda har kuni oshxonada amaliy mashqlar qiling: olmani teng bo'laklarga bo'lish, stakanning yarmini suv bilan to'ldirish yoki soat millarini kasr sifatida tushuntirish bolaning tasavvurini tez o'stiradi."
    }
  },

  ru: {
    appName: "Fraction Land - Обыкновенные дроби",
    characterName: "Аня",
    mascotName: "Дробик",
    mascotGreeting: "Привет, друг! Я Дробик. Давай вместе изучать вкусные и понятные дроби!",
    nav: {
      home: "Главная",
      learn: "Уроки",
      play: "Игры",
      quiz: "Викторина",
      exam: "Экзамен",
      progress: "Прогресс"
    },
    common: {
      next: "Далее",
      prev: "Назад",
      check: "Проверить",
      correct: "Отлично! Правильно!",
      incorrect: "Немного не так. Попробуй ещё раз!",
      hint: "Подсказка",
      showSolution: "Показать решение",
      tryAgain: "Попробовать снова",
      score: "Счёт",
      stars: "Звёзды",
      level: "Уровень",
      lives: "Жизни",
      start: "Начать",
      finish: "Завершить",
      playAgain: "Играть снова",
      numerator: "Числитель",
      denominator: "Знаменатель",
      fractionBar: "Дробная черта",
      properFraction: "Правильная дробь",
      improperFraction: "Неправильная дробь",
      mixedNumber: "Смешанное число",
      whole: "Целое",
      parts: "частей",
      streak: "дней подряд",
      calmMode: "Спокойный режим",
      sound: "Звук",
      theme: "Тема",
      resetProgress: "Сбросить весь прогресс",
      confirmReset: "Вы действительно хотите сбросить весь прогресс?",
      resetDone: "Прогресс успешно сброшен!",
      xpGained: "XP получено!",
      understandQuestion: "Всё ли было понятно?",
      easy: "Лёгкий",
      medium: "Средний",
      hard: "Сложный"
    },
    home: {
      welcomeTitle: "Добро пожаловать в Страну Дробей!",
      welcomeSub: "Интерактивный и увлекательный курс для учеников 5 класса",
      enterName: "Введи своё имя:",
      chooseAvatar: "Выбери своего героя:",
      startJourney: "Начать путешествие!",
      mapTitle: "Карта моего обучения",
      dailyChallengeTitle: "Задание дня (Бонус XP)",
      dailyChallengeBtn: "Решить вопросы дня",
      realLifeFactsTitle: "Дроби в реальной жизни",
      continueLesson: "Продолжить урок"
    },
    learn: {
      lessonPrefix: "Урок",
      caseTitle: "История ко Дню Рождения (Проблема):",
      interactiveToolTitle: "Интерактивная лаборатория дробей",
      interactiveDesc: "Меняй числитель и знаменатель и смотри, как меняется пицца и шоколадка!",
      tasksTitle: "Попробуй сам!",
      rememberTitle: "Запомни!",
      slicePizza: "Разрезать пиццу",
      selectSlices: "Выбрать кусочки",
      unlockedNotice: "Следующий урок открыт!",
      congratsLesson: "Поздравляем! Урок успешно пройден!"
    },
    games: {
      arcadeTitle: "Игровой зал дробей",
      arcadeSub: "Играй, веселись и закрепляй знания по дробям!",
      chooseDifficulty: "Выбери сложность:",
      pizzaChef: {
        title: "Пицца-Шеф",
        desc: "Приготовь и подай пиццу с точной дробью, которую заказал клиент!",
        order: "Заказ клиента:",
        serve: "Подать пиццу!",
        sliceBtn: "Разрезать пиццу"
      },
      balloonPop: {
        title: "Лопни Шарик",
        desc: "Лопай только те шарики, которые подходят под заданное правило!",
        target: "Правило:"
      },
      memory: {
        title: "Найди Пару",
        desc: "Переворачивай карточки и находи одинаковые дроби и картинки!",
        turns: "Ходы:"
      },
      sorter: {
        title: "Сортировщик",
        desc: "Разложи карточки по корзинам (Правильные / Неправильные / Смешанные)!",
        boxProper: "Правильные дроби",
        boxImproper: "Неправильные дроби",
        boxMixed: "Смешанные числа"
      },
      race: {
        title: "Гонка Дробей",
        desc: "Отвечай быстро и правильно на вопросы, чтобы обогнать робота!",
        player: "Твоя машинка",
        robot: "Робот-соперник",
        distance: "Дистанция"
      },
      monster: {
        title: "Накорми Монстрика",
        desc: "Голодный Ном-Ном просит определенную дробь от плитки шоколада!",
        feedBtn: "Покормить монстрика!"
      },
      frog: {
        title: "Прыжок Лягушонка",
        desc: "Прыгни лягушонком ровно в ту точку числового луча, где находится дробь!",
        jumpTo: "Цель прыжка:",
        jumpBtn: "Прыгнуть!"
      }
    },
    quiz: {
      title: "Проверка знаний (Викторина)",
      selectCategory: "Выбери тему:",
      selectDifficulty: "Сложность:",
      allCategories: "Все темы",
      timerOption: "Игра с таймером",
      questionCount: "Вопрос",
      of: "из",
      hintCost: "Подсказка (2 XP)",
      answered: "Отвечено",
      practiceMistakesTitle: "Работа над ошибками",
      practiceMistakesDesc: "Повтори вопросы, в которых ты ошибся в прошлый раз!",
      noMistakes: "У тебя нет сохранённых ошибок! Отличная работа!",
      startQuizBtn: "Начать викторину"
    },
    exam: {
      title: "Итоговый Экзамен",
      desc: "Проверь свои знания в большом тесте из 20 вопросов по всем темам!",
      startExamBtn: "Начать экзамен",
      resultsTitle: "Результаты экзамена",
      finalGrade: "Итоговая оценка (5-балльная шкала):",
      grade5: "5 (ОТЛИЧНО) — Ты настоящий мастер дробей!",
      grade4: "4 (ХОРОШО) — Молодец, очень уверенный результат!",
      grade3: "3 (УДОВЛЕТВОРИТЕЛЬНО) — Неплохо, но стоит повторить пару тем.",
      grade2: "2 (ТРЕБУЕТСЯ ПОВТОРЕНИЕ) — Не расстраивайся, пройди уроки ещё раз!",
      topicBreakdown: "Анализ по темам:",
      recommendations: "Советы от учителя:",
      certificateBtn: "Печать сертификата (PDF)",
      retakeBtn: "Пересдать экзамен"
    },
    certificate: {
      title: "СЕРТИФИКАТ УСПЕХА",
      subtitle: "Настоящий сертификат подтверждает отличные знания по математике",
      awardedTo: "Награждается:",
      bodyText: "За успешное освоение курса 'Обыкновенные дроби' за 5 класс и проявление выдающихся математических навыков.",
      date: "Дата:",
      grade: "Оценка:",
      mentor: "Учитель:",
      mentorSign: "Академия Математики Дробика"
    },
    progress: {
      title: "Мой Прогресс и Награды",
      totalXp: "Всего XP:",
      totalStars: "Собрано звёзд:",
      lessonsDone: "Пройдено уроков:",
      currentRank: "Текущее звание:",
      badgesTitle: "Коллекция медалей",
      parentTipTitle: "Совет для родителей и учителей:",
      parentTipDesc: "Используйте кулинарию дома: делите пирог на 4 или 8 частей, измеряйте полстакана молока, говорите о четверти часа на часах. Это развивает интуитивное понимание долей лучше любых формул."
    }
  },

  en: {
    appName: "Fraction Land - Common Fractions",
    characterName: "Alex",
    mascotName: "Fraction Pal",
    mascotGreeting: "Hi friend! I'm Fraction Pal. Let's explore tasty and easy fractions together!",
    nav: {
      home: "Home",
      learn: "Lessons",
      play: "Games",
      quiz: "Quiz",
      exam: "Final Exam",
      progress: "Progress"
    },
    common: {
      next: "Next",
      prev: "Back",
      check: "Check",
      correct: "Awesome! That's correct!",
      incorrect: "Not quite. Try again!",
      hint: "Hint",
      showSolution: "Show Solution",
      tryAgain: "Try Again",
      score: "Score",
      stars: "Stars",
      level: "Level",
      lives: "Lives",
      start: "Start",
      finish: "Finish",
      playAgain: "Play Again",
      numerator: "Numerator",
      denominator: "Denominator",
      fractionBar: "Fraction Bar",
      properFraction: "Proper Fraction",
      improperFraction: "Improper Fraction",
      mixedNumber: "Mixed Number",
      whole: "Whole",
      parts: "parts",
      streak: "day streak",
      calmMode: "Calm Mode",
      sound: "Sound",
      theme: "Theme",
      resetProgress: "Reset All Progress",
      confirmReset: "Are you sure you want to reset all your learning progress?",
      resetDone: "Progress reset successfully!",
      xpGained: "XP earned!",
      understandQuestion: "Did you understand this lesson?",
      easy: "Easy",
      medium: "Medium",
      hard: "Hard"
    },
    home: {
      welcomeTitle: "Welcome to Fraction Land!",
      welcomeSub: "The most interactive, fun fractions adventure for 5th graders",
      enterName: "Enter your name:",
      chooseAvatar: "Pick your avatar:",
      startJourney: "Start Learning Journey!",
      mapTitle: "My Learning Map",
      dailyChallengeTitle: "Daily Challenge (Bonus XP)",
      dailyChallengeBtn: "Solve Daily Questions",
      realLifeFactsTitle: "Fractions in Real Life",
      continueLesson: "Continue Lesson"
    },
    learn: {
      lessonPrefix: "Lesson",
      caseTitle: "Birthday Party Case (Real-Life Problem):",
      interactiveToolTitle: "Interactive Fraction Lab",
      interactiveDesc: "Adjust the numerator & denominator to see the pizza and chocolate update live!",
      tasksTitle: "Try it yourself!",
      rememberTitle: "Remember!",
      slicePizza: "Slice Pizza",
      selectSlices: "Select Slices",
      unlockedNotice: "Next lesson unlocked!",
      congratsLesson: "Congratulations! Lesson completed!"
    },
    games: {
      arcadeTitle: "Fraction Games Arcade",
      arcadeSub: "Play, have fun, and become a true fraction wizard!",
      chooseDifficulty: "Select difficulty:",
      pizzaChef: {
        title: "Pizza Chef",
        desc: "Slice and serve the exact pizza fraction the customer ordered!",
        order: "Customer Order:",
        serve: "Serve Pizza!",
        sliceBtn: "Slice Pizza"
      },
      balloonPop: {
        title: "Balloon Pop",
        desc: "Pop only the balloons that match the secret rule!",
        target: "Target Rule:"
      },
      memory: {
        title: "Fraction Memory Match",
        desc: "Flip cards to find pairs of fractions and matching pictures!",
        turns: "Turns:"
      },
      sorter: {
        title: "Fraction Sorter",
        desc: "Drag or place cards into the correct bins (Proper / Improper / Mixed)!",
        boxProper: "Proper Fractions",
        boxImproper: "Improper Fractions",
        boxMixed: "Mixed Numbers"
      },
      race: {
        title: "Fraction Race",
        desc: "Answer math questions quickly to speed your car past the robot!",
        player: "Your Car",
        robot: "Robot Racer",
        distance: "Distance"
      },
      monster: {
        title: "Feed the Monster",
        desc: "Hungry Nom-Nom wants a fraction of a sweet chocolate bar!",
        feedBtn: "Feed Monster!"
      },
      frog: {
        title: "Number Line Jump",
        desc: "Help the little frog jump straight to the correct fraction spot!",
        jumpTo: "Jump Target:",
        jumpBtn: "Jump!"
      }
    },
    quiz: {
      title: "Knowledge Quiz",
      selectCategory: "Select topic:",
      selectDifficulty: "Difficulty:",
      allCategories: "All Topics",
      timerOption: "Timer Mode",
      questionCount: "Question",
      of: "of",
      hintCost: "Hint (costs 2 XP)",
      answered: "Answered",
      practiceMistakesTitle: "Practice Your Mistakes",
      practiceMistakesDesc: "Review and solve questions you missed previously!",
      noMistakes: "You have no saved mistakes right now! Fantastic job!",
      startQuizBtn: "Start Quiz"
    },
    exam: {
      title: "Final Grand Exam",
      desc: "Take the 20-question comprehensive exam to test your full mastery!",
      startExamBtn: "Begin Exam",
      resultsTitle: "Exam Results",
      finalGrade: "Final Grade (5-point scale):",
      grade5: "5 (EXCELLENT) — You are a true Fraction Grandmaster!",
      grade4: "4 (GOOD) — Great job! Very strong understanding!",
      grade3: "3 (SATISFACTORY) — Decent work, but a few topics need review.",
      grade2: "2 (NEEDS REVIEW) — Don't worry! Review the lessons and try again.",
      topicBreakdown: "Topic Breakdown:",
      recommendations: "Personal Advice:",
      certificateBtn: "Print Certificate (PDF)",
      retakeBtn: "Retake Exam"
    },
    certificate: {
      title: "CERTIFICATE OF ACHIEVEMENT",
      subtitle: "This certificate proudly honors excellence in mathematics",
      awardedTo: "Awarded to:",
      bodyText: "For successfully completing the 5th Grade Common Fractions curriculum with outstanding dedication and mathematical skill.",
      date: "Date:",
      grade: "Grade:",
      mentor: "Instructor:",
      mentorSign: "Fraction Pal Math Academy"
    },
    progress: {
      title: "My Progress & Trophies",
      totalXp: "Total XP:",
      totalStars: "Total Stars:",
      lessonsDone: "Lessons Completed:",
      currentRank: "Current Rank:",
      badgesTitle: "Badges & Medals",
      parentTipTitle: "Tip for Parents & Educators:",
      parentTipDesc: "Involve fractions in daily kitchen activities: slicing pizza into 8 equal slices, pouring 1/2 cup of milk, or reading quarter-past on an analog clock. Tangible visual examples build deeper intuition than formulas alone."
    }
  }
};
