import React, { useState } from 'react';
import { UserProfile, Question } from '../types';
import { i18n } from '../i18n';
import { quizQuestions } from '../quizData';
import { sound } from '../sound';
import { launchConfetti } from '../state';

interface ExamSectionProps {
  profile: UserProfile;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
}

export const ExamSection: React.FC<ExamSectionProps> = ({
  profile,
  onUpdateProfile,
}) => {
  const t = i18n[profile.language];

  const [inExam, setInExam] = useState(false);
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [examCompleted, setExamCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const startExam = () => {
    sound.playClick();
    // Pick 20 questions randomized
    const shuffled = [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, 20);
    setExamQuestions(shuffled);
    setCurrentIndex(0);
    setUserAnswers({});
    setExamCompleted(false);
    setFinalScore(0);
    setInExam(true);
  };

  const handleSelectOption = (optIdx: number) => {
    sound.playClick();
    setUserAnswers(prev => ({ ...prev, [currentIndex]: optIdx }));
  };

  const handleFinishExam = () => {
    sound.playFanfare();
    launchConfetti();

    let correctCount = 0;
    examQuestions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) {
        correctCount++;
      }
    });

    setFinalScore(correctCount);
    setExamCompleted(true);

    const percent = Math.round((correctCount / examQuestions.length) * 100);
    let grade = 2;
    if (percent >= 90) grade = 5;
    else if (percent >= 75) grade = 4;
    else if (percent >= 55) grade = 3;

    onUpdateProfile({
      xp: profile.xp + correctCount * 10,
      stars: profile.stars + (grade >= 4 ? 5 : 2),
      badges: grade === 5 && !profile.badges.includes('exam_champion')
        ? [...profile.badges, 'exam_champion']
        : profile.badges
    });
  };

  const currentQ = examQuestions[currentIndex];
  const percent = examQuestions.length > 0 ? Math.round((finalScore / examQuestions.length) * 100) : 0;
  let finalGrade = 2;
  if (percent >= 90) finalGrade = 5;
  else if (percent >= 75) finalGrade = 4;
  else if (percent >= 55) finalGrade = 3;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Exam Banner */}
      <div className="bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 rounded-3xl p-5 sm:p-7 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="bg-white/20 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
            Official Evaluation
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mt-1">
            {t.exam.title}
          </h2>
          <p className="text-sm text-red-100 font-medium">
            {t.exam.desc}
          </p>
        </div>

        {!inExam && (
          <button
            onClick={startExam}
            className="bg-white text-red-600 hover:bg-amber-50 px-6 py-3 rounded-2xl font-black text-sm shadow-md transition-all active:scale-95"
          >
            ✍️ {t.exam.startExamBtn}
          </button>
        )}
      </div>

      {/* Start screen info */}
      {!inExam && (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-700 text-center space-y-4">
          <div className="text-6xl">🎓</div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-800 dark:text-slate-100">
            5-sinf kasrlar kursi bo'yicha yakuniy imtihon
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
            Imtihon 20 ta aralash savoldan iborat. Imtihon yakunida sizga rasmiy 5 ballik baho va yuklab olish uchun esdalik Sertifikati beriladi!
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto pt-2">
            <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-800 font-bold text-xs">5 Baho: &ge; 90%</div>
            <div className="p-3 rounded-2xl bg-blue-50 text-blue-800 font-bold text-xs">4 Baho: 75% - 89%</div>
            <div className="p-3 rounded-2xl bg-amber-50 text-amber-800 font-bold text-xs">3 Baho: 55% - 74%</div>
            <div className="p-3 rounded-2xl bg-rose-50 text-rose-800 font-bold text-xs">2 Baho: &lt; 55%</div>
          </div>
        </div>
      )}

      {/* Active Exam Questions */}
      {inExam && !examCompleted && currentQ && (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200 dark:border-slate-700 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-3">
            <span className="text-xs font-black text-red-500 uppercase tracking-wider">
              Savol {currentIndex + 1} / {examQuestions.length}
            </span>
            <span className="text-xs font-bold text-slate-400">
              Belgilangan: {Object.keys(userAnswers).length} / {examQuestions.length}
            </span>
          </div>

          {/* Question text */}
          <h3 className="text-base sm:text-lg font-black text-slate-800 dark:text-slate-100">
            {currentQ.prompt[profile.language]}
          </h3>

          {/* Options */}
          {currentQ.options && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentQ.options[profile.language].map((opt, optIdx) => {
                const isSelected = userAnswers[currentIndex] === optIdx;
                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`text-left p-3.5 rounded-2xl border-2 text-xs sm:text-sm font-semibold transition-all ${
                      isSelected
                        ? 'border-amber-500 bg-amber-50 dark:bg-slate-700 text-amber-800 dark:text-amber-200 font-bold'
                        : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:border-amber-300'
                    }`}
                  >
                    <span className="font-bold mr-2 text-slate-400">{String.fromCharCode(65 + optIdx)})</span>
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          {/* Navigation between exam questions */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
            <button
              disabled={currentIndex <= 0}
              onClick={() => { sound.playClick(); setCurrentIndex(c => c - 1); }}
              className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold disabled:opacity-30"
            >
              ◀ {t.common.prev}
            </button>

            {currentIndex + 1 < examQuestions.length ? (
              <button
                onClick={() => { sound.playClick(); setCurrentIndex(c => c + 1); }}
                className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-xl text-xs font-black shadow-xs"
              >
                {t.common.next} ▶
              </button>
            ) : (
              <button
                onClick={handleFinishExam}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl text-xs font-black shadow-md"
              >
                🏁 Imtihonni yakunlash
              </button>
            )}
          </div>
        </div>
      )}

      {/* Exam Results & Printable Certificate */}
      {inExam && examCompleted && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-700 text-center space-y-4">
            <div className="text-6xl animate-bounce-gentle">🏅</div>
            <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100">
              {t.exam.resultsTitle}
            </h3>
            <div className="text-5xl font-black text-amber-500">
              {finalScore} / {examQuestions.length} ({percent}%)
            </div>

            <div className={`p-4 rounded-2xl font-black text-base max-w-md mx-auto ${
              finalGrade === 5
                ? 'bg-emerald-100 text-emerald-800'
                : finalGrade === 4
                ? 'bg-blue-100 text-blue-800'
                : finalGrade === 3
                ? 'bg-amber-100 text-amber-800'
                : 'bg-rose-100 text-rose-800'
            }`}>
              {finalGrade === 5 ? t.exam.grade5 : finalGrade === 4 ? t.exam.grade4 : finalGrade === 3 ? t.exam.grade3 : t.exam.grade2}
            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-3">
              <button
                onClick={() => window.print()}
                className="bg-amber-500 hover:bg-amber-600 text-white font-black text-sm px-6 py-2.5 rounded-2xl shadow-md flex items-center gap-2"
              >
                <span>🖨️</span> {t.exam.certificateBtn}
              </button>
              <button
                onClick={startExam}
                className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-black text-sm px-5 py-2.5 rounded-2xl"
              >
                🔄 {t.exam.retakeBtn}
              </button>
            </div>
          </div>

          {/* Printable Certificate Area */}
          <div id="certificate-print-area" className="bg-gradient-to-br from-amber-50 via-white to-amber-50 p-8 sm:p-12 rounded-3xl border-8 border-amber-400 shadow-xl text-center space-y-6 max-w-3xl mx-auto my-6 text-slate-800">
            <div className="flex justify-center text-5xl">👑</div>
            <h2 className="text-3xl sm:text-4xl font-black text-amber-700 tracking-wider">
              {t.certificate.title}
            </h2>
            <p className="text-xs sm:text-sm font-bold text-amber-600 uppercase tracking-widest">
              {t.certificate.subtitle}
            </p>

            <div className="py-4 border-y-2 border-amber-300 space-y-2">
              <div className="text-xs text-slate-500 font-bold uppercase">{t.certificate.awardedTo}</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 underline decoration-amber-400">
                {profile.name}
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-700 font-medium max-w-xl mx-auto leading-relaxed">
              {t.certificate.bodyText}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 text-left border-t border-amber-200">
              <div>
                <div className="text-[11px] text-slate-400 font-bold uppercase">{t.certificate.date}</div>
                <div className="text-sm font-black text-slate-800">{new Date().toLocaleDateString()}</div>
              </div>
              <div className="text-center">
                <div className="text-[11px] text-slate-400 font-bold uppercase">{t.certificate.grade}</div>
                <div className="text-xl font-black text-amber-600">{finalGrade} (Ball: {percent}%)</div>
              </div>
              <div className="text-right">
                <div className="text-[11px] text-slate-400 font-bold uppercase">{t.certificate.mentor}</div>
                <div className="text-sm font-black text-slate-800">{t.certificate.mentorSign}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
