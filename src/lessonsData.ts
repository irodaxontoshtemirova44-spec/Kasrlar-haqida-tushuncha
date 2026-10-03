import { Lesson } from './types';

export const lessonsData: Lesson[] = [
  {
    id: 1,
    title: {
      uz: "1. Kasr nima? Butun va teng bo'laklar",
      ru: "1. Что такое дробь? Целое и равные части",
      en: "1. What is a fraction? Whole and equal parts"
    },
    caseStory: {
      uz: "Azizaning tug'ilgan kuniga katta mazali pitsa olib kelindi! Dasturxonda 4 nafar eng yaqin do'stlar bor. Ular butun pitsani hech kim xafa bo'lmasligi uchun bir xil, teng bo'laklarga bo'lishlari kerak. Qanday qilib teng taqsimlash mumkin?",
      ru: "На день рождения Ани принесли большую вкусную пиццу! За столом сидят 4 лучших друга. Они хотят разделить пиццу поровну, чтобы никому не было обидно. Как это сделать?",
      en: "A delicious pizza was brought to Alex's birthday party! 4 best friends are sitting at the table. They must divide the whole pizza into identical, equal slices so everyone gets a fair share. How should they do it?"
    },
    explanation: {
      uz: "Bitta butun narsa (pitsa, olma, shokolad) teng qismlarga bo'linganda har bir qism KASR deb ataladi. Agar butun narsa 4 ta teng qismga bo'linsa, har bir do'stga bitta bo'lak — ya'ni to'rtdan bir qism (1/4) tegadi!",
      ru: "Когда один целый предмет (пицца, яблоко, плитка шоколада) делится на равные части, каждая часть называется ДРОБЬЮ. Если пиццу разрезать на 4 равные части, каждому достанется одна часть — то есть одна четвёртая (1/4)!",
      en: "When one whole item (a pizza, apple, chocolate bar) is divided into equal parts, each part is called a FRACTION. If a whole pizza is sliced into 4 equal slices, each friend gets one slice — one fourth (1/4)!"
    },
    defaultFraction: { num: 1, den: 4 },
    tasks: [
      {
        id: 1,
        question: {
          uz: "Agar pitsa 8 ta teng bo'lakka bo'linsa va siz 1 bo'lakni yesangiz, pitsaning qancha qismini yegan bo'lasiz?",
          ru: "Если пиццу разрезать на 8 равных частей и съесть 1 кусочек, какую часть пиццы вы съели?",
          en: "If a pizza is cut into 8 equal slices and you eat 1 slice, what fraction of the pizza did you eat?"
        },
        options: {
          uz: ["1/8 qismini", "1/4 qismini", "1/2 qismini", "8/1 qismini"],
          ru: ["1/8 часть", "1/4 часть", "1/2 часть", "8/1 часть"],
          en: ["1/8 of it", "1/4 of it", "1/2 of it", "8/1 of it"]
        },
        correctAnswer: 0,
        type: 'choice',
        hint: {
          uz: "Pitsa jami 8 bo'lakka bo'lingan, siz esa 1 bo'lak oldingiz.",
          ru: "Пицца разделена на 8 частей, а взят только 1 кусочек.",
          en: "The pizza is cut into 8 slices, and you took 1 slice."
        }
      },
      {
        id: 2,
        question: {
          uz: "Quyidagilardan qaysi biri KASR bo'lishi uchun shart hisoblanadi?",
          ru: "Какое условие обязательно, чтобы части образовали дробь?",
          en: "Which condition is strictly required for parts to form a fraction?"
        },
        options: {
          uz: ["Bo'laklar mutlaqo TENG bo'lishi kerak", "Bo'laklar har xil o'lchamda bo'lishi mumkin", "Faqat 2 ga bo'lish mumkin", "Bo'laklar dumaloq bo'lishi kerak"],
          ru: ["Все части должны быть РАВНЫМИ", "Части могут быть разного размера", "Делить можно только на 2", "Части должны быть круглыми"],
          en: ["All parts must be EQUAL", "Parts can be different sizes", "You can only divide by 2", "Parts must be round"]
        },
        correctAnswer: 0,
        type: 'choice',
        hint: {
          uz: "Adolatli taqsimotda bo'laklar o'zaro teng bo'lishi shart!",
          ru: "Для дробей части обязательно должны быть равными!",
          en: "For fractions, all pieces must be strictly equal!"
        }
      }
    ],
    rememberBox: {
      uz: "Eslab qoling: Kasr — bu bir butunning TENG bo'laklaridir! Agar bo'laklar teng bo'lmasa, uni oddiy kasr deb yoza olmaymiz.",
      ru: "Запомни: Дробь — это РАВНЫЕ части одного целого! Если части не равны, записать их обычной дробью нельзя.",
      en: "Remember: A fraction represents EQUAL parts of a whole! If parts are unequal, we cannot express them as a common fraction."
    }
  },

  {
    id: 2,
    title: {
      uz: "2. Surat va maxraj: kim qayerda?",
      ru: "2. Числитель и знаменатель: кто где?",
      en: "2. Numerator and Denominator: who goes where?"
    },
    caseStory: {
      uz: "Azizaning ukasi Jasur dasturxondagi 8 bo'lakli pitsadan 3 ta bo'lakni yeb qo'ydi. Mehmonlar kelganda 'Pitsadan qancha qismi qoldi yoki yeyildi?' deb so'rashdi. Buni matematik daftarga qanday qilib aniq sonlar bilan yozish mumkin?",
      ru: "Младший брат Ани съел 3 кусочка из 8 кусочков пиццы. Гости спросили: «Какую часть пиццы съел брат?». Как записать это математически в тетради?",
      en: "Alex's little brother ate 3 slices out of an 8-slice pizza. Guests asked: 'What fraction of the pizza was eaten?'. How do we record this mathematically?"
    },
    explanation: {
      uz: "Kasr 3 ta asosiy elementdan iborat:\n1) KASR CHIZIG'I (o'rtada bo'lish amalini bildiradi)\n2) MAXRAJ (pastda turadi): Butun jami nechta teng qismga bo'linganini ko'rsatadi (8 ta)\n3) SURAT (tepada turadi): Olingan yoki bo'yalgan qismlar sonini ko'rsatadi (3 ta). Demak: 3/8!",
      ru: "Дробь состоит из 3 элементов:\n1) ДРОБНАЯ ЧЕРТА (посередине, означает деление)\n2) ЗНАМЕНАТЕЛЬ (внизу): показывает, на сколько равных частей разделили целое (на 8)\n3) ЧИСЛИТЕЛЬ (вверху): показывает, сколько таких частей взяли (3). Получаем: 3/8!",
      en: "A fraction consists of 3 main parts:\n1) FRACTION BAR (middle line, means division)\n2) DENOMINATOR (bottom): tells how many equal parts the whole is cut into (8)\n3) NUMERATOR (top): counts how many of those parts we have (3). We write: 3/8!"
    },
    defaultFraction: { num: 3, den: 8 },
    tasks: [
      {
        id: 1,
        question: {
          uz: "5/9 kasrida MAXRAJ nechiga teng?",
          ru: "В дроби 5/9 чему равен ЗНАМЕНАТЕЛЬ?",
          en: "In the fraction 5/9, what is the DENOMINATOR?"
        },
        options: {
          uz: ["9 (chunki u pastda turadi)", "5 (chunki u tepada turadi)", "14", "4"],
          ru: ["9 (так как он внизу)", "5 (так как он вверху)", "14", "4"],
          en: ["9 (because it is at the bottom)", "5 (because it is on top)", "14", "4"]
        },
        correctAnswer: 0,
        type: 'choice',
        hint: {
          uz: "Maxraj doimo kasr chizig'ining ostida joylashadi!",
          ru: "Знаменатель всегда пишется под чертой!",
          en: "Denominator is always downstairs under the bar!"
        }
      },
      {
        id: 2,
        question: {
          uz: "Agar butun shokolad 10 bo'lakka bo'linib, 7 bo'lagi yeyilgan bo'lsa, surat nechiga teng?",
          ru: "Если плитку шоколада разделили на 10 долек и съели 7 долек, чему равен числитель?",
          en: "If a chocolate bar is divided into 10 pieces and 7 pieces are eaten, what is the numerator?"
        },
        options: {
          uz: ["7", "10", "3", "17"],
          ru: ["7", "10", "3", "17"],
          en: ["7", "10", "3", "17"]
        },
        correctAnswer: 0,
        type: 'choice',
        hint: {
          uz: "Surat — olingan bo'laklar soni.",
          ru: "Числитель считает взятые дольки.",
          en: "Numerator counts the pieces taken."
        }
      }
    ],
    rememberBox: {
      uz: "Yodda saqlash oson: 'S'urat — 'S'amoda (tepada), 'M'axraj — 'M'aydon (pastda, yerda)! Kasr chizig'i esa bo'lish belgisidir.",
      ru: "Легко запомнить: ЧИСЛИТЕЛЬ — Числит (считает наверху), ЗНАМЕНАТЕЛЬ — Знакомит с размером долей (внизу)!",
      en: "Easy memory trick: 'N'umerator = 'N'orth (up top), 'D'enominator = 'D'own (bottom)!"
    }
  },

  {
    id: 3,
    title: {
      uz: "3. Kasrlarni o'qish va yozish",
      ru: "3. Чтение и запись обыкновенных дробей",
      en: "3. Reading and Writing Common Fractions"
    },
    caseStory: {
      uz: "Oshpaz do'stlariga mevali shirinlik tayyorlash retseptini yozib berdi: 'Idishga 3/4 litr olma sharbati va 1/2 choy qoshiq dolchin soling'. Aziza buni o'qiyotganda qanday talaffuz qilishi kerak?",
      ru: "Шеф-повар записал рецепт праздничного десерта: «Возьмите 3/4 литра яблочного сока и 1/2 ложки корицы». Как Ане правильно прочитать эти записи вслух?",
      en: "The chef wrote a dessert recipe: 'Add 3/4 litre of apple juice and 1/2 teaspoon of cinnamon'. How should Alex read these aloud correctly?"
    },
    explanation: {
      uz: "O'zbek tilida kasrlar avval maxraji, keyin surati bilan o'qiladi:\n3/4 = 'to'rtdan uch'\n5/6 = 'oltidan besh'\n1/2 = 'ikkidan bir' (yoki 'yarim')\n1/4 = 'chorak'",
      ru: "В русском языке числитель читается как количественное числительное женского рода (одна, две, три), а знаменатель — как порядковое (четвёртая, пятых, шестых):\n3/4 = «три четвёртых»\n1/2 = «одна вторая» (половина)\n1/4 = «одна четвёртая» (четверть)",
      en: "In English, we say the numerator as a cardinal number, and the denominator as an ordinal number:\n3/4 = 'three fourths' (or three quarters)\n1/2 = 'one half'\n5/6 = 'five sixths'"
    },
    defaultFraction: { num: 3, den: 4 },
    tasks: [
      {
        id: 1,
        question: {
          uz: "5/8 kasri to'g'ri o'qilishini toping:",
          ru: "Выберите правильное прочтение дроби 5/8:",
          en: "Choose the correct reading of 5/8:"
        },
        options: {
          uz: ["Sakkizdan besh", "Beshdan sakkiz", "Sakkiz va besh", "Besh sakkiz"],
          ru: ["Пять восьмых", "Восемь пятых", "Пять и восемь", "Пять разделить на восемьдесят"],
          en: ["Five eighths", "Eight fifths", "Five and eight", "Five of eight"]
        },
        correctAnswer: 0,
        type: 'choice',
        hint: {
          uz: "Avval maxraj (-dan qo'shimchasi bilan), keyin surat o'qiladi.",
          ru: "Сначала числитель (пять), затем знаменатель (восьмых).",
          en: "First top number (five), then bottom ordinal (eighths)."
        }
      },
      {
        id: 2,
        question: {
          uz: "Pitsaning yarmi kasr shaklida qanday yoziladi?",
          ru: "Как записать «половину» в виде обыкновенной дроби?",
          en: "How do you write 'one half' as a fraction?"
        },
        options: {
          uz: ["1/2", "2/1", "1/4", "2/2"],
          ru: ["1/2", "2/1", "1/4", "2/2"],
          en: ["1/2", "2/1", "1/4", "2/2"]
        },
        correctAnswer: 0,
        type: 'choice',
        hint: {
          uz: "Butun 2 ga bo'lingan va 1 qismi olingan.",
          ru: "Целое разделено на 2 части, взята 1 часть.",
          en: "Divided into 2 parts, taking 1 part."
        }
      }
    ],
    rememberBox: {
      uz: "1/2 — bu 'yarim', 1/4 — bu 'chorak'! Doimo maxraj butun nechta bo'lakka bo'linganini anglatadi.",
      ru: "1/2 — это «половина», а 1/4 — «четверть»! Дроби помогают нам точно отмерять ингредиенты и время.",
      en: "1/2 is 'half', 1/4 is 'quarter'! Fractions help us measure cooking ingredients and time precisely."
    }
  },

  {
    id: 4,
    title: {
      uz: "4. Sonlar o'qida kasrlar",
      ru: "4. Дроби на числовом луче",
      en: "4. Fractions on the Number Line"
    },
    caseStory: {
      uz: "Bayramda bolalar 1 metrli pol gilamchasida sakrash o'yini o'ynashmoqda. Start 0 nuqtada, marra esa 1 metrda. Aziza 3/4 metrga sakradi. U qayerga qo'ndi — 0 ga yaqinroqmi yoki 1 gami?",
      ru: "На празднике ребята играют в прыжки на дорожке длиной 1 метр. Старт в точке 0, финиш в точке 1. Аня прыгнула на 3/4 метра. Куда она приземлилась — ближе к 0 или к 1?",
      en: "At the party, kids played a jumping game on a 1-meter floor strip! Start is at 0, finish at 1. Alex jumped to 3/4 meter. Where did Alex land — closer to 0 or closer to 1?"
    },
    explanation: {
      uz: "Sonlar o'qida 0 dan 1 gacha bo'lgan birlik kesmani maxraj ko'rsatgancha teng bo'laklarga ajratamiz. 3/4 nuqtasini topish uchun 0 dan 1 gacha bo'lgan oraliqni 4 ta teng qismga bo'lib, 0 dan o'ngga 3 qadam yuramiz. 3/4 nuqtasi 1 ga juda yaqin!",
      ru: "На числовом луче отрезок от 0 до 1 делится на столько равных частей, чему равен знаменатель. Чтобы найти 3/4, делим отрезок от 0 до 1 на 4 равные части и отсчитываем 3 шага вправо. Точка 3/4 ближе к 1!",
      en: "On a number line, we divide the interval from 0 to 1 into equal segments matching the denominator. For 3/4, split 0 to 1 into 4 equal segments and step 3 steps from 0. 3/4 is very close to 1!"
    },
    defaultFraction: { num: 3, den: 4 },
    tasks: [
      {
        id: 1,
        question: {
          uz: "0 va 1 sonlarining qoq o'rtasida qaysi kasr joylashgan?",
          ru: "Какая дробь лежит ровно посередине между 0 и 1?",
          en: "Which fraction lies exactly in the middle between 0 and 1?"
        },
        options: {
          uz: ["1/2", "1/4", "3/4", "1/10"],
          ru: ["1/2", "1/4", "3/4", "1/10"],
          en: ["1/2", "1/4", "3/4", "1/10"]
        },
        correctAnswer: 0,
        type: 'choice',
        hint: {
          uz: "Yarim yo'l 2 teng bo'lakka bo'lingan oraliqning birinchi bo'lagidir.",
          ru: "Половина расстояния — это 1/2.",
          en: "Halfway is 1/2."
        }
      },
      {
        id: 2,
        question: {
          uz: "Agar birlik kesma 6 ta bo'lakka bo'lingan bo'lsa, 1 ga teng nuqta qaysi kasr bo'ladi?",
          ru: "Если отрезок от 0 до 1 поделён на 6 частей, какая дробь совпадает с числом 1?",
          en: "If the unit interval is divided into 6 segments, which fraction equals 1?"
        },
        options: {
          uz: ["6/6", "1/6", "5/6", "6/1"],
          ru: ["6/6", "1/6", "5/6", "6/1"],
          en: ["6/6", "1/6", "5/6", "6/1"]
        },
        correctAnswer: 0,
        type: 'choice',
        hint: {
          uz: "Barcha 6 ta bo'lak olinsa, 1 butun hosil bo'ladi (6/6 = 1).",
          ru: "Все 6 долей из 6 образуют целое: 6/6 = 1.",
          en: "All 6 slices out of 6 make 1 whole: 6/6 = 1."
        }
      }
    ],
    rememberBox: {
      uz: "Kasrlar ham haqiqiy sonlar bo'lib, sonlar o'qida o'zining aniq o'rniga ega! 0 dan o'ngga qarab sonlar kattalashib boradi.",
      ru: "Дроби — это настоящие числа, у каждого есть своё точное место на числовом луче! Двигаясь вправо, числа увеличиваются.",
      en: "Fractions are real numbers with exact locations on the number line! Moving right means numbers increase."
    }
  },

  {
    id: 5,
    title: {
      uz: "5. To'g'ri va noto'g'ri kasrlar. Aralash sonlar",
      ru: "5. Правильные и неправильные дроби. Смешанные числа",
      en: "5. Proper & Improper Fractions; Mixed Numbers"
    },
    caseStory: {
      uz: "Bayramga 11 nafar mehmon keldi. Har bir mehmon 1 bo'lakdan pitsa yemoqchi. Lekin hamma pitsalar 4 bo'lakli qilib kesilgan! Azizaga nechta bo'lak kerak? 11/4 bo'lak! Bu nechtadir butun pitsa va yana qo'shimcha bo'laklar deganimi?",
      ru: "На праздник пришли 11 гостей. Каждый хочет по 1 кусочку пиццы. Но все пиццы нарезаны по 4 кусочка! Нужно 11/4 пиццы. Сколько это целых пицц и кусочков?",
      en: "11 guests attended the party. Each wants 1 slice of pizza. But all pizzas are sliced into 4 pieces! Alex needs 11/4 of a pizza. How many whole pizzas and extra slices is that?"
    },
    explanation: {
      uz: "1) TO'G'RI KASR: Surati maxrajidan kichik (masalan 3/4). U doim 1 dan kichik!\n2) NOTO'G'RI KASR: Surati maxrajiga teng yoki undan KATTA (masalan 11/4 yoki 4/4). U 1 ga teng yoki 1 dan katta!\n3) ARALASH SON: Butun qism va to'g'ri kasrdan iborat: 11 ni 4 ga bo'lsak: 2 butun 3/4 hosil bo'ladi (2 ta butun pitsa va 3/4 bo'lak)!",
      ru: "1) ПРАВИЛЬНАЯ ДРОБЬ: числитель меньше знаменателя (3/4). Она меньше 1!\n2) НЕПРАВИЛЬНАЯ ДРОБЬ: числитель равен или БОЛЬШЕ знаменателя (11/4, 4/4). Она больше или равна 1!\n3) СМЕШАННОЕ ЧИСЛО: состоит из целой части и правильной дроби. 11/4 = 2 целых и 3/4 (две целые пиццы и ещё 3 кусочка)!",
      en: "1) PROPER FRACTION: numerator is smaller than denominator (e.g. 3/4). It's less than 1!\n2) IMPROPER FRACTION: numerator is equal to or GREATER than denominator (e.g. 11/4, 4/4). It's >= 1!\n3) MIXED NUMBER: contains a whole number and a proper fraction. 11 / 4 = 2 and 3/4!"
    },
    defaultFraction: { num: 11, den: 4 },
    tasks: [
      {
        id: 1,
        question: {
          uz: "7/5 qanday kasr turi hisoblanadi?",
          ru: "К какому виду относится дробь 7/5?",
          en: "What type of fraction is 7/5?"
        },
        options: {
          uz: ["Noto'g'ri kasr (chunki surat 7 > maxraj 5)", "To'g'ri kasr", "O'nli kasr", "Nol kasr"],
          ru: ["Неправильная дробь (так как 7 > 5)", "Правильная дробь", "Десятичная дробь", "Нулевая дробь"],
          en: ["Improper fraction (because 7 > 5)", "Proper fraction", "Decimal fraction", "Zero fraction"]
        },
        correctAnswer: 0,
        type: 'choice',
        hint: {
          uz: "Surat maxrajdan katta bo'lsa, u noto'g'ri kasrdir.",
          ru: "Если числитель больше знаменателя, дробь неправильная.",
          en: "When the top is bigger than the bottom, it's improper."
        }
      },
      {
        id: 2,
        question: {
          uz: "9/4 noto'g'ri kasrini aralash songa aylantiring:",
          ru: "Превратите неправильную дробь 9/4 в смешанное число:",
          en: "Convert the improper fraction 9/4 into a mixed number:"
        },
        options: {
          uz: ["2 butun 1/4", "1 butun 5/4", "3 butun 1/4", "2 butun 3/4"],
          ru: ["2 целых 1/4", "1 целая 5/4", "3 целых 1/4", "2 целых 3/4"],
          en: ["2 and 1/4", "1 and 5/4", "3 and 1/4", "2 and 3/4"]
        },
        correctAnswer: 0,
        type: 'choice',
        hint: {
          uz: "9 ni 4 ga bo'lamiz: to'liqsiz bo'linma 2 (butun), qoldiq 1 (surat), maxraj 4 o'zgarmaydi.",
          ru: "9 делим на 4: получается 2 (целая часть) и остаток 1 (в числитель).",
          en: "Divide 9 by 4: 2 whole times, remainder 1 goes to the numerator: 2 1/4."
        }
      }
    ],
    rememberBox: {
      uz: "Noto'g'ri kasrni aralash songa aylantirish uchun suratni maxrajga bo'lamiz: bo'linma — butun qism, qoldiq — surat bo'ladi, maxraj esa o'zgarmay qoladi!",
      ru: "Чтобы превратить неправильную дробь в смешанное число, делим числитель на знаменатель: результат — целое, остаток — числитель!",
      en: "To turn an improper fraction into a mixed number, divide numerator by denominator: quotient = whole, remainder = numerator, denominator stays!"
    }
  },

  {
    id: 6,
    title: {
      uz: "6. Kasrlarni taqqoslash",
      ru: "6. Сравнение дробей",
      en: "6. Comparing Fractions"
    },
    caseStory: {
      uz: "Samir 3/8 pitsa yedi, Malika esa 5/8 pitsa yedi. Kim ko'proq pitsa yedi? Boshqa dasturxonda esa ikkita bir xil tort bor: birinchisi 3 bo'lakka, ikkinchisi 4 bo'lakka bo'lingan. 1/3 bo'lak kattami yoki 1/4 bo'lakmi?",
      ru: "Самир съел 3/8 пиццы, а Малика — 5/8. Кто съел больше? А на другом столе два одинаковых торта: один разрезан на 3 части, а другой на 4. Какой кусок больше: 1/3 или 1/4?",
      en: "Sam ate 3/8 of a pizza, while Mia ate 5/8. Who ate more? At another table, two identical cakes were cut: one into 3 slices, one into 4. Which single slice is larger: 1/3 or 1/4?"
    },
    explanation: {
      uz: "1-QOIDA (Maxrajlari bir xil bo'lsa): Qaysi kasrning surati KATTA bo'lsa, o'sha kasr KATTA bo'ladi (5/8 > 3/8).\n2-QOIDA (Suratlari bir xil bo'lsa): Butun kamroq bo'lakka bo'linsa, har bir bo'lak KATTAROQ bo'ladi! Shuning uchun maxraji KICHIK kasr KATTA bo'ladi (1/3 > 1/4)!\n3-QOIDA: Har qanday to'g'ri kasr 1 dan kichik, har qanday noto'g'ri kasr 1 ga teng yoki 1 dan katta.",
      ru: "ПРАВИЛО 1 (Одинаковые знаменатели): Больше та дробь, у которой числитель БОЛЬШЕ (5/8 > 3/8).\nПРАВИЛО 2 (Одинаковые числители): Чем меньше частей, тем каждый кусок КРУПНЕЕ! Поэтому больше та дробь, у которой знаменатель МЕНЬШЕ (1/3 > 1/4)!\nПРАВИЛО 3: Правильная дробь всегда меньше 1, а неправильная — больше или равна 1.",
      en: "RULE 1 (Same denominator): The fraction with the LARGER numerator is greater (5/8 > 3/8).\nRULE 2 (Same numerator): The fewer slices made, the BIGGER each slice is! So the fraction with the SMALLER denominator is larger (1/3 > 1/4)!\nRULE 3: Proper fractions < 1, improper fractions >= 1."
    },
    defaultFraction: { num: 5, den: 8 },
    tasks: [
      {
        id: 1,
        question: {
          uz: "Qaysi belgi to'g'ri: 4/7 ... 2/7 ?",
          ru: "Какой знак верный: 4/7 ... 2/7 ?",
          en: "Which sign is correct: 4/7 ... 2/7 ?"
        },
        options: {
          uz: ["> (katta)", "< (kichik)", "= (teng)"],
          ru: ["> (больше)", "< (меньше)", "= (равно)"],
          en: ["> (greater)", "< (less)", "= (equal)"]
        },
        correctAnswer: 0,
        type: 'choice',
        hint: {
          uz: "Maxrajlar bir xil (7), demak suratlarni solishtiramiz: 4 > 2.",
          ru: "Знаменатели одинаковые, сравниваем числители: 4 > 2.",
          en: "Same denominators, compare numerators: 4 > 2."
        }
      },
      {
        id: 2,
        question: {
          uz: "Qaysi biri kattaroq: 1/5 mi yoki 1/10 mi?",
          ru: "Что больше: 1/5 или 1/10?",
          en: "Which is greater: 1/5 or 1/10?"
        },
        options: {
          uz: ["1/5 kattaroq (chunki 5 ta bo'lakka bo'lingan bo'lak 10 ga bo'lingandan yirikroq)", "1/10 kattaroq", "Ikkalasi teng"],
          ru: ["1/5 больше (так как делить на 5 даёт куски крупнее, чем на 10)", "1/10 больше", "Они равны"],
          en: ["1/5 is larger (dividing among 5 yields larger pieces than among 10)", "1/10 is larger", "They are equal"]
        },
        correctAnswer: 0,
        type: 'choice',
        hint: {
          uz: "Suratlar teng bo'lsa, maxraji kichik bo'lgan kasr kattadir!",
          ru: "При одинаковых числителях больше дробь с меньшим знаменателем!",
          en: "With equal numerators, the fraction with the smaller denominator is larger!"
        }
      }
    ],
    rememberBox: {
      uz: "Oltin qoida: Pitsani 2 kishi bo'lishsa kattaroq bo'lak tegadimi yoki 10 kishi bo'lishsami? Albatta 2 kishi! Shuning uchun 1/2 > 1/10!",
      ru: "Золотое правило: Пиццу делят на двоих или на десятерых — когда кусок больше? Конечно, на двоих! Поэтому 1/2 > 1/10!",
      en: "Golden rule: Would you get a bigger slice sharing pizza with 2 people or with 10? With 2! That's why 1/2 > 1/10!"
    }
  },

  {
    id: 7,
    title: {
      uz: "7. Bir xil maxrajli kasrlarni qo'shish",
      ru: "7. Сложение дробей с одинаковыми знаменателями",
      en: "7. Adding Fractions with Same Denominators"
    },
    caseStory: {
      uz: "Tushlikda bolalar 8 bo'lakli pitsaning 2/8 qismini yeyishdi. Kechki payt esa yana 3/8 qismini yeyishdi. Bolalar jami pitsaning qancha qismini yeyishdi?",
      ru: "В обед ребята съели 2/8 части пиццы, а вечером ещё 3/8 части. Какую часть пиццы они съели за весь день?",
      en: "At lunch the kids ate 2/8 of a pizza. Later in the evening, they ate another 3/8. What total fraction of the pizza was eaten?"
    },
    explanation: {
      uz: "Bir xil maxrajli kasrlarni qo'shish uchun:\n1) Maxraj o'zgarishsiz qoldiriladi!\n2) Faqat suratlari o'zaro qo'shiladi:\n2/8 + 3/8 = (2 + 3) / 8 = 5/8 pitsa!",
      ru: "Чтобы сложить дроби с одинаковыми знаменателями:\n1) Знаменатель оставляем прежним!\n2) Складываем только числители:\n2/8 + 3/8 = (2 + 3) / 8 = 5/8 пиццы!",
      en: "To add fractions with identical denominators:\n1) Keep the denominator unchanged!\n2) Add only the numerators:\n2/8 + 3/8 = (2 + 3) / 8 = 5/8 of a pizza!"
    },
    defaultFraction: { num: 5, den: 8 },
    tasks: [
      {
        id: 1,
        question: {
          uz: "Hisoblang: 2/7 + 3/7 = ?",
          ru: "Вычислите: 2/7 + 3/7 = ?",
          en: "Calculate: 2/7 + 3/7 = ?"
        },
        options: {
          uz: ["5/7", "5/14", "6/7", "1/7"],
          ru: ["5/7", "5/14", "6/7", "1/7"],
          en: ["5/7", "5/14", "6/7", "1/7"]
        },
        correctAnswer: 0,
        type: 'choice',
        hint: {
          uz: "Maxraj (7) o'zgarmaydi, suratlarni qo'shamiz: 2 + 3 = 5.",
          ru: "Знаменатель 7 не меняется, складываем 2 + 3 = 5.",
          en: "Denominator 7 stays the same, add 2 + 3 = 5."
        }
      },
      {
        id: 2,
        question: {
          uz: "3/10 + 7/10 yig'indisi nimaga teng?",
          ru: "Чему равна сумма 3/10 + 7/10?",
          en: "What does 3/10 + 7/10 equal?"
        },
        options: {
          uz: ["10/10 = 1 (butun)", "10/20", "4/10", "1/10"],
          ru: ["10/10 = 1 (целое)", "10/20", "4/10", "1/10"],
          en: ["10/10 = 1 (whole)", "10/20", "4/10", "1/10"]
        },
        correctAnswer: 0,
        type: 'choice',
        hint: {
          uz: "3 + 7 = 10. 10/10 esa 1 butun demakdir!",
          ru: "3 + 7 = 10. 10/10 — это ровно 1 целое!",
          en: "3 + 7 = 10. 10/10 equals exactly 1 whole!"
        }
      }
    ],
    rememberBox: {
      uz: "Xatoga yo'l qo'ymang: Maxrajlar hech qachon qo'shilmaydi! 1/4 + 1/4 = 2/4 bo'ladi (2/8 emas)!",
      ru: "Частая ошибка: Знаменатели никогда не складываются! 1/4 + 1/4 = 2/4 (а не 2/8)!",
      en: "Common mistake to avoid: Never add denominators! 1/4 + 1/4 = 2/4 (not 2/8)!"
    }
  },

  {
    id: 8,
    title: {
      uz: "8. Bir xil maxrajli kasrlarni ayirish",
      ru: "8. Вычитание дробей с одинаковыми знаменателями",
      en: "8. Subtracting Fractions with Same Denominators"
    },
    caseStory: {
      uz: "Muzlatgichda 7/8 plita mazali qora shokolad bor edi. Aziza mehmonlarga tort bezash uchun 4/8 qismini ishlatdi. Muzlatgichda qancha shokolad qoldi?",
      ru: "В холодильнике было 7/8 плитки тёмного шоколада. Аня взяла 4/8 плитки для украшения торта. Сколько шоколада осталось?",
      en: "There were 7/8 of a dark chocolate bar in the fridge. Alex used 4/8 to decorate the birthday cake. How much chocolate remains?"
    },
    explanation: {
      uz: "Bir xil maxrajli kasrlarni ayirish uchun:\n1) Maxraj o'zgarishsiz qoldiriladi!\n2) Kamayuvchining suratidan ayriluvchining surati ayriladi:\n7/8 - 4/8 = (7 - 4) / 8 = 3/8 shokolad qoldi!",
      ru: "Чтобы вычесть дроби с одинаковыми знаменателями:\n1) Знаменатель оставляем прежним!\n2) Из числителя уменьшаемого вычитаем числитель вычитаемого:\n7/8 - 4/8 = (7 - 4) / 8 = 3/8 шоколадки!",
      en: "To subtract fractions with the same denominator:\n1) Keep the denominator unchanged!\n2) Subtract the second numerator from the first:\n7/8 - 4/8 = (7 - 4) / 8 = 3/8 chocolate left!"
    },
    defaultFraction: { num: 3, den: 8 },
    tasks: [
      {
        id: 1,
        question: {
          uz: "Hisoblang: 6/9 - 2/9 = ?",
          ru: "Вычислите: 6/9 - 2/9 = ?",
          en: "Calculate: 6/9 - 2/9 = ?"
        },
        options: {
          uz: ["4/9", "4/0", "8/9", "3/9"],
          ru: ["4/9", "4/0", "8/9", "3/9"],
          en: ["4/9", "4/0", "8/9", "3/9"]
        },
        correctAnswer: 0,
        type: 'choice',
        hint: {
          uz: "Maxraj (9) qoladi, 6 dan 2 ni ayiramiz: 4.",
          ru: "Знаменатель 9 остаётся, вычитаем 6 - 2 = 4.",
          en: "Denominator 9 remains, 6 - 2 = 4."
        }
      },
      {
        id: 2,
        question: {
          uz: "1 butundan 3/5 ni ayirganda qancha qoladi? (1 - 3/5)",
          ru: "Сколько останется, если из 1 вычесть 3/5? (1 - 3/5)",
          en: "What is 1 - 3/5?"
        },
        options: {
          uz: ["2/5 (chunki 1 = 5/5, 5/5 - 3/5 = 2/5)", "3/5", "4/5", "1/5"],
          ru: ["2/5 (ведь 1 = 5/5, а 5/5 - 3/5 = 2/5)", "3/5", "4/5", "1/5"],
          en: ["2/5 (since 1 = 5/5, and 5/5 - 3/5 = 2/5)", "3/5", "4/5", "1/5"]
        },
        correctAnswer: 0,
        type: 'choice',
        hint: {
          uz: "1 butunni 5/5 deb yozib olamiz va ayiramiz!",
          ru: "Представьте 1 как 5/5 и вычтите 3/5!",
          en: "Write 1 as 5/5, then subtract 3/5!"
        }
      }
    ],
    rememberBox: {
      uz: "1 butun sonidan kasrni ayirishda 1 ni maxrajga moslab kasr ko'rinishida yozamiz: 1 = 5/5, 1 = 8/8!",
      ru: "При вычитании дроби из единицы превращай 1 в дробь с нужным знаменателем: 1 = 5/5, 1 = 8/8!",
      en: "When subtracting a fraction from 1, rewrite 1 with the matching denominator: 1 = 5/5, 1 = 8/8!"
    }
  },

  {
    id: 9,
    title: {
      uz: "9. Sonning kasrini topish",
      ru: "9. Нахождение дроби от числа",
      en: "9. Finding a Fraction of a Number"
    },
    caseStory: {
      uz: "Azizaning bayram xonasini bezatish uchun 20 ta rang-barang havo shari bor. Ularning 3/4 qismi qizil rangda. Nechta qizil shar borligini qanday topamiz?",
      ru: "Для украшения комнаты у Ани есть 20 воздушных шариков. 3/4 из них — красные. Сколько красных шариков в комнате?",
      en: "Alex has 20 colorful balloons to decorate the party room. 3/4 of them are red. How many red balloons are there?"
    },
    explanation: {
      uz: "Sonning kasrini topish QOIDASI:\n1) Berilgan sonni kasrning MAXRAJIGA bo'lamiz (1 ta bo'lakni bilish uchun):\n20 : 4 = 5 ta shar (bu 1/4 qismi)\n2) Chiqqan natijani kasrning SURATIGA ko'paytiramiz:\n5 * 3 = 15 ta qizil shar!",
      ru: "ПРАВИЛО нахождения дроби от числа:\n1) Делим число на ЗНАМЕНАТЕЛЬ (узнаём, сколько в 1 части):\n20 : 4 = 5 шариков (это 1/4 часть)\n2) Умножаем результат на ЧИСЛИТЕЛЬ:\n5 * 3 = 15 красных шариков!",
      en: "RULE for finding a fraction of a number:\n1) DIVIDE the number by the DENOMINATOR (to find size of 1 part):\n20 / 4 = 5 balloons\n2) MULTIPLY by the NUMERATOR:\n5 * 3 = 15 red balloons!"
    },
    defaultFraction: { num: 3, den: 4 },
    tasks: [
      {
        id: 1,
        question: {
          uz: "24 sonining 2/3 qismini toping:",
          ru: "Найдите 2/3 от числа 24:",
          en: "Find 2/3 of 24:"
        },
        options: {
          uz: ["16 (24 : 3 = 8; 8 * 2 = 16)", "12", "18", "8"],
          ru: ["16 (24 : 3 = 8; 8 * 2 = 16)", "12", "18", "8"],
          en: ["16 (24 / 3 = 8; 8 * 2 = 16)", "12", "18", "8"]
        },
        correctAnswer: 0,
        type: 'choice',
        hint: {
          uz: "Avval 24 ni 3 ga bo'ling (8), keyin 2 ga ko'paytiring.",
          ru: "Сначала 24 разделите на 3 (8), потом умножьте на 2.",
          en: "First divide 24 by 3 (8), then multiply by 2."
        }
      },
      {
        id: 2,
        question: {
          uz: "Sinfda 30 nafar o'quvchi bor. Ularning 1/5 qismi a'lochilar. Nechta a'lochi o'quvchi bor?",
          ru: "В классе 30 учеников. 1/5 из них — отличники. Сколько отличников в классе?",
          en: "There are 30 students in class. 1/5 of them are honor roll. How many honor students?"
        },
        options: {
          uz: ["6 ta (30 : 5 = 6)", "5 ta", "10 ta", "15 ta"],
          ru: ["6 (30 : 5 = 6)", "5", "10", "15"],
          en: ["6 (30 / 5 = 6)", "5", "10", "15"]
        },
        correctAnswer: 0,
        type: 'choice',
        hint: {
          uz: "30 ni 5 ga bo'ling: 6.",
          ru: "Разделите 30 на 5: 6.",
          en: "Divide 30 by 5: 6."
        }
      }
    ],
    rememberBox: {
      uz: "Sehrli formula: Son : Maxraj * Surat = Natija! Masalan, 1 soatning (60 minut) 1/2 qismi: 60 : 2 * 1 = 30 minut!",
      ru: "Волшебная формула: Число : Знаменатель * Числитель = Ответ! Например, 1/2 часа: 60 : 2 * 1 = 30 минут!",
      en: "Magic formula: Number / Denominator * Numerator = Result! For instance, 1/2 of an hour: 60 / 2 * 1 = 30 minutes!"
    }
  },

  {
    id: 10,
    title: {
      uz: "10. Teng kasrlar va kasrlarni qisqartirish",
      ru: "10. Равные дроби и сокращение дробей",
      en: "10. Equivalent Fractions & Simplifying"
    },
    caseStory: {
      uz: "Aziza pitsani 2 bo'lakka bo'lib, 1 bo'lagini (1/2) oldi. Uning do'sti esa xuddi shunday pitsani 4 bo'lakka bo'lib, 2 bo'lagini (2/4) oldi. Kim ko'proq pitsa oldi? Ikkalasi ham teng!",
      ru: "Аня разрезала пиццу на 2 части и взяла 1 часть (1/2). Её друг такую же пиццу разрезал на 4 части и взял 2 кусочка (2/4). Кто взял больше? Они взяли совершенно одинаково!",
      en: "Alex cut a pizza into 2 slices and took 1 (1/2). Alex's friend cut an identical pizza into 4 slices and took 2 (2/4). Who got more pizza? Both got exactly the same amount!"
    },
    explanation: {
      uz: "KASRNING ASOSIY XOSSASI:\nAgar kasrning surati va maxrajini bir xil noldan farqli songa ko'paytirsak yoki bo'lsak, kasrning qiymati o'zgarmaydi!\n1/2 = 2/4 = 4/8\nKasrning surati va maxrajini ularning umumiy bo'luvchisiga bo'lish KASRNI QISQARTIRISH deyiladi: 6/8 = (6:2)/(8:2) = 3/4!",
      ru: "ОСНОВНОЕ СВОЙСТВО ДРОБИ:\nЕсли числитель и знаменатель дроби умножить или разделить на одно и то же число (кроме 0), получится равная ей дробь!\n1/2 = 2/4 = 4/8\nДеление числителя и знаменателя на их общий делитель называется СОКРАЩЕНИЕМ ДРОБИ: 6/8 = 3/4!",
      en: "FUNDAMENTAL PROPERTY OF FRACTIONS:\nMultiplying or dividing both numerator and denominator by the same non-zero number produces an EQUIVALENT fraction!\n1/2 = 2/4 = 4/8\nDividing top and bottom by their common factor is called SIMPLIFYING (reducing): 6/8 = (6/2)/(8/2) = 3/4!"
    },
    defaultFraction: { num: 2, den: 4 },
    tasks: [
      {
        id: 1,
        question: {
          uz: "4/8 kasrini qisqartiring:",
          ru: "Сократите дробь 4/8:",
          en: "Simplify the fraction 4/8:"
        },
        options: {
          uz: ["1/2 (har ikkisini 4 ga bo'lamiz)", "2/3", "1/4", "4/2"],
          ru: ["1/2 (делим оба числа на 4)", "2/3", "1/4", "4/2"],
          en: ["1/2 (divide both by 4)", "2/3", "1/4", "4/2"]
        },
        correctAnswer: 0,
        type: 'choice',
        hint: {
          uz: "4 va 8 sonlarining ikkalasi ham 4 ga bo'linadi.",
          ru: "И 4, и 8 делятся на 4.",
          en: "Both 4 and 8 are divisible by 4."
        }
      },
      {
        id: 2,
        question: {
          uz: "1/3 kasriga teng bo'lgan kasrni toping:",
          ru: "Найдите дробь, равную 1/3:",
          en: "Find a fraction equivalent to 1/3:"
        },
        options: {
          uz: ["3/9 (surat va maxraj 3 ga ko'paytirilgan)", "2/5", "3/6", "1/6"],
          ru: ["3/9 (числитель и знаменатель умножили на 3)", "2/5", "3/6", "1/6"],
          en: ["3/9 (both multiplied by 3)", "2/5", "3/6", "1/6"]
        },
        correctAnswer: 0,
        type: 'choice',
        hint: {
          uz: "1*3 = 3, 3*3 = 9.",
          ru: "1*3 = 3, 3*3 = 9.",
          en: "1*3 = 3, 3*3 = 9."
        }
      }
    ],
    rememberBox: {
      uz: "Qisqarmaydigan kasr — surati va maxraji 1 dan boshqa umumiy bo'luvchiga ega bo'lmagan kasrdir (masalan, 3/4, 5/7).",
      ru: "Несократимая дробь — та, которую больше нельзя разделить (например, 3/4, 5/7). Математики любят самые простые записи!",
      en: "An irreducible (fully simplified) fraction cannot be divided further (e.g. 3/4, 5/7). Mathematicians always prefer the simplest form!"
    }
  },

  {
    id: 11,
    title: {
      uz: "11. Hayotiy masalalar va amaliyot",
      ru: "11. Текстовые жизненные задачи",
      en: "11. Real-Life Word Problems"
    },
    caseStory: {
      uz: "Tug'ilgan kun yakunida Aziza va do'stlari bayram xarajatlari va qiziqarli statistikalarni hisoblashdi: kim necha kilometr yo'l bosib keldi, qancha vaqt o'yin o'ynaldi va sovg'alar qanday taqsimlandi?",
      ru: "В конце праздника Аня и её друзья подсчитывают интересную статистику: сколько километров прошёл каждый гость, сколько времени играли и как делили подарки!",
      en: "At the end of the party, Alex and friends calculate fun party stats: distances walked by guests, time spent gaming, and how party favors were shared!"
    },
    explanation: {
      uz: "Hayotiy masalalarni yechish qadamlari:\n1) Masalani diqqat bilan o'qish va nimani topish kerakligini aniqlash\n2) Kasr butunning qaysi qismini ifodalashini tasavvur qilish\n3) Qo'shish, ayirish yoki sonning kasrini topish formulasini qo'llash!",
      ru: "Шаги решения жизненных задач:\n1) Внимательно прочитать условие и понять вопрос\n2) Представить части целого наглядно (как торт или путь)\n3) Применить сложение, вычитание или нахождение дроби от числа!",
      en: "Steps to solve real-life word problems:\n1) Read carefully and identify the target unknown\n2) Visualize what the whole and parts represent\n3) Apply addition, subtraction, or finding the fraction of a quantity!"
    },
    defaultFraction: { num: 3, den: 5 },
    tasks: [
      {
        id: 1,
        question: {
          uz: "Sayyoh butun yo'lning 3/10 qismini ertalab, 4/10 qismini tushdan keyin bosib o'tdi. U butun yo'lning qancha qismini bosib o'tdi?",
          ru: "Турист прошёл 3/10 всего пути утром и 4/10 пути днём. Какую часть пути он прошёл?",
          en: "A hiker walked 3/10 of the trail in the morning and 4/10 in the afternoon. What fraction of the total trail was walked?"
        },
        options: {
          uz: ["7/10 qismini (3/10 + 4/10 = 7/10)", "7/20 qismini", "1/10 qismini", "1 butun yo'lni"],
          ru: ["7/10 пути (3/10 + 4/10 = 7/10)", "7/20 пути", "1/10 пути", "Весь путь"],
          en: ["7/10 of the trail (3/10 + 4/10 = 7/10)", "7/20 of the trail", "1/10 of the trail", "Whole trail"]
        },
        correctAnswer: 0,
        type: 'choice',
        hint: {
          uz: "Ertalabki va tushdan keyingi masofalarni qo'shamiz.",
          ru: "Сложите утреннюю и дневную части пути.",
          en: "Add the morning and afternoon fractions together."
        }
      },
      {
        id: 2,
        question: {
          uz: "Aziza kitobning 40 sahifasini o'qishi kerak edi. U kitobning 3/4 qismini o'qib bo'ldi. U necha sahifa o'qigan?",
          ru: "Ане нужно было прочитать 40 страниц. Она прочитала 3/4 книги. Сколько страниц она прочитала?",
          en: "Alex had a 40-page book and read 3/4 of it. How many pages did Alex read?"
        },
        options: {
          uz: ["30 sahifa (40 : 4 * 3 = 30)", "10 sahifa", "25 sahifa", "35 sahifa"],
          ru: ["30 страниц (40 : 4 * 3 = 30)", "10 страниц", "25 страниц", "35 страниц"],
          en: ["30 pages (40 / 4 * 3 = 30)", "10 pages", "25 pages", "35 pages"]
        },
        correctAnswer: 0,
        type: 'choice',
        hint: {
          uz: "40 ni 4 ga bo'ling (10) va 3 ga ko'paytiring (30).",
          ru: "40 разделите на 4 (10) и умножьте на 3 (30).",
          en: "40 divided by 4 is 10, times 3 is 30."
        }
      }
    ],
    rememberBox: {
      uz: "Tabriklaymiz! Siz kasrlarning barcha asosiy 11 ta mavzusini muvaffaqiyatli o'rganib chiqdingiz. Endi o'yinlar va viktorinalarda kuchingizni sinab ko'ring!",
      ru: "Поздравляем! Ты изучил все 11 ключевых тем обыкновенных дробей. Теперь проверь свои силы в играх и викторинах!",
      en: "Congratulations! You have completed all 11 core fraction lessons. Now test your skills in the arcade games and quizzes!"
    }
  }
];
