import React, { useState } from 'react';
import { UserProfile } from '../types';
import { i18n } from '../i18n';
import { lessonsData } from '../lessonsData';
import { FractionPie, FractionBar, FractionNumberLine, Mascot } from '../svg';
import { sound } from '../sound';
import { launchConfetti } from '../state';

interface LearnSectionProps {
  profile: UserProfile;
  initialLessonId?: number;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
}

export const LearnSection: React.FC<LearnSectionProps> = ({
  profile,
  initialLessonId = 1,
  onUpdateProfile,
}) => {
  const t = i18n[profile.language];
  const [currentLessonId, setCurrentLessonId] = useState<number>(initialLessonId);

  const lesson = lessonsData.find(l => l.id === currentLessonId) || lessonsData[0];

  // Interactive Lab state
  const [labNum, setLabNum] = useState<number>(lesson.defaultFraction.num);
  const [labDen, setLabDen] = useState<number>(lesson.defaultFraction.den);
  const [visualModel, setVisualModel] = useState<'pizza' | 'bar' | 'numberline'>('pizza');

  // Interactive task state
  const [taskAnswers, setTaskAnswers] = useState<Record<number, number | null>>({});
  const [taskFeedback, setTaskFeedback] = useState<Record<number, boolean | null>>({});
  const [showHint, setShowHint] = useState<Record<number, boolean>>({});
  const [understoodEmoji, setUnderstoodEmoji] = useState<string | null>(null);

  const handleLessonChange = (newId: number) => {
    sound.playClick();
    setCurrentLessonId(newId);
    const nextLesson = lessonsData.find(l => l.id === newId) || lessonsData[0];
    setLabNum(nextLesson.defaultFraction.num);
    setLabDen(nextLesson.defaultFraction.den);
    setTaskAnswers({});
    setTaskFeedback({});
    setShowHint({});
    setUnderstoodEmoji(null);
  };

  const handleTaskAnswer = (taskId: number, selectedOptIndex: number, correctIndex: number | string) => {
    sound.playClick();
    setTaskAnswers(prev => ({ ...prev, [taskId]: selectedOptIndex }));

    const isCorrect = selectedOptIndex === correctIndex;
    setTaskFeedback(prev => ({ ...prev, [taskId]: isCorrect }));

    if (isCorrect) {
      sound.playCorrect();
      launchConfetti();
      // Reward XP if not already awarded
      onUpdateProfile({
        xp: profile.xp + 10,
        stars: profile.stars + 1
      });
    } else {
      sound.playWrong();
    }
  };

  const handleCompleteLesson = () => {
    sound.playFanfare();
    launchConfetti();

    const nextUnlocked = Math.max(profile.unlockedLessons, Math.min(11, currentLessonId + 1));
    const completedSet = new Set(profile.completedLessons);
    completedSet.add(currentLessonId);

    onUpdateProfile({
      unlockedLessons: nextUnlocked,
      completedLessons: Array.from(completedSet),
      xp: profile.xp + 20,
      stars: profile.stars + 2
    });

    if (currentLessonId < 11) {
      handleLessonChange(currentLessonId + 1);
    }
  };

  // Mixed number calculations for lab
  const wholePart = Math.floor(labNum / labDen);
  const remainderPart = labNum % labDen;
  const isImproper = labNum >= labDen;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Lesson Selector Bar */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-2.5 sm:p-3 shadow-xs border border-slate-200 dark:border-slate-700 overflow-x-auto no-scrollbar flex items-center gap-1.5">
        {lessonsData.map(l => {
          const isUnlocked = l.id <= profile.unlockedLessons;
          const isCurrent = l.id === currentLessonId;
          const isDone = profile.completedLessons.includes(l.id);

          return (
            <button
              key={l.id}
              disabled={!isUnlocked}
              onClick={() => handleLessonChange(l.id)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-xl text-xs font-black transition-all ${
                isCurrent
                  ? 'bg-amber-500 text-white shadow-sm scale-105'
                  : isDone
                  ? 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300'
                  : isUnlocked
                  ? 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-amber-100'
                  : 'bg-slate-100/50 dark:bg-slate-900/40 text-slate-400 opacity-50 cursor-not-allowed'
              }`}
            >
              {isDone ? '✓ ' : ''} {l.id}-dars
            </button>
          );
        })}
      </div>

      {/* Main Lesson Header & Story Case */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200 dark:border-slate-700 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-700 pb-4">
          <div>
            <span className="text-xs font-extrabold text-amber-500 uppercase tracking-wider">
              {t.learn.lessonPrefix} {lesson.id} / 11
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-slate-100 mt-0.5">
              {lesson.title[profile.language]}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              disabled={currentLessonId <= 1}
              onClick={() => handleLessonChange(currentLessonId - 1)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold disabled:opacity-30"
            >
              ◀ {t.common.prev}
            </button>
            <button
              disabled={currentLessonId >= profile.unlockedLessons || currentLessonId >= 11}
              onClick={() => handleLessonChange(currentLessonId + 1)}
              className="px-3 py-1.5 rounded-xl bg-amber-500 text-white text-xs font-bold disabled:opacity-30"
            >
              {t.common.next} ▶
            </button>
          </div>
        </div>

        {/* Real-Life Birthday Case Story Box */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 p-4 sm:p-5 rounded-2xl border-l-4 border-amber-500 flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1 space-y-2">
            <div className="text-xs font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <span>🎂</span> {t.learn.caseTitle}
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 font-medium leading-relaxed">
              {lesson.caseStory[profile.language]}
            </p>
          </div>
          <div className="flex-shrink-0">
            <Mascot mood="thinking" size={75} />
          </div>
        </div>

        {/* Visual Math Explanation */}
        <div className="pt-2">
          <h3 className="text-sm font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
            💡 Tushuntirish va Qoidalar
          </h3>
          <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-line font-medium border border-slate-200/80 dark:border-slate-700/60">
            {lesson.explanation[profile.language]}
          </div>
        </div>
      </div>

      {/* Interactive Fraction Visualizer Lab */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 sm:p-7 shadow-sm border-2 border-amber-300 dark:border-amber-600/50 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-lg sm:text-xl font-black text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <span>🔬</span> {t.learn.interactiveToolTitle}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {t.learn.interactiveDesc}
            </p>
          </div>

          {/* Model Switcher Buttons */}
          <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-xl">
            {(['pizza', 'bar', 'numberline'] as const).map(model => (
              <button
                key={model}
                onClick={() => { sound.playClick(); setVisualModel(model); }}
                className={`px-3 py-1 rounded-lg text-xs font-extrabold capitalize transition-all ${
                  visualModel === model
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                {model === 'pizza' ? '🍕 Pitsa' : model === 'bar' ? '🍫 Shokolad' : '📏 Sonlar o\'qi'}
              </button>
            ))}
          </div>
        </div>

        {/* Live Fraction Graphic Display Area */}
        <div className="flex flex-col md:flex-row items-center justify-around gap-6 bg-amber-50/40 dark:bg-slate-900/40 p-5 rounded-2xl border border-amber-200/60 dark:border-slate-700">
          {/* SVG Visual Graphic */}
          <div className="flex flex-col items-center">
            {visualModel === 'pizza' && (
              <div className="flex items-center gap-3 flex-wrap justify-center">
                {/* For improper fractions, show multiple whole pizzas */}
                {isImproper && wholePart > 0 ? (
                  <>
                    {Array.from({ length: Math.min(3, wholePart) }).map((_, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <FractionPie numerator={labDen} denominator={labDen} size={130} />
                        <span className="text-[11px] font-bold text-slate-400 mt-1">1 butun ({labDen}/{labDen})</span>
                      </div>
                    ))}
                    {remainderPart > 0 && (
                      <div className="flex flex-col items-center">
                        <FractionPie numerator={remainderPart} denominator={labDen} size={130} />
                        <span className="text-[11px] font-bold text-amber-600 mt-1">+{remainderPart}/{labDen}</span>
                      </div>
                    )}
                  </>
                ) : (
                  <FractionPie numerator={labNum} denominator={labDen} size={170} />
                )}
              </div>
            )}

            {visualModel === 'bar' && (
              <FractionBar numerator={labNum} denominator={labDen} width={260} height={55} themeColor="chocolate" />
            )}

            {visualModel === 'numberline' && (
              <FractionNumberLine
                numerator={labNum}
                denominator={labDen}
                max={labNum > labDen ? 2 : 1}
                width={320}
              />
            )}
          </div>

          {/* Fraction Equation & Fraction Card */}
          <div className="flex flex-col items-center space-y-3 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xs border border-amber-200 dark:border-slate-700 min-w-[200px]">
            {/* Big Fraction Symbol */}
            <div className="flex items-center gap-2">
              {isImproper && wholePart > 0 && remainderPart > 0 && (
                <span className="text-4xl font-black text-amber-600 dark:text-amber-400">
                  {wholePart}
                </span>
              )}
              <div className="inline-flex flex-col items-center justify-center font-black">
                <span className="text-3xl text-amber-600 dark:text-amber-400 leading-none pb-1">
                  {isImproper && remainderPart > 0 ? remainderPart : labNum}
                </span>
                <span className="w-12 h-1 bg-amber-600 dark:bg-amber-400 rounded-full my-0.5"></span>
                <span className="text-3xl text-amber-700 dark:text-amber-300 leading-none pt-1">
                  {labDen}
                </span>
              </div>
            </div>

            {/* Type badge */}
            <div className="text-center">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-black ${
                labNum < labDen
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                  : labNum === labDen
                  ? 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300'
                  : 'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300'
              }`}>
                {labNum < labDen
                  ? t.common.properFraction
                  : labNum === labDen
                  ? '1 Butun'
                  : `${t.common.improperFraction} (${wholePart} va ${remainderPart}/${labDen})`}
              </span>
              <div className="text-[11px] text-slate-400 font-semibold mt-1">
                {Math.round((labNum / labDen) * 100)}%
              </div>
            </div>
          </div>
        </div>

        {/* Live Controls (+ / - for numerator and denominator) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Numerator control */}
          <div className="bg-slate-50 dark:bg-slate-900/50 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                {t.common.numerator} (Olingan qismlar)
              </span>
              <span className="text-2xl font-black text-amber-600 dark:text-amber-400">
                {labNum}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                disabled={labNum <= 0}
                onClick={() => { sound.playClick(); setLabNum(n => Math.max(0, n - 1)); }}
                className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 font-black text-lg hover:border-amber-500 disabled:opacity-30 active:scale-95 transition-all shadow-xs"
              >
                -
              </button>
              <button
                disabled={labNum >= 16}
                onClick={() => { sound.playClick(); setLabNum(n => Math.min(16, n + 1)); }}
                className="w-10 h-10 rounded-xl bg-amber-500 text-white font-black text-lg hover:bg-amber-600 active:scale-95 transition-all shadow-xs"
              >
                +
              </button>
            </div>
          </div>

          {/* Denominator control */}
          <div className="bg-slate-50 dark:bg-slate-900/50 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                {t.common.denominator} (Jami bo'laklar)
              </span>
              <span className="text-2xl font-black text-amber-700 dark:text-amber-300">
                {labDen}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                disabled={labDen <= 2}
                onClick={() => { sound.playClick(); setLabDen(d => Math.max(2, d - 1)); }}
                className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 font-black text-lg hover:border-amber-500 disabled:opacity-30 active:scale-95 transition-all shadow-xs"
              >
                -
              </button>
              <button
                disabled={labDen >= 16}
                onClick={() => { sound.playClick(); setLabDen(d => Math.min(16, d + 1)); }}
                className="w-10 h-10 rounded-xl bg-amber-500 text-white font-black text-lg hover:bg-amber-600 active:scale-95 transition-all shadow-xs"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Try-it-yourself Tasks */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200 dark:border-slate-700 space-y-4">
        <h3 className="text-lg font-black text-slate-800 dark:text-slate-100 flex items-center gap-2">
          <span>✍️</span> {t.learn.tasksTitle}
        </h3>

        <div className="space-y-4">
          {lesson.tasks.map((task, idx) => {
            const selectedOpt = taskAnswers[task.id];
            const isCorrect = taskFeedback[task.id];
            const hintActive = showHint[task.id];

            return (
              <div
                key={task.id}
                className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-black bg-amber-200 dark:bg-amber-950 text-amber-800 dark:text-amber-200 px-2 py-0.5 rounded-lg">
                    {idx + 1}-topshiriq
                  </span>
                  <button
                    onClick={() => { sound.playClick(); setShowHint(p => ({ ...p, [task.id]: !p[task.id] })); }}
                    className="text-xs font-bold text-amber-600 hover:underline flex items-center gap-1"
                  >
                    <span>💡</span> {t.common.hint}
                  </button>
                </div>

                <p className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100">
                  {task.question[profile.language]}
                </p>

                {hintActive && (
                  <div className="text-xs bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-200 p-2.5 rounded-xl border border-amber-200 font-medium">
                    💡 Maslahat: {task.hint[profile.language]}
                  </div>
                )}

                {/* Multiple choice options */}
                {task.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {task.options[profile.language].map((opt, optIdx) => {
                      const isThisSelected = selectedOpt === optIdx;
                      let btnStyle = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-amber-400';

                      if (isThisSelected) {
                        if (isCorrect) {
                          btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 font-black';
                        } else {
                          btnStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950 text-rose-800 dark:text-rose-200 font-black animate-wiggle';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleTaskAnswer(task.id, optIdx, task.correctAnswer)}
                          className={`text-left px-3.5 py-2.5 rounded-xl border-2 text-xs sm:text-sm font-semibold transition-all ${btnStyle}`}
                        >
                          <span className="font-bold mr-2 text-slate-400">{String.fromCharCode(65 + optIdx)})</span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Feedback message */}
                {isCorrect === true && (
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <span>🎉</span> {t.common.correct} (+10 XP)
                  </div>
                )}
                {isCorrect === false && (
                  <div className="text-xs font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                    <span>🤔</span> {t.common.incorrect}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* "Remember!" Box & Self Check */}
      <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-5 sm:p-6 text-white shadow-md space-y-4">
        <div className="flex items-start gap-3">
          <span className="text-3xl">📌</span>
          <div>
            <h4 className="font-black text-lg">{t.learn.rememberTitle}</h4>
            <p className="text-sm font-medium text-amber-50 leading-relaxed mt-1">
              {lesson.rememberBox[profile.language]}
            </p>
          </div>
        </div>

        {/* Self check emojis */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-bold text-amber-100">
            {t.common.understandQuestion}
          </span>
          <div className="flex items-center gap-3">
            {[
              { emoji: '😀', label: "A'lo tushundim!" },
              { emoji: '🙂', label: "Yaxshi tushundim" },
              { emoji: '😕', label: "Biroz qiyin bo'ldi" }
            ].map(item => (
              <button
                key={item.emoji}
                onClick={() => {
                  sound.playClick();
                  setUnderstoodEmoji(item.emoji);
                }}
                className={`text-2xl p-1.5 rounded-xl transition-transform ${
                  understoodEmoji === item.emoji
                    ? 'scale-125 bg-white/30 shadow-md'
                    : 'hover:scale-115'
                }`}
                title={item.label}
              >
                {item.emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Complete lesson button */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={handleCompleteLesson}
            className="bg-white text-orange-600 hover:bg-amber-50 px-6 py-3 rounded-2xl font-black text-sm shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <span>🏆</span> Darsni tamomlash (+20 XP)
          </button>
        </div>
      </div>
    </div>
  );
};
