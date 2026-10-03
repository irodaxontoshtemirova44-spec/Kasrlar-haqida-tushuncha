import React, { useState } from 'react';
import { UserProfile } from '../types';
import { i18n } from '../i18n';
import { AVATARS, getRankTitle, launchConfetti } from '../state';
import { sound } from '../sound';
import { Mascot } from '../svg';
import { lessonsData } from '../lessonsData';

interface HomeSectionProps {
  profile: UserProfile;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
  onNavigateToLesson: (lessonId: number) => void;
  onStartDailyChallenge: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  profile,
  onUpdateProfile,
  onNavigateToLesson,
  onStartDailyChallenge,
}) => {
  const t = i18n[profile.language];
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(profile.name);

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      sound.playClick();
      onUpdateProfile({ name: nameInput.trim() });
      setEditingName(false);
    }
  };

  const handleSelectAvatar = (avatarId: string) => {
    sound.playClick();
    onUpdateProfile({ avatar: avatarId });
  };

  const realLifeFacts = [
    {
      icon: '⏰',
      title: profile.language === 'uz' ? "Soat va vaqt" : profile.language === 'ru' ? "Часы и время" : "Clocks and Time",
      desc: profile.language === 'uz' ? "'Yarim soat' — bu 1/2 soat (30 daqiqa), 'chorak soat' esa 1/4 soat (15 daqiqa)!" : profile.language === 'ru' ? "«Полчаса» — это 1/2 часа (30 минут), а «четверть часа» — это 1/4 часа (15 минут)!" : "'Half an hour' is 1/2 hour (30 min), 'quarter hour' is 1/4 hour (15 min)!"
    },
    {
      icon: '🎵',
      title: profile.language === 'uz' ? "Musiqa notalari" : profile.language === 'ru' ? "Музыкальные ноты" : "Musical Notes",
      desc: profile.language === 'uz' ? "Har bir musiqa zarbasi kasrlarga asoslangan: butun nota, yarimtalik (1/2), choraklik (1/4) va nimchorak (1/8)!" : profile.language === 'ru' ? "В музыке все длительности — это дроби: целая нота, половинная (1/2), четвертная (1/4) и восьмая (1/8)!" : "Musical beats are exact fractions: whole note, half note (1/2), quarter note (1/4), eighth note (1/8)!"
    },
    {
      icon: '🍰',
      title: profile.language === 'uz' ? "Oshxona retseptlari" : profile.language === 'ru' ? "Кулинарные рецепты" : "Kitchen Recipes",
      desc: profile.language === 'uz' ? "Mazali pirog pishirish uchun 1/2 stakan sut, 3/4 stakan shakar va 1/4 choy qoshiq tuz kerak bo'ladi!" : profile.language === 'ru' ? "Чтобы испечь вкусный пирог, нужно 1/2 стакана молока, 3/4 стакана сахара и 1/4 ложки соли!" : "Baking treats requires 1/2 cup of milk, 3/4 cup of sugar, and 1/4 teaspoon of salt!"
    },
    {
      icon: '⚽',
      title: profile.language === 'uz' ? "Sport o'yinlari" : profile.language === 'ru' ? "Спорт и таймы" : "Sports Halves",
      desc: profile.language === 'uz' ? "Futbol o'yini 2 ta teng bo'limdan (1/2) iborat, basketbol esa 4 ta chorakdan (1/4) tashkil topgan!" : profile.language === 'ru' ? "Футбольный матч состоит из 2 таймов (по 1/2), а баскетбол — из 4 четвертей (по 1/4)!" : "Soccer matches have 2 equal halves (1/2), basketball games have 4 quarters (1/4)!"
    }
  ];

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in">
      {/* Hero Banner with Mascot */}
      <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 rounded-3xl p-5 sm:p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-left">
            <span className="inline-block bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
              {getRankTitle(profile.xp, profile.language)}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
              {t.home.welcomeTitle}
            </h2>
            <p className="text-sm sm:text-base font-medium text-amber-50 max-w-xl">
              {t.home.welcomeSub}
            </p>

            {/* Quick action button */}
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <button
                onClick={() => {
                  sound.playClick();
                  onNavigateToLesson(profile.unlockedLessons || 1);
                }}
                className="bg-white text-orange-600 hover:bg-amber-50 px-6 py-3 rounded-2xl font-black text-sm shadow-md hover:scale-105 active:scale-95 transition-all"
              >
                🚀 {t.home.continueLesson} ({profile.unlockedLessons}-dars)
              </button>

              <button
                onClick={onStartDailyChallenge}
                className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-3 rounded-2xl font-black text-sm shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>🔥</span> {t.home.dailyChallengeBtn} (+25 XP)
              </button>
            </div>
          </div>

          {/* Animated Mascot */}
          <div className="flex-shrink-0 bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/20">
            <Mascot mood="cheer" speech={t.mascotGreeting} size={110} />
          </div>
        </div>

        {/* Decorative background shapes */}
        <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
      </div>

      {/* Student Profile Card (Name + Avatar picker) */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-700/60 pb-4">
          <div>
            <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
              {t.progress.currentRank}
            </span>
            <div className="flex items-center gap-3">
              {editingName ? (
                <form onSubmit={handleSaveName} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="border-2 border-amber-400 rounded-xl px-3 py-1.5 text-base font-bold dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="bg-amber-500 text-white px-3 py-1.5 rounded-xl font-bold text-sm hover:bg-amber-600"
                  >
                    ✓
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 dark:text-slate-100">
                    {profile.name}
                  </h3>
                  <button
                    onClick={() => setEditingName(true)}
                    className="text-xs text-slate-400 hover:text-amber-500 font-bold underline"
                  >
                    ✏️ O'zgartirish
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm font-extrabold">
            <div className="text-center">
              <div className="text-xs text-slate-400 font-semibold">{t.progress.totalXp}</div>
              <div className="text-amber-500 text-lg">⚡ {profile.xp}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-slate-400 font-semibold">{t.progress.totalStars}</div>
              <div className="text-yellow-500 text-lg">⭐ {profile.stars}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-slate-400 font-semibold">{t.progress.lessonsDone}</div>
              <div className="text-emerald-500 text-lg">📚 {profile.completedLessons.length} / 11</div>
            </div>
          </div>
        </div>

        {/* Avatar selector */}
        <div className="pt-4">
          <label className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
            {t.home.chooseAvatar}
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {AVATARS.map(avatar => (
              <button
                key={avatar.id}
                onClick={() => handleSelectAvatar(avatar.id)}
                className={`flex flex-col items-center gap-1 p-2 rounded-2xl border-2 transition-all ${
                  profile.avatar === avatar.id
                    ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/30 scale-105 shadow-xs'
                    : 'border-slate-200 dark:border-slate-700 hover:border-amber-300 bg-slate-50 dark:bg-slate-900/50'
                }`}
              >
                <span className="text-2xl">{avatar.icon}</span>
                <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300 truncate max-w-[80px]">
                  {avatar.name.split(' ')[1] || avatar.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Roadmap Map */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-extrabold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <span>🗺️</span> {t.home.mapTitle}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              11 ta bosqichni ketma-ket oching va mukofotlarni qo'lga kiriting!
            </p>
          </div>
          <span className="bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 text-xs font-black px-3 py-1 rounded-full">
            {Math.round((profile.completedLessons.length / 11) * 100)}% tayyor
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-3.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-500 rounded-full"
            style={{ width: `${(profile.completedLessons.length / 11) * 100}%` }}
          ></div>
        </div>

        {/* Level Nodes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {lessonsData.map(lesson => {
            const isUnlocked = lesson.id <= profile.unlockedLessons;
            const isCompleted = profile.completedLessons.includes(lesson.id);

            return (
              <button
                key={lesson.id}
                disabled={!isUnlocked}
                onClick={() => {
                  sound.playClick();
                  onNavigateToLesson(lesson.id);
                }}
                className={`relative flex flex-col items-center text-center p-3 rounded-2xl border-2 transition-all ${
                  isCompleted
                    ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-200'
                    : isUnlocked
                    ? 'border-amber-400 bg-amber-50/60 dark:bg-slate-700 hover:scale-102 hover:border-amber-500 text-slate-800 dark:text-slate-100 shadow-sm'
                    : 'border-slate-200 dark:border-slate-700 bg-slate-100/50 dark:bg-slate-900/40 text-slate-400 dark:text-slate-600 opacity-60 cursor-not-allowed'
                }`}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black mb-1.5 shadow-xs bg-white dark:bg-slate-800">
                  {isCompleted ? '⭐' : isUnlocked ? `${lesson.id}` : '🔒'}
                </div>
                <span className="text-xs font-bold line-clamp-2 leading-tight">
                  {lesson.title[profile.language].split('.')[1] || lesson.title[profile.language]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fractions in Real Life Fun Cards */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-700">
        <h3 className="text-xl font-extrabold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
          <span>🌍</span> {t.home.realLifeFactsTitle}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {realLifeFacts.map((fact, i) => (
            <div
              key={i}
              className="bg-amber-50/50 dark:bg-slate-900/50 rounded-2xl p-4 border border-amber-100 dark:border-slate-700 hover:border-amber-300 transition-colors"
            >
              <div className="text-3xl mb-2">{fact.icon}</div>
              <h4 className="font-extrabold text-sm text-slate-800 dark:text-slate-100 mb-1">
                {fact.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {fact.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
