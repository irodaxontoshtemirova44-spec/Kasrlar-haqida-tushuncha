import React, { useState, useEffect } from 'react';
import { UserProfile, Question } from '../types';
import { i18n } from '../i18n';
import { quizQuestions } from '../quizData';
import { sound } from '../sound';
import { launchConfetti } from '../state';
import { Mascot } from '../svg';

interface QuizSectionProps {
  profile: UserProfile;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({
  profile,
  onUpdateProfile,
}) => {
  const t = i18n[profile.language];

  // Quiz setup state
  const [inQuiz, setInQuiz] = useState(false);
  const [isPracticeMistakes, setIsPracticeMistakes] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [useTimer, setUseTimer] = useState(false);

  // Active quiz state
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(25);
  const [quizFinished, setQuizFinished] = useState(false);

  // Categories list
  const categories = [
    { id: 'all', name: t.quiz.allCategories },
    { id: 'concepts', name: "Kasr tushunchasi" },
    { id: 'reading', name: "O'qish va sonlar o'qi" },
    { id: 'types', name: "To'g'ri va noto'g'ri kasrlar" },
    { id: 'comparing', name: "Taqqoslash" },
    { id: 'operations', name: "Qo'shish va ayirish" },
    { id: 'number_of_fraction', name: "Sonning kasri va qisqartirish" },
    { id: 'word_problems', name: "Hayotiy masalalar" },
  ];

  const startQuiz = (practiceMistakes = false) => {
    sound.playClick();
    setIsPracticeMistakes(practiceMistakes);

    let pool = [...quizQuestions];
    if (practiceMistakes) {
      pool = pool.filter(q => profile.mistakes.includes(q.id));
      if (pool.length === 0) return;
    } else {
      if (selectedCategory !== 'all') {
        pool = pool.filter(q => q.category === selectedCategory);
      }
      pool = pool.filter(q => q.difficulty === selectedDifficulty);
    }

    // Shuffle and pick up to 10
    const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, 10);
    setActiveQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
    setShowHint(false);
    setScore(0);
    setQuizFinished(false);
    setTimeLeft(25);
    setInQuiz(true);
  };

  // Timer effect
  useEffect(() => {
    if (!inQuiz || quizFinished || !useTimer || isAnswerChecked) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleCheckAnswer(-1); // time out
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [inQuiz, quizFinished, useTimer, isAnswerChecked, currentIndex]);

  const currentQ = activeQuestions[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswerChecked) return;
    sound.playClick();
    setSelectedAnswer(idx);
  };

