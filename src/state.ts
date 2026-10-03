import { UserProfile, Badge, Language } from './types';

const STORAGE_KEY = 'fraction_land_v2_profile';

export const BADGES: Badge[] = [
  { id: 'first_steps', icon: '🌱', titleKey: 'Birinchi qadam', descKey: '1-darsni muvaffaqiyatli tamomladingiz' },
  { id: 'pizza_master', icon: '🍕', titleKey: 'Pitsa ustasi', descKey: "Pitsa oshpazi o'yinida g'alaba qozondingiz" },
  { id: 'balloon_popper', icon: '🎈', titleKey: 'Sharlar qahramoni', descKey: "Sharlar parvozi o'yinida 5 ta sharni yordingiz" },
  { id: 'memory_genius', icon: '🧠', titleKey: 'Xotira dahosi', descKey: "Kasrlar juftligini xatosiz topdingiz" },
  { id: 'sorter_star', icon: '📦', titleKey: 'Saralovchi', descKey: "Kasrlarni to'g'ri qutilarga ajratdingiz" },
  { id: 'speed_racer', icon: '🏎️', titleKey: 'Tezkor poygachi', descKey: "Poygada robotni mag'lub etdingiz" },
  { id: 'monster_friend', icon: '👾', titleKey: 'Maxluq do\'sti', descKey: "Nom-Nomni to'g'ri kasr bilan to'ydirdingiz" },
  { id: 'frog_jumper', icon: '🐸', titleKey: 'Sakrovchi qurbaqa', descKey: "Sonlar o'qida aniq sakradingiz" },
  { id: 'quiz_pro', icon: '🏆', titleKey: 'Viktorina bilimdoni', descKey: "Viktorinani a'lo bahoga yechdingiz" },
  { id: 'exam_champion', icon: '🎓', titleKey: 'Katta imtihon g\'olibi', descKey: "Katta imtihonda 5 baho oldingiz" },
  { id: 'streak_master', icon: '🔥', titleKey: 'Doimiy seriya', descKey: "O'rganishda davomiylik ko'rsatdingiz" },
  { id: 'math_grandmaster', icon: '👑', titleKey: 'Kasrlar akademigi', descKey: "1000 dan ortiq XP to'pladingiz" },
];

export const AVATARS = [
  { id: 'owl', icon: '🦉', name: 'Bilimdon Boyqush' },
  { id: 'cat', icon: '🐱', name: 'Zukko Mushuk' },
  { id: 'fox', icon: '🦊', name: 'Chaqqon Tulki' },
  { id: 'lion', icon: '🦁', name: 'Jasur Arslon' },
  { id: 'panda', icon: '🐼', name: 'Mehribon Panda' },
  { id: 'robot', icon: '🤖', name: 'Super Robot' }
];

export const getDefaultProfile = (): UserProfile => {
  const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return {
    name: 'Aziza',
    avatar: 'owl',
    xp: 50,
    stars: 5,
    streak: 1,
    lastActiveDate: new Date().toISOString().split('T')[0],
    unlockedLessons: 1,
    completedLessons: [],
    badges: ['first_steps'],
    mistakes: [],
    soundEnabled: true,
    calmMode: false,
    theme: prefersDark ? 'dark' : 'light',
    language: 'uz'
  };
};

export const loadProfile = (): UserProfile => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultProfile();
    const parsed = JSON.parse(raw);
    return { ...getDefaultProfile(), ...parsed };
  } catch {
    return getDefaultProfile();
  }
};

export const saveProfile = (p: UserProfile) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    // Ignore localStorage quota errors
  }
};

export const getRankTitle = (xp: number, lang: Language): string => {
  const titles = {
    uz: [
      { min: 0, title: "Kasr qidiruvchi (1-daraja)" },
      { min: 100, title: "Bo'laklar shogirdi (2-daraja)" },
      { min: 250, title: "Maxraj izquvari (3-daraja)" },
      { min: 500, title: "Kasrlar qahramoni (4-daraja)" },
      { min: 800, title: "Kasrlar ustasi (5-daraja)" },
      { min: 1200, title: "Buyuk akademik (6-daraja)" }
    ],
    ru: [
      { min: 0, title: "Искатель дробей (Уровень 1)" },
      { min: 100, title: "Ученик долей (Уровень 2)" },
      { min: 250, title: "Детектив дробей (Уровень 3)" },
      { min: 500, title: "Герой дробей (Уровень 4)" },
      { min: 800, title: "Мастер дробей (Уровень 5)" },
      { min: 1200, title: "Великий Академик (Уровень 6)" }
    ],
    en: [
      { min: 0, title: "Fraction Explorer (Rank 1)" },
      { min: 100, title: "Slice Apprentice (Rank 2)" },
      { min: 250, title: "Denominator Detective (Rank 3)" },
      { min: 500, title: "Fraction Hero (Rank 4)" },
      { min: 800, title: "Fraction Master (Rank 5)" },
      { min: 1200, title: "Grand Academician (Rank 6)" }
    ]
  };

  const list = titles[lang] || titles.uz;
  for (let i = list.length - 1; i >= 0; i--) {
    if (xp >= list[i].min) return list[i].title;
  }
  return list[0].title;
};

// Pure Canvas Confetti Launcher (Zero dependencies)
export const launchConfetti = () => {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    canvas.remove();
    return;
  }

  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  const colors = ['#f59e0b', '#ef4444', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
  const particles = Array.from({ length: 90 }).map(() => ({
    x: width / 2 + (Math.random() - 0.5) * 200,
    y: height * 0.4,
    vx: (Math.random() - 0.5) * 14,
    vy: -Math.random() * 14 - 4,
    size: Math.random() * 8 + 5,
    color: colors[Math.floor(Math.random() * colors.length)],
    rot: Math.random() * 360,
    rotSpeed: (Math.random() - 0.5) * 12,
    gravity: 0.35,
    life: 1
  }));

  let frame = 0;
  const animate = () => {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rot += p.rotSpeed;
      p.life -= 0.015;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    });

    frame++;
    if (frame < 80) {
      requestAnimationFrame(animate);
    } else {
      canvas.remove();
    }
  };

  requestAnimationFrame(animate);
};
