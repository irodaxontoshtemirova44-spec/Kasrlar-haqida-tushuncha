import React, { useState, useEffect } from 'react';
import { UserProfile, Language } from './types';
import { loadProfile, saveProfile, getDefaultProfile, launchConfetti } from './state';
import { sound } from './sound';
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { LearnSection } from './components/LearnSection';
import { GamesSection } from './components/GamesSection';
import { QuizSection } from './components/QuizSection';
import { ExamSection } from './components/ExamSection';
import { ProgressSection } from './components/ProgressSection';
import { quizQuestions } from './quizData';

export default function App() {
  const [profile, setProfile] = useState<UserProfile>(() => loadProfile());
  const [activeTab, setActiveTab] = useState<string>('home');
  const [targetLessonId, setTargetLessonId] = useState<number>(1);

  // Daily Challenge Modal State
  const [showDailyChallenge, setShowDailyChallenge] = useState(false);
  const [dailyIndex, setDailyIndex] = useState(0);
  const [dailyScore, setDailyScore] = useState(0);
  const [dailyAnswered, setDailyAnswered] = useState<number | null>(null);

  // Daily challenge 3 questions
  const [dailyQuestions, setDailyQuestions] = useState(() =>
    [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, 3)
  );

  // Sync profile changes to localStorage
  const handleUpdateProfile = (updates: Partial<UserProfile>) => {
    setProfile(prev => {
      const next = { ...prev, ...updates };
      saveProfile(next);
      return next;
    });
  };

  const handleResetProgress = () => {
    const fresh = getDefaultProfile();
    fresh.language = profile.language;
    fresh.theme = profile.theme;
    setProfile(fresh);
    saveProfile(fresh);
    setActiveTab('home');
  };

  const handleNavigateToLesson = (lessonId: number) => {
    setTargetLessonId(lessonId);
    setActiveTab('learn');
  };

  // Start Daily Challenge
  const handleStartDailyChallenge = () => {
    sound.playClick();
    setDailyQuestions([...quizQuestions].sort(() => Math.random() - 0.5).slice(0, 3));
    setDailyIndex(0);
    setDailyScore(0);
    setDailyAnswered(null);
    setShowDailyChallenge(true);
  };

  const handleDailyAnswer = (optIdx: number) => {
    if (dailyAnswered !== null) return;
    sound.playClick();
    setDailyAnswered(optIdx);

    const isCorrect = optIdx === dailyQuestions[dailyIndex].correctAnswer;
    if (isCorrect) {
      sound.playCorrect();
      setDailyScore(s => s + 1);
    } else {
      sound.playWrong();
    }
  };

  const handleNextDailyQuestion = () => {
    sound.playClick();
    if (dailyIndex + 1 < dailyQuestions.length) {
      setDailyIndex(d => d + 1);
      setDailyAnswered(null);
    } else {
      // Completed daily challenge
      sound.playFanfare();
      launchConfetti();
      handleUpdateProfile({
        xp: profile.xp + 25 + dailyScore * 10,
        stars: profile.stars + 2,
        streak: profile.streak + 1
      });
      setShowDailyChallenge(false);
    }
  };

  // Setup theme and sound on mount
  useEffect(() => {
    if (profile.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    sound.setMuted(!profile.soundEnabled);
    sound.setCalmMode(profile.calmMode);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      {/* Header bar */}
      <Header
        profile={profile}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onUpdateProfile={handleUpdateProfile}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-3 sm:p-6 pb-16">
        {activeTab === 'home' && (
          <HomeSection
            profile={profile}
            onUpdateProfile={handleUpdateProfile}
            onNavigateToLesson={handleNavigateToLesson}
            onStartDailyChallenge={handleStartDailyChallenge}
          />
        )}

        {activeTab === 'learn' && (
          <LearnSection
            profile={profile}
            initialLessonId={targetLessonId}
            onUpdateProfile={handleUpdateProfile}
          />
        )}

        {activeTab === 'play' && (
          <GamesSection
            profile={profile}
            onUpdateProfile={handleUpdateProfile}
          />
        )}

        {activeTab === 'quiz' && (
          <QuizSection
            profile={profile}
            onUpdateProfile={handleUpdateProfile}
          />
        )}

        {activeTab === 'exam' && (
          <ExamSection
            profile={profile}
            onUpdateProfile={handleUpdateProfile}
          />
        )}

        {activeTab === 'progress' && (
          <ProgressSection
            profile={profile}
            onUpdateProfile={handleUpdateProfile}
            onResetProgress={handleResetProgress}
          />
        )}
      </main>

      {/* Daily Challenge Modal Dialog */}
      {showDailyChallenge && dailyQuestions[dailyIndex] && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-7 max-w-lg w-full shadow-2xl border border-amber-300 dark:border-amber-600 space-y-4 animate-scale-up">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3">
              <span className="text-xs font-black text-amber-500 uppercase tracking-wider">
                🔥 Kunlik vazifa: {dailyIndex + 1} / {dailyQuestions.length}
              </span>
              <button
                onClick={() => setShowDailyChallenge(false)}
                className="text-slate-400 hover:text-slate-600 font-black text-lg"
              >
                ✕
              </button>
            </div>

            <h4 className="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100">
              {dailyQuestions[dailyIndex].prompt[profile.language]}
            </h4>

            {dailyQuestions[dailyIndex].options && (
              <div className="space-y-2 pt-1">
                {dailyQuestions[dailyIndex].options![profile.language].map((opt, i) => {
                  let btnStyle = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200';
                  if (dailyAnswered !== null) {
                    if (i === dailyQuestions[dailyIndex].correctAnswer) {
                      btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 font-bold';
                    } else if (dailyAnswered === i) {
                      btnStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950 text-rose-800 dark:text-rose-200 font-bold';
                    }
                  }

                  return (
                    <button
                      key={i}
                      disabled={dailyAnswered !== null}
                      onClick={() => handleDailyAnswer(i)}
                      className={`w-full text-left p-3 rounded-2xl border-2 text-xs sm:text-sm font-semibold transition-all ${btnStyle}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            )}

            {dailyAnswered !== null && (
              <div className="pt-2">
                <button
                  onClick={handleNextDailyQuestion}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-black text-sm py-3 rounded-2xl shadow-md transition-all active:scale-95"
                >
                  {dailyIndex + 1 < dailyQuestions.length ? "Keyingisi ▶" : "Mukofotni olish (+25 XP) 🎁"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-6 text-center text-xs text-slate-400 font-semibold space-y-1">
        <p>Fraction Land — 5-sinf o'quvchilari uchun interaktiv oddiy kasrlar qo'llanmasi</p>
        <p className="text-[11px] text-slate-400">
          O'zbek (Lotin), Rus va Ingliz tillarida • 100% oflayn ishlaydi
        </p>
      </footer>
    </div>
  );
}