  const handleCheckAnswer = (forcedIdx?: number) => {
    const answerToEvaluate = forcedIdx !== undefined ? forcedIdx : selectedAnswer;
    if (answerToEvaluate === null) return;

    setIsAnswerChecked(true);
    const correct = answerToEvaluate === currentQ.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      sound.playCorrect();
      launchConfetti();
      setScore(s => s + 1);

      // If in mistake mode, remove from mistakes list
      if (isPracticeMistakes) {
        onUpdateProfile({
          mistakes: profile.mistakes.filter(m => m !== currentQ.id)
        });
      }
    } else {
      sound.playWrong();
      // Record mistake
      if (!profile.mistakes.includes(currentQ.id)) {
        onUpdateProfile({
          mistakes: [...profile.mistakes, currentQ.id]
        });
      }
    }
  };

  const handleNextQuestion = () => {
    sound.playClick();
    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex(c => c + 1);
      setSelectedAnswer(null);
      setIsAnswerChecked(false);
      setShowHint(false);
      setTimeLeft(25);
    } else {
      // Quiz finished
      setQuizFinished(true);
      sound.playFanfare();
      launchConfetti();
      const earnedXp = score * 5 + 10;
      onUpdateProfile({
        xp: profile.xp + earnedXp,
        stars: profile.stars + (score >= 8 ? 3 : score >= 5 ? 2 : 1)
      });
    }
  };

  const handleUnlockHint = () => {
    if (profile.xp >= 2 && !showHint) {
      sound.playClick();
      setShowHint(true);
      onUpdateProfile({ xp: profile.xp - 2 });
    } else {
      setShowHint(true);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-amber-500 rounded-3xl p-5 sm:p-7 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="bg-white/20 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
            Quiz Zone
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mt-1">
            {t.quiz.title}
          </h2>
          <p className="text-sm text-blue-100 font-medium">
            Bilimingizni sinang, xatolardan saboq oling va yulduzlar yig'ing!
          </p>
        </div>

        {profile.mistakes.length > 0 && !inQuiz && (
          <button
            onClick={() => startQuiz(true)}
            className="bg-white text-indigo-700 hover:bg-blue-50 px-5 py-2.5 rounded-2xl font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 flex items-center gap-2"
          >
            <span>📝</span> {t.quiz.practiceMistakesTitle} ({profile.mistakes.length})
          </button>
        )}
      </div>

      {/* Quiz Setup View */}
      {!inQuiz && (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-700 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category selection */}
            <div>
              <label className="text-xs font-black text-slate-400 uppercase tracking-wider block mb-2">
                {t.quiz.selectCategory}
              </label>
              <div className="space-y-1.5">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => { sound.playClick(); setSelectedCategory(cat.id); }}
                    className={`w-full text-left px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                      selectedCategory === cat.id
                        ? 'border-amber-500 bg-amber-50 dark:bg-slate-700 text-amber-800 dark:text-amber-200'
                        : 'border-slate-200 dark:border-slate-700 hover:border-amber-300 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty & Options */}
            <div className="space-y-5">
              <div>
                <label className="text-xs font-black text-slate-400 uppercase tracking-wider block mb-2">
                  {t.quiz.selectDifficulty}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['easy', 'medium', 'hard'] as const).map(d => (
                    <button
                      key={d}
                      onClick={() => { sound.playClick(); setSelectedDifficulty(d); }}
                      className={`p-3 rounded-2xl text-xs sm:text-sm font-black border-2 transition-all capitalize ${
                        selectedDifficulty === d
                          ? 'border-amber-500 bg-amber-50 dark:bg-slate-700 text-amber-600'
                          : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {d === 'easy' ? '🟢 Oson' : d === 'medium' ? '🟡 O\'rtacha' : '🔴 Qiyin'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timer toggle */}
              <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                    ⏱️ {t.quiz.timerOption}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium">
                    Har bir savol uchun 25 soniya beriladi
                  </p>
                </div>
                <button
                  onClick={() => { sound.playClick(); setUseTimer(!useTimer); }}
                  className={`w-12 h-6 rounded-full transition-colors relative ${
                    useTimer ? 'bg-amber-500' : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white absolute top-1 transition-transform ${
                      useTimer ? 'left-7' : 'left-1'
                    }`}
                  />
                </button>
              </div>

              {/* Start Quiz CTA */}
              <button
                onClick={() => startQuiz(false)}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-black text-base py-3.5 rounded-2xl shadow-md active:scale-95 transition-all"
              >
                🚀 {t.quiz.startQuizBtn} (10 ta savol)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Active Quiz Card */}
      {inQuiz && !quizFinished && currentQ && (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200 dark:border-slate-700 space-y-5">
          {/* Progress & Status header */}
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3">
            <span className="text-xs font-black text-amber-500 uppercase tracking-wider">
              {t.quiz.questionCount} {currentIndex + 1} {t.quiz.of} {activeQuestions.length}
            </span>

            <div className="flex items-center gap-3">
              {useTimer && (
                <span className={`text-xs font-black px-2.5 py-1 rounded-xl ${
                  timeLeft <= 5 ? 'bg-rose-100 text-rose-600 animate-pulse' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}>
                  ⏱️ {timeLeft}s
                </span>
              )}
              <span className="text-xs font-extrabold text-amber-600">
                ⭐ {score} to'g'ri
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-500 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / activeQuestions.length) * 100}%` }}
            ></div>
          </div>

          {/* Question Prompt */}
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100">
                {currentQ.prompt[profile.language]}
              </h3>

              <button
                onClick={handleUnlockHint}
                className="text-xs font-bold text-amber-600 hover:underline flex items-center gap-1 flex-shrink-0"
              >
                <span>💡</span> {t.quiz.hintCost}
              </button>
            </div>

            {showHint && (
              <div className="text-xs bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-200 p-3 rounded-2xl border border-amber-200 font-medium">
                💡 Maslahat: {currentQ.hint[profile.language]}
              </div>
            )}
          </div>

          {/* Multiple choice options */}
          {currentQ.options && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentQ.options[profile.language].map((opt, idx) => {
                const isThisSelected = selectedAnswer === idx;
                let btnStyle = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-amber-400';

                if (isAnswerChecked) {
                  if (idx === currentQ.correctAnswer) {
                    btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 font-black';
                  } else if (isThisSelected) {
                    btnStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200 font-black';
                  }
                } else if (isThisSelected) {
                  btnStyle = 'border-amber-500 bg-amber-50 dark:bg-slate-700 text-amber-700 dark:text-amber-200 font-bold';
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswerChecked}
                    onClick={() => handleSelectOption(idx)}
                    className={`text-left p-3.5 rounded-2xl border-2 text-xs sm:text-sm font-semibold transition-all ${btnStyle}`}
                  >
                    <span className="font-bold mr-2 text-slate-400">{String.fromCharCode(65 + idx)})</span>
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          {/* Action buttons / Result explanation */}
          <div className="pt-2">
            {!isAnswerChecked ? (
              <button
                disabled={selectedAnswer === null}
                onClick={() => handleCheckAnswer()}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-black text-sm py-3 rounded-2xl disabled:opacity-40 transition-all shadow-md active:scale-95"
              >
                {t.common.check}
              </button>
            ) : (
              <div className="space-y-4">
                <div className={`p-4 rounded-2xl border ${
                  isCorrect
                    ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 text-emerald-800 dark:text-emerald-200'
                    : 'bg-rose-50 dark:bg-rose-950/30 border-rose-300 text-rose-800 dark:text-rose-200'
                }`}>
                  <div className="font-black text-sm mb-1 flex items-center gap-1.5">
                    {isCorrect ? '🎉 ' + t.common.correct : '🤔 ' + t.common.incorrect}
                  </div>
                  <p className="text-xs font-medium leading-relaxed">
                    {currentQ.explanation[profile.language]}
                  </p>
                </div>

                <button
                  onClick={handleNextQuestion}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-black text-sm py-3 rounded-2xl transition-all shadow-md active:scale-95"
                >
                  {currentIndex + 1 < activeQuestions.length ? `${t.common.next} ▶` : `🎉 ${t.common.finish}`}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quiz Finished Result Screen */}
      {inQuiz && quizFinished && (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 text-center space-y-5 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="text-6xl animate-bounce-gentle">🎉</div>
          <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100">
            Viktorina muvaffaqiyatli yakunlandi!
          </h3>
          <div className="text-4xl font-black text-amber-500">
            {score} / {activeQuestions.length} to'g'ri javob
          </div>
          <p className="text-sm font-semibold text-slate-500">
            Siz +{score * 5 + 10} XP va {score >= 8 ? '3 ta ⭐' : '2 ta ⭐'} yulduz qo'lga kiritdingiz!
          </p>

          <div className="flex justify-center gap-3 pt-3">
            <button
              onClick={() => startQuiz(false)}
              className="bg-amber-500 hover:bg-amber-600 text-white font-black text-sm px-6 py-2.5 rounded-2xl shadow-md"
            >
              🔄 Qaytadan topshirish
            </button>
            <button
              onClick={() => setInQuiz(false)}
              className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-black text-sm px-5 py-2.5 rounded-2xl"
            >
              Mavzular ro'yxatiga qaytish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
