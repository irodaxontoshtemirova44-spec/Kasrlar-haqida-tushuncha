import React from 'react';
import { UserProfile, Language } from '../types';
import { i18n } from '../i18n';
import { sound } from '../sound';
import { AVATARS } from '../state';

interface HeaderProps {
  profile: UserProfile;
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
}

export const Header: React.FC<HeaderProps> = ({
  profile,
  activeTab,
  onSelectTab,
  onUpdateProfile,
}) => {
  const t = i18n[profile.language];
  const currentAvatar = AVATARS.find(a => a.id === profile.avatar) || AVATARS[0];

  const handleLangChange = (lang: Language) => {
    sound.playClick();
    onUpdateProfile({ language: lang });
  };

  const handleToggleTheme = () => {
    sound.playClick();
    const nextTheme = profile.theme === 'dark' ? 'light' : 'dark';
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    onUpdateProfile({ theme: nextTheme });
  };

  const handleToggleSound = () => {
    const nextSound = !profile.soundEnabled;
    sound.setMuted(!nextSound);
    if (nextSound) sound.playClick();
    onUpdateProfile({ soundEnabled: nextSound });
  };

  const handleToggleCalm = () => {
    sound.playClick();
    const nextCalm = !profile.calmMode;
    sound.setCalmMode(nextCalm);
    onUpdateProfile({ calmMode: nextCalm });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-amber-200 dark:border-slate-800 shadow-sm transition-colors">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Brand & Mascot */}
        <div
          onClick={() => { sound.playClick(); onSelectTab('home'); }}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-amber-400 flex items-center justify-center text-2xl shadow-md group-hover:scale-105 transition-transform">
            🍕
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-extrabold text-amber-600 dark:text-amber-400 leading-tight">
              {t.appName}
            </h1>
            <p className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              5-sinf matematika / 5 класс
            </p>
          </div>
        </div>

        {/* User stats pill */}
        <div className="flex items-center gap-2 bg-amber-50 dark:bg-slate-800/80 border border-amber-200 dark:border-slate-700 px-3 py-1.5 rounded-full shadow-inner">
          <span className="text-xl" title="Avatar">{currentAvatar.icon}</span>
          <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 max-w-[90px] truncate">
            {profile.name}
          </span>
          <span className="text-slate-300 dark:text-slate-600">|</span>
          <span className="flex items-center gap-1 text-xs sm:text-sm font-extrabold text-amber-500">
            ⚡ {profile.xp} <span className="text-[10px] uppercase font-bold text-slate-400">XP</span>
          </span>
          <span className="flex items-center gap-1 text-xs sm:text-sm font-extrabold text-yellow-500">
            ⭐ {profile.stars}
          </span>
          <span className="flex items-center gap-1 text-xs sm:text-sm font-extrabold text-orange-500" title="Kunlik seriya">
            🔥 {profile.streak}
          </span>
        </div>

        {/* Global Controls & Language Switcher */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Sound Toggle */}
          <button
            onClick={handleToggleSound}
            aria-label="Toggle Sound"
            className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-amber-100 dark:hover:bg-slate-700 flex items-center justify-center text-sm font-bold text-slate-700 dark:text-slate-200 transition-colors shadow-xs"
            title={profile.soundEnabled ? "Ovozni o'chirish" : "Ovozni yoqish"}
          >
            {profile.soundEnabled ? '🔊' : '🔇'}
          </button>

          {/* Calm Mode */}
          <button
            onClick={handleToggleCalm}
            aria-label="Calm Mode"
            className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold transition-colors shadow-xs ${
              profile.calmMode
                ? 'bg-emerald-500 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
            }`}
            title="Tinch rejim (harakat va ovozlarni kamaytirish)"
          >
            🌿
          </button>

          {/* Theme Toggle */}
          <button
            onClick={handleToggleTheme}
            aria-label="Toggle Dark/Light Mode"
            className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-amber-100 dark:hover:bg-slate-700 flex items-center justify-center text-sm font-bold text-slate-700 dark:text-slate-200 transition-colors shadow-xs"
            title="Mavzuni almashtirish"
          >
            {profile.theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* Language Switcher */}
          <div className="flex bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl border border-slate-200 dark:border-slate-700">
            {(['uz', 'ru', 'en'] as Language[]).map(lang => (
              <button
                key={lang}
                onClick={() => handleLangChange(lang)}
                className={`px-2 py-1 rounded-lg text-xs font-extrabold uppercase transition-all ${
                  profile.language === lang
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-amber-600'
                }`}
              >
                {lang === 'uz' ? '🇺🇿 UZ' : lang === 'ru' ? '🇷🇺 RU' : '🇬🇧 EN'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="max-w-6xl mx-auto px-2 sm:px-6 flex overflow-x-auto no-scrollbar gap-1 py-1.5 border-t border-slate-100 dark:border-slate-800/80">
        {[
          { id: 'home', label: t.nav.home, icon: '🏠' },
          { id: 'learn', label: t.nav.learn, icon: '📖' },
          { id: 'play', label: t.nav.play, icon: '🎮' },
          { id: 'quiz', label: t.nav.quiz, icon: '❓' },
          { id: 'exam', label: t.nav.exam, icon: '🎓' },
          { id: 'progress', label: t.nav.progress, icon: '🏆' },
        ].map(item => (
          <button
            key={item.id}
            onClick={() => {
              sound.playClick();
              onSelectTab(item.id);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all ${
              activeTab === item.id
                ? 'bg-amber-500 text-white shadow-sm scale-102'
                : 'text-slate-600 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-800'
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </header>
  );
};
