import { Question } from './types';

export const quizQuestions: Question[] = [
  // 1. CONCEPTS (10 questions)
  {
    id: "c1",
    category: "concepts",
    difficulty: "easy",
    type: "multiple_choice",
    prompt: {
      uz: "Kasr chizig'ining ostida turgan son nima deb ataladi?",
      ru: "Как называется число, стоящее под дробной чертой?",
      en: "What is the number below the fraction line called?"
    },
    options: {
      uz: ["Maxraj", "Surat", "Bo'linma", "Qoldiq"],
      ru: ["Знаменатель", "Числитель", "Частное", "Остаток"],
      en: ["Denominator", "Numerator", "Quotient", "Remainder"]
    },
    correctAnswer: 0,
    hint: {
      uz: "U butun nechta bo'lakka bo'linganini bildiradi (pastda turadi).",
      ru: "Оно показывает, на сколько частей разделили целое (внизу).",
      en: "It shows how many total parts there are (at the bottom)."
    },
    explanation: {
      uz: "Kasr chizig'ining ostidagi son MAXRAJ deb ataladi.",
      ru: "Число под чертой называется ЗНАМЕНАТЕЛЕМ.",
      en: "The number below the bar is the DENOMINATOR."
    }
  },
  {
    id: "c2",
    category: "concepts",
    difficulty: "easy",
    type: "multiple_choice",
    prompt: {
      uz: "Kasr chizig'i qaysi arifmetik amalni bildiradi?",
      ru: "Какое арифметическое действие обозначает дробная черта?",
      en: "Which arithmetic operation does the fraction bar represent?"
    },
    options: {
      uz: ["Bo'lish (:)", "Ko'paytirish (*)", "Qo'shish (+)", "Ayirish (-)"],
      ru: ["Деление (:)", "Умножение (*)", "Сложение (+)", "Вычитание (-)"],
      en: ["Division (/)", "Multiplication (*)", "Addition (+)", "Subtraction (-)"]
    },
    correctAnswer: 0,
    hint: {
      uz: "Masalan, 6/2 = 6 : 2 = 3.",
      ru: "Например, 6/2 = 6 : 2 = 3.",
      en: "For example, 6/2 = 6 / 2 = 3."
    },
    explanation: {
      uz: "Kasr chizig'i bo'lish amalining belgisidir.",
      ru: "Дробная черта — это знак деления.",
      en: "The fraction line represents division."
    }
  },
  {
    id: "c3",
    category: "concepts",
    difficulty: "easy",
    type: "true_false",
    prompt: {
      uz: "To'g'rimi: Kasr hosil bo'lishi uchun butun narsa ixtiyoriy, teng bo'lmagan bo'laklarga bo'linsa ham bo'ladi.",
      ru: "Верно ли: Чтобы получить дробь, целое можно делить на любые неравные куски.",
      en: "True or False: To form a fraction, parts do not have to be equal."
    },
    options: {
      uz: ["Noto'g'ri (Faqat teng bo'laklarga bo'linishi shart)", "To'g'ri"],
      ru: ["Неверно (Части обязательно должны быть равными)", "Верно"],
      en: ["False (Parts must be equal)", "True"]
    },
    correctAnswer: 0,
    hint: {
      uz: "Kasrlar har doim teng bo'laklar haqida.",
      ru: "Дроби всегда образуются из равных долей.",
      en: "Fractions strictly require equal slices."
    },
    explanation: {
      uz: "Kasr faqat TENG bo'laklarga bo'lingandagina hosil bo'ladi.",
      ru: "Дробь образуется только при делении на РАВНЫЕ части.",
      en: "Fractions are only defined for EQUAL parts."
    }
  },
  {
    id: "c4",
    category: "concepts",
    difficulty: "medium",
    type: "multiple_choice",
    prompt: {
      uz: "3/7 kasrida surat nechiga teng va u nimani anglatadi?",
      ru: "Чему равен числитель в дроби 3/7 и что он означает?",
      en: "In 3/7, what is the numerator and what does it mean?"
    },
    options: {
      uz: ["3 ga teng, olingan bo'laklar sonini", "7 ga teng, jami bo'laklar sonini", "4 ga teng", "10 ga teng"],
      ru: ["Равен 3, количество взятых частей", "Равен 7, общее число частей", "Равен 4", "Равен 10"],
      en: ["Equals 3, the number of parts taken", "Equals 7, total parts", "Equals 4", "Equals 10"]
    },
    correctAnswer: 0,
    hint: {
      uz: "Surat tepada turadi.",
      ru: "Числитель находится вверху.",
      en: "Numerator is the top number."
    },
    explanation: {
      uz: "Surat 3 ga teng bo'lib, olingan yoki bo'yalgan qismlarni bildiradi.",
      ru: "Числитель равен 3 и показывает число взятых частей.",
      en: "The numerator is 3, indicating the count of parts taken."
    }
  },
  {
    id: "c5",
    category: "concepts",
    difficulty: "hard",
    type: "multiple_choice",
    prompt: {
      uz: "Agar butun son 1 ga teng bo'lsa, uni qaysi kasr ko'rinishida yozish MUMKIN EMAS?",
      ru: "Какая из записей НЕ равна 1?",
      en: "Which of these does NOT equal 1?"
    },
    options: {
      uz: ["4/5", "5/5", "8/8", "12/12"],
      ru: ["4/5", "5/5", "8/8", "12/12"],
      en: ["4/5", "5/5", "8/8", "12/12"]
    },
    correctAnswer: 0,
    hint: {
      uz: "Surati va maxraji bir xil bo'lgan kasr 1 ga teng bo'ladi.",
      ru: "Дробь равна 1, если числитель равен знаменателю.",
      en: "A fraction equals 1 if numerator equals denominator."
    },
    explanation: {
      uz: "4/5 kasri 1 dan kichikdir (to'g'ri kasr). Qolganlari 1 ga teng.",
      ru: "4/5 меньше 1, а все остальные равны 1.",
      en: "4/5 is less than 1, whereas 5/5, 8/8, and 12/12 all equal 1."
    }
  },

  // 2. READING & NUMBER LINE (10 questions)
  {
    id: "r1",
    category: "reading",
    difficulty: "easy",
    type: "multiple_choice",
    prompt: {
      uz: "'Yarim' so'zi qaysi kasrni anglatadi?",
      ru: "Какая дробь означает «половина»?",
      en: "Which fraction means 'half'?"
    },
    options: {
      uz: ["1/2", "1/4", "2/1", "1/3"],
      ru: ["1/2", "1/4", "2/1", "1/3"],
      en: ["1/2", "1/4", "2/1", "1/3"]
    },
    correctAnswer: 0,
    hint: {
      uz: "Ikkiga bo'lingan butunning bir qismi.",
      ru: "Одна из двух равных частей.",
      en: "One of two equal parts."
    },
    explanation: {
      uz: "1/2 kasri yarim deganidir.",
      ru: "1/2 — это половина.",
      en: "1/2 is one half."
    }
  },
  {
    id: "r2",
    category: "reading",
    difficulty: "easy",
    type: "multiple_choice",
    prompt: {
      uz: "'Chorak' so'zi qaysi kasrni bildiradi?",
      ru: "Какая дробь означает «четверть»?",
      en: "Which fraction means a 'quarter'?"
    },
    options: {
      uz: ["1/4", "1/2", "4/1", "3/4"],
      ru: ["1/4", "1/2", "4/1", "3/4"],
      en: ["1/4", "1/2", "4/1", "3/4"]
    },
    correctAnswer: 0,
    hint: {
      uz: "To'rtdan bir qism.",
      ru: "Одна четвёртая часть.",
      en: "One fourth part."
    },
    explanation: {
      uz: "1/4 chorak deb ataladi.",
      ru: "1/4 — это четверть.",
      en: "1/4 represents a quarter."
    }
  },
  {
    id: "r3",
    category: "reading",
    difficulty: "medium",
    type: "multiple_choice",
    prompt: {
      uz: "Sonlar o'qida 0 dan 1 gacha bo'lgan oraliq 5 ta bo'lakka bo'lindi. 3-nuqta qaysi kasr bo'ladi?",
      ru: "Отрезок от 0 до 1 разделён на 5 частей. Какая дробь стоит на 3-й отметке?",
      en: "The interval from 0 to 1 is divided into 5 equal parts. What fraction is at the 3rd mark?"
    },
    options: {
      uz: ["3/5", "5/3", "2/5", "3/10"],
      ru: ["3/5", "5/3", "2/5", "3/10"],
      en: ["3/5", "5/3", "2/5", "3/10"]
    },
    correctAnswer: 0,
    hint: {
      uz: "Jami 5 bo'lak (maxraj), 3-qadam (surat).",
      ru: "Всего 5 частей (знаменатель), 3 шага (числитель).",
      en: "5 segments total, 3 steps from 0."
    },
    explanation: {
      uz: "3-belgi 3/5 kasrini ifodalaydi.",
      ru: "Третья отметка соответствует дроби 3/5.",
      en: "The 3rd mark corresponds to 3/5."
    }
  },
  {
    id: "r4",
    category: "reading",
    difficulty: "hard",
    type: "multiple_choice",
    prompt: {
      uz: "Qaysi kasr sonlar o'qida 1 soniga eng yaqin joylashgan?",
      ru: "Какая дробь ближе всего к числу 1 на числовом луче?",
      en: "Which fraction is closest to 1 on the number line?"
    },
    options: {
      uz: ["9/10", "1/2", "3/10", "7/10"],
      ru: ["9/10", "1/2", "3/10", "7/10"],
      en: ["9/10", "1/2", "3/10", "7/10"]
    },
    correctAnswer: 0,
    hint: {
      uz: "1 soni 10/10 ga teng. Qaysi biri 10/10 ga eng yaqin?",
      ru: "1 — это 10/10. Что ближе всего к 10/10?",
      en: "1 is 10/10. Which is nearest to 10/10?"
    },
    explanation: {
      uz: "9/10 soni 1 ga eng yaqin (atigi 1/10 yetishmaydi).",
      ru: "9/10 ближе всего к 1 (не хватает всего 1/10).",
      en: "9/10 is nearest to 1 (only 1/10 away)."
    }
  },

  // 3. PROPER, IMPROPER & MIXED (10 questions)
  {
    id: "t1",
    category: "types",
    difficulty: "easy",
    type: "multiple_choice",
    prompt: {
      uz: "Surati maxrajidan kichik bo'lgan kasr nima deyiladi?",
      ru: "Как называется дробь, у которой числитель меньше знаменателя?",
      en: "What do we call a fraction whose numerator is smaller than denominator?"
    },
    options: {
      uz: ["To'g'ri kasr", "Noto'g'ri kasr", "Aralash son", "Manfiy son"],
      ru: ["Правильная дробь", "Неправильная дробь", "Смешанное число", "Отрицательное число"],
      en: ["Proper fraction", "Improper fraction", "Mixed number", "Negative number"]
    },
    correctAnswer: 0,
    hint: {
      uz: "U har doim 1 dan kichik bo'ladi.",
      ru: "Она всегда меньше 1.",
      en: "It is always less than 1."
    },
    explanation: {
      uz: "Surati maxrajidan kichik kasr TO'G'RI kasr deyiladi.",
      ru: "Дробь с числителем меньше знаменателя — ПРАВИЛЬНАЯ.",
      en: "A fraction with numerator < denominator is a PROPER fraction."
    }
  },
  {
    id: "t2",
    category: "types",
    difficulty: "easy",
    type: "multiple_choice",
    prompt: {
      uz: "Quyidagilardan qaysi biri NOTO'G'RI kasr?",
      ru: "Какая из этих дробей НЕПРАВИЛЬНАЯ?",
      en: "Which of these is an IMPROPER fraction?"
    },
    options: {
      uz: ["8/5", "2/5", "3/8", "4/7"],
      ru: ["8/5", "2/5", "3/8", "4/7"],
      en: ["8/5", "2/5", "3/8", "4/7"]
    },
    correctAnswer: 0,
    hint: {
      uz: "Surati maxrajidan katta yoki teng bo'lishi kerak.",
      ru: "Числитель должен быть больше или равен знаменателю.",
      en: "Numerator must be >= denominator."
    },
    explanation: {
      uz: "8/5 kasrida 8 > 5 bo'lgani uchun u noto'g'ri kasrdir.",
      ru: "В дроби 8/5 числитель 8 > 5, значит она неправильная.",
      en: "In 8/5, 8 > 5 so it is an improper fraction."
    }
  },
  {
    id: "t3",
    category: "types",
    difficulty: "medium",
    type: "multiple_choice",
    prompt: {
      uz: "13/4 noto'g'ri kasrini aralash son ko'rinishida yozing:",
      ru: "Выделите целую часть из дроби 13/4:",
      en: "Convert 13/4 to a mixed number:"
    },
    options: {
      uz: ["3 butun 1/4", "2 butun 3/4", "4 butun 1/3", "3 butun 3/4"],
      ru: ["3 целых 1/4", "2 целых 3/4", "4 целых 1/3", "3 целых 3/4"],
      en: ["3 and 1/4", "2 and 3/4", "4 and 1/3", "3 and 3/4"]
    },
    correctAnswer: 0,
    hint: {
      uz: "13 ni 4 ga bo'ling: 3 marta bor, qoldiq 1.",
      ru: "13 делим на 4: 3 целых, остаток 1.",
      en: "13 / 4 = 3 with remainder 1."
    },
    explanation: {
      uz: "13 : 4 = 3 (qoldiq 1). Demak, 3 butun 1/4.",
      ru: "13 : 4 = 3 (остаток 1), то есть 3 целых 1/4.",
      en: "13 / 4 = 3 with remainder 1, giving 3 1/4."
    }
  },
  {
    id: "t4",
    category: "types",
    difficulty: "medium",
    type: "multiple_choice",
    prompt: {
      uz: "2 butun 3/5 aralash sonini noto'g'ri kasrga aylantiring:",
      ru: "Запишите смешанное число 2 целых 3/5 в виде неправильной дроби:",
      en: "Convert 2 and 3/5 into an improper fraction:"
    },
    options: {
      uz: ["13/5", "11/5", "10/5", "6/5"],
      ru: ["13/5", "11/5", "10/5", "6/5"],
      en: ["13/5", "11/5", "10/5", "6/5"]
    },
    correctAnswer: 0,
    hint: {
      uz: "2 * 5 + 3 = 13.",
      ru: "2 * 5 + 3 = 13.",
      en: "2 * 5 + 3 = 13."
    },
    explanation: {
      uz: "Butun qismni maxrajga ko'paytirib, suratni qo'shamiz: (2*5 + 3) / 5 = 13/5.",
      ru: "Умножаем целое на знаменатель и прибавляем числитель: (2*5 + 3) / 5 = 13/5.",
      en: "Multiply whole by denominator and add numerator: (2*5 + 3) / 5 = 13/5."
    }
  },

  // 4. COMPARING (10 questions)
  {
    id: "cp1",
    category: "comparing",
    difficulty: "easy",
    type: "multiple_choice",
    prompt: {
      uz: "Taqqoslang: 3/8 va 5/8",
      ru: "Сравните: 3/8 и 5/8",
      en: "Compare: 3/8 and 5/8"
    },
    options: {
      uz: ["3/8 < 5/8", "3/8 > 5/8", "3/8 = 5/8"],
      ru: ["3/8 < 5/8", "3/8 > 5/8", "3/8 = 5/8"],
      en: ["3/8 < 5/8", "3/8 > 5/8", "3/8 = 5/8"]
    },
    correctAnswer: 0,
    hint: {
      uz: "Maxrajlar teng bo'lsa, surati katta bo'lgan kasr katta.",
      ru: "При равных знаменателях больше дробь с большим числителем.",
      en: "When denominators are equal, larger numerator wins."
    },
    explanation: {
      uz: "Maxrajlari bir xil (8), shuning uchun 3 < 5 bo'lgani sababli 3/8 < 5/8.",
      ru: "Знаменатели равны, 3 < 5, поэтому 3/8 < 5/8.",
      en: "With equal denominators, 3 < 5, so 3/8 < 5/8."
    }
  },
  {
    id: "cp2",
    category: "comparing",
    difficulty: "medium",
    type: "multiple_choice",
    prompt: {
      uz: "Qaysi biri KATTA: 1/3 mi yoki 1/6 mi?",
      ru: "Что БОЛЬШЕ: 1/3 или 1/6?",
      en: "Which is GREATER: 1/3 or 1/6?"
    },
    options: {
      uz: ["1/3 katta", "1/6 katta", "Ikkalasi teng"],
      ru: ["1/3 больше", "1/6 больше", "Они равны"],
      en: ["1/3 is greater", "1/6 is greater", "They are equal"]
    },
    correctAnswer: 0,
    hint: {
      uz: "Pitsani 3 kishi bo'lishsa katta bo'lak tegadimi yoki 6 kishimi?",
      ru: "Торт делят на 3 или на 6 частей — какой кусок больше?",
      en: "Sharing with 3 gives larger slices than sharing with 6."
    },
    explanation: {
      uz: "Suratlari bir xil (1) bo'lsa, maxraji kichik bo'lgan kasr kattaroq bo'ladi: 1/3 > 1/6.",
      ru: "При одинаковых числителях больше та дробь, у которой знаменатель меньше: 1/3 > 1/6.",
      en: "With identical numerators, smaller denominator means bigger slices: 1/3 > 1/6."
    }
  },
  {
    id: "cp3",
    category: "comparing",
    difficulty: "medium",
    type: "multiple_choice",
    prompt: {
      uz: "Qaysi kasr 1 dan KATTA?",
      ru: "Какая дробь БОЛЬШЕ 1?",
      en: "Which fraction is GREATER than 1?"
    },
    options: {
      uz: ["7/6", "5/6", "6/6", "1/2"],
      ru: ["7/6", "5/6", "6/6", "1/2"],
      en: ["7/6", "5/6", "6/6", "1/2"]
    },
    correctAnswer: 0,
    hint: {
      uz: "Surati maxrajidan katta bo'lishi kerak.",
      ru: "Числитель должен быть строго больше знаменателя.",
      en: "Numerator must strictly exceed denominator."
    },
    explanation: {
      uz: "7/6 noto'g'ri kasr bo'lib, 7 > 6 bo'lgani sababli 1 dan kattadir.",
      ru: "В дроби 7/6 числитель 7 > 6, поэтому 7/6 > 1.",
      en: "7/6 has numerator 7 > 6, so it is greater than 1."
    }
  },

  // 5. OPERATIONS (ADD & SUBTRACT) (12 questions)
  {
    id: "op1",
    category: "operations",
    difficulty: "easy",
    type: "multiple_choice",
    prompt: {
      uz: "Hisoblang: 2/9 + 5/9 = ?",
      ru: "Вычислите: 2/9 + 5/9 = ?",
      en: "Calculate: 2/9 + 5/9 = ?"
    },
    options: {
      uz: ["7/9", "7/18", "10/9", "3/9"],
      ru: ["7/9", "7/18", "10/9", "3/9"],
      en: ["7/9", "7/18", "10/9", "3/9"]
    },
    correctAnswer: 0,
    hint: {
      uz: "Maxraj (9) qoladi, 2 + 5 = 7.",
      ru: "Знаменатель 9 остаётся, 2 + 5 = 7.",
      en: "Denominator 9 remains, 2 + 5 = 7."
    },
    explanation: {
      uz: "2/9 + 5/9 = (2+5)/9 = 7/9.",
      ru: "2/9 + 5/9 = (2+5)/9 = 7/9.",
      en: "2/9 + 5/9 = (2+5)/9 = 7/9."
    }
  },
  {
    id: "op2",
    category: "operations",
    difficulty: "easy",
    type: "multiple_choice",
    prompt: {
      uz: "Hisoblang: 7/11 - 4/11 = ?",
      ru: "Вычислите: 7/11 - 4/11 = ?",
      en: "Calculate: 7/11 - 4/11 = ?"
    },
    options: {
      uz: ["3/11", "3/0", "11/11", "1/11"],
      ru: ["3/11", "3/0", "11/11", "1/11"],
      en: ["3/11", "3/0", "11/11", "1/11"]
    },
    correctAnswer: 0,
    hint: {
      uz: "Maxraj 11 qoladi, 7 - 4 = 3.",
      ru: "Знаменатель 11 остаётся, 7 - 4 = 3.",
      en: "Denominator 11 remains, 7 - 4 = 3."
    },
    explanation: {
      uz: "7/11 - 4/11 = (7-4)/11 = 3/11.",
      ru: "7/11 - 4/11 = (7-4)/11 = 3/11.",
      en: "7/11 - 4/11 = (7-4)/11 = 3/11."
    }
  },
  {
    id: "op3",
    category: "operations",
    difficulty: "medium",
    type: "multiple_choice",
    prompt: {
      uz: "1 butundan 4/7 ni ayiring: (1 - 4/7)",
      ru: "Вычтите из единицы 4/7: (1 - 4/7)",
      en: "Subtract 4/7 from 1: (1 - 4/7)"
    },
    options: {
      uz: ["3/7", "4/7", "5/7", "2/7"],
      ru: ["3/7", "4/7", "5/7", "2/7"],
      en: ["3/7", "4/7", "5/7", "2/7"]
    },
    correctAnswer: 0,
    hint: {
      uz: "1 ni 7/7 ko'rinishida yozing: 7/7 - 4/7.",
      ru: "Представьте 1 как 7/7: 7/7 - 4/7.",
      en: "Write 1 as 7/7: 7/7 - 4/7."
    },
    explanation: {
      uz: "1 = 7/7, shuning uchun 7/7 - 4/7 = 3/7.",
      ru: "1 = 7/7, поэтому 7/7 - 4/7 = 3/7.",
      en: "1 = 7/7, so 7/7 - 4/7 = 3/7."
    }
  },
  {
    id: "op4",
    category: "operations",
    difficulty: "hard",
    type: "multiple_choice",
    prompt: {
      uz: "Aralash sonlarni qo'shing: 1 butun 2/5 + 2 butun 1/5 = ?",
      ru: "Сложите смешанные числа: 1 целая 2/5 + 2 целых 1/5 = ?",
      en: "Add mixed numbers: 1 and 2/5 + 2 and 1/5 = ?"
    },
    options: {
      uz: ["3 butun 3/5", "3 butun 3/10", "4 butun 1/5", "2 butun 3/5"],
      ru: ["3 целых 3/5", "3 целых 3/10", "4 целых 1/5", "2 целых 3/5"],
      en: ["3 and 3/5", "3 and 3/10", "4 and 1/5", "2 and 3/5"]
    },
    correctAnswer: 0,
    hint: {
      uz: "Butunlarni butunlarga qo'shamiz (1+2=3), kasrlarni kasrlarga (2/5+1/5=3/5).",
      ru: "Складываем целые с целыми (1+2=3) и дроби с дробями (2/5+1/5=3/5).",
      en: "Add wholes together (1+2=3) and fractions together (2/5+1/5=3/5)."
    },
    explanation: {
      uz: "Butun qismlar: 1+2=3, kasr qismlar: 2/5+1/5=3/5. Natija: 3 butun 3/5.",
      ru: "Целые: 1+2=3, дроби: 2/5+1/5=3/5. Ответ: 3 целых 3/5.",
      en: "Wholes: 1+2=3, fractions: 2/5+1/5=3/5. Result: 3 3/5."
    }
  },

  // 6. FRACTION OF A NUMBER & SIMPLIFYING (10 questions)
  {
    id: "fs1",
    category: "number_of_fraction",
    difficulty: "easy",
    type: "multiple_choice",
    prompt: {
      uz: "16 ning 1/4 qismi nechiga teng?",
      ru: "Чему равна 1/4 от числа 16?",
      en: "What is 1/4 of 16?"
    },
    options: {
      uz: ["4", "8", "2", "6"],
      ru: ["4", "8", "2", "6"],
      en: ["4", "8", "2", "6"]
    },
    correctAnswer: 0,
    hint: {
      uz: "16 ni 4 ga bo'ling.",
      ru: "Разделите 16 на 4.",
      en: "Divide 16 by 4."
    },
    explanation: {
      uz: "16 : 4 = 4.",
      ru: "16 : 4 = 4.",
      en: "16 / 4 = 4."
    }
  },
  {
    id: "fs2",
    category: "number_of_fraction",
    difficulty: "medium",
    type: "multiple_choice",
    prompt: {
      uz: "35 sonining 3/7 qismini toping:",
      ru: "Найдите 3/7 от числа 35:",
      en: "Find 3/7 of 35:"
    },
    options: {
      uz: ["15 (35 : 7 = 5; 5 * 3 = 15)", "21", "10", "25"],
      ru: ["15 (35 : 7 = 5; 5 * 3 = 15)", "21", "10", "25"],
      en: ["15 (35 / 7 = 5; 5 * 3 = 15)", "21", "10", "25"]
    },
    correctAnswer: 0,
    hint: {
      uz: "35 ni 7 ga bo'ling (5), keyin 3 ga ko'paytiring.",
      ru: "35 разделите на 7 (5), затем умножьте на 3.",
      en: "Divide 35 by 7 (5), then multiply by 3."
    },
    explanation: {
      uz: "35 : 7 = 5; 5 * 3 = 15.",
      ru: "35 : 7 = 5; 5 * 3 = 15.",
      en: "35 / 7 = 5; 5 * 3 = 15."
    }
  },
  {
    id: "fs3",
    category: "number_of_fraction",
    difficulty: "medium",
    type: "multiple_choice",
    prompt: {
      uz: "6/10 kasrini qisqartiring:",
      ru: "Сократите дробь 6/10:",
      en: "Simplify the fraction 6/10:"
    },
    options: {
      uz: ["3/5", "2/5", "1/2", "3/10"],
      ru: ["3/5", "2/5", "1/2", "3/10"],
      en: ["3/5", "2/5", "1/2", "3/10"]
    },
    correctAnswer: 0,
    hint: {
      uz: "6 va 10 sonlarini 2 ga bo'ling.",
      ru: "Разделите 6 и 10 на 2.",
      en: "Divide both 6 and 10 by 2."
    },
    explanation: {
      uz: "(6:2) / (10:2) = 3/5.",
      ru: "(6:2) / (10:2) = 3/5.",
      en: "(6/2) / (10/2) = 3/5."
    }
  },

  // 7. WORD PROBLEMS (10 questions)
  {
    id: "wp1",
    category: "word_problems",
    difficulty: "easy",
    type: "multiple_choice",
    prompt: {
      uz: "Dasturxonda 12 ta shirinlik bor edi. Bolalar ularning 1/3 qismini yeyishdi. Nechta shirinlik yeyildi?",
      ru: "На столе было 12 пирожных. Дети съели 1/3 всех пирожных. Сколько пирожных съели?",
      en: "There were 12 pastries on the table. The children ate 1/3 of them. How many pastries were eaten?"
    },
    options: {
      uz: ["4 ta (12 : 3 = 4)", "6 ta", "3 ta", "8 ta"],
      ru: ["4 (12 : 3 = 4)", "6", "3", "8"],
      en: ["4 (12 / 3 = 4)", "6", "3", "8"]
    },
    correctAnswer: 0,
    hint: {
      uz: "12 ni 3 ga bo'ling.",
      ru: "12 разделите на 3.",
      en: "Divide 12 by 3."
    },
    explanation: {
      uz: "12 : 3 = 4 ta shirinlik.",
      ru: "12 : 3 = 4 пирожных.",
      en: "12 / 3 = 4 pastries."
    }
  },
  {
    id: "wp2",
    category: "word_problems",
    difficulty: "medium",
    type: "multiple_choice",
    prompt: {
      uz: "O'quvchi 60 sahifali kitobning 2/5 qismini o'qidi. Unga yana necha sahifa o'qish qoldi?",
      ru: "Ученик прочитал 2/5 книги из 60 страниц. Сколько страниц ему осталось прочитать?",
      en: "A student read 2/5 of a 60-page book. How many pages remain to be read?"
    },
    options: {
      uz: ["36 sahifa (o'qilgani 24, qolgani 60 - 24 = 36)", "24 sahifa", "40 sahifa", "30 sahifa"],
      ru: ["36 страниц (прочитано 24, осталось 60 - 24 = 36)", "24 страницы", "40 страниц", "30 страниц"],
      en: ["36 pages (read 24, remains 60 - 24 = 36)", "24 pages", "40 pages", "30 pages"]
    },
    correctAnswer: 0,
    hint: {
      uz: "Avval 60 ning 2/5 qismini toping (24), so'ng 60 dan ayiring.",
      ru: "Сначала найдите 2/5 от 60 (24), затем вычтите из 60.",
      en: "First calculate 2/5 of 60 (24), then subtract from 60."
    },
    explanation: {
      uz: "60 : 5 * 2 = 24 sahifa o'qilgan. Qolgani: 60 - 24 = 36 sahifa.",
      ru: "60 : 5 * 2 = 24 прочитано. Осталось: 60 - 24 = 36 страниц.",
      en: "60 / 5 * 2 = 24 pages read. Remaining: 60 - 24 = 36 pages."
    }
  },
  {
    id: "wp3",
    category: "word_problems",
    difficulty: "hard",
    type: "multiple_choice",
    prompt: {
      uz: "Do'konda 45 kg olma bor edi. Birinchi kuni olmalarning 1/5 qismi, ikkinchi kuni esa 2/5 qismi sotildi. Qancha olma qoldi?",
      ru: "В магазине было 45 кг яблок. В первый день продали 1/5 часть, во второй — 2/5 части. Сколько кг яблок осталось?",
      en: "A store had 45 kg of apples. On day one 1/5 was sold, and on day two 2/5 was sold. How many kg of apples remain?"
    },
    options: {
      uz: ["18 kg (jami 3/5 sotildi = 27 kg; qoldi 45 - 27 = 18 kg)", "27 kg", "15 kg", "20 kg"],
      ru: ["18 кг (продано 3/5 = 27 кг; осталось 45 - 27 = 18 кг)", "27 кг", "15 кг", "20 кг"],
      en: ["18 kg (sold 3/5 = 27 kg; remains 45 - 27 = 18 kg)", "27 kg", "15 kg", "20 kg"]
    },
    correctAnswer: 0,
    hint: {
      uz: "Jami sotilgan qism: 1/5 + 2/5 = 3/5.",
      ru: "Всего продали: 1/5 + 2/5 = 3/5.",
      en: "Total sold: 1/5 + 2/5 = 3/5."
    },
    explanation: {
      uz: "1/5 + 2/5 = 3/5 sotildi. 45 : 5 * 3 = 27 kg. Qoldi: 45 - 27 = 18 kg.",
      ru: "1/5 + 2/5 = 3/5 продано. 45 : 5 * 3 = 27 кг. Осталось: 45 - 27 = 18 кг.",
      en: "1/5 + 2/5 = 3/5 sold. 45 / 5 * 3 = 27 kg. Remaining: 45 - 27 = 18 kg."
    }
  }
];
