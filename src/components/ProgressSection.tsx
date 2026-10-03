import React, { useState } from 'react';
import { UserProfile } from '../types';
import { i18n } from '../i18n';
import { BADGES, getRankTitle, getDefaultProfile } from '../state';
import { sound } from '../sound';

interface ProgressSectionProps {
  profile: UserProfile;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
  onResetProgress: () => void;
}

export const ProgressSection: React.FC<ProgressSectionProps> = ({
  profile,
  onResetProgress,
}) => {
  const t = i18n[profile.language];
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  const handleConfirmReset = () => {
    sound.playClick();
    onResetProgress();
    setShowConfirmReset(false);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Overview Banner */}
      <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 rounded-3xl p-5 sm:p-7 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="bg-white/20 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
            Achievement Hub
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mt-1">
            {t.progress.title}
          </h2>
          <p className="text-sm text-emerald-100 font-medium">
            {getRankTitle(profile.xp, profile.language)}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-2xl text-center">
            <div className="text-xs font-bold text-emerald-100">{t.progress.totalXp}</div>
            <div className="text-xl font-black">⚡ {profile.xp}</div>
          </div>
          <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-2xl text-center">
            <div className="text-xs font-bold text-emerald-100">{t.progress.totalStars}</div>
            <div className="text-xl font-black">⭐ {profile.stars}</div>
          </div>
        </div>
      </div>

      {/* Badges Gallery */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200 dark:border-slate-700 space-y-4">
        <h3 className="text-xl font-black text-slate-800 dark:text-slate-100 flex items-center gap-2">
          <span>🏅</span> {t.progress.badgesTitle}
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {BADGES.map(badge => {
            const isUnlocked = profile.badges.includes(badge.id) || (badge.id === 'first_steps' && profile.completedLessons.length >= 1);

            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border-2 flex flex-col items-center text-center transition-all ${
                  isUnlocked
                    ? 'border-amber-400 bg-amber-50/50 dark:bg-amber-950/20 shadow-xs'
                    : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40 opacity-50 grayscale'
                }`}
              >
                <div className="text-4xl mb-2">{badge.icon}</div>
                <h4 className="text-xs font-black text-slate-800 dark:text-slate-100 mb-1">
                  {badge.titleKey}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug font-medium">
                  {badge.descKey}
                </p>
                {isUnlocked && (
                  <span className="mt-2 text-[10px] font-black text-amber-600 bg-amber-100 dark:bg-amber-950 px-2 py-0.5 rounded-full">
                    Ochilgan
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Teacher / Parent Tip Card */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl p-5 sm:p-6 border border-blue-200 dark:border-slate-700 space-y-2">
        <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-black text-sm uppercase tracking-wider">
          <span>👨‍🏫</span> {t.progress.parentTipTitle}
        </div>
        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
          {t.progress.parentTipDesc}
        </p>
      </div>

      {/* Danger Zone: Reset Progress */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 sm:p-6 shadow-sm border border-rose-200 dark:border-rose-950/50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-black text-rose-600 dark:text-rose-400">
            {t.common.resetProgress}
          </h4>
          <p className="text-xs text-slate-400 font-medium">
            To'plangan XP, yulduzlar va ochilgan darslar boshlang'ich holatga qaytadi.
          </p>
        </div>

        {showConfirmReset ? (
          <div className="flex items-center gap-2">
            <button
              onClick={handleConfirmReset}
              className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-xl text-xs font-black"
            >
              Ha, tozalash!
            </button>
            <button
              onClick={() => setShowConfirmReset(false)}
              className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-2 rounded-xl text-xs font-bold"
            >
              Bekor qilish
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowConfirmReset(true)}
            className="border-2 border-rose-300 dark:border-rose-800 hover:bg-rose-50 dark:hover:bg-rose-950 text-rose-600 dark:text-rose-400 px-4 py-2 rounded-xl text-xs font-black transition-colors"
          >
            {t.common.resetProgress}
          </button>
        )}
      </div>
    </div>
  );
};
