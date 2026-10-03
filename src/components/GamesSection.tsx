import React, { useState, useEffect, useRef } from 'react';
import { UserProfile } from '../types';
import { i18n } from '../i18n';
import { FractionPie, FractionBar, FractionNumberLine, Mascot } from '../svg';
import { sound } from '../sound';
import { launchConfetti } from '../state';

interface GamesSectionProps {
  profile: UserProfile;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
}

type GameId = 'pizza' | 'balloon' | 'memory' | 'sorter' | 'race' | 'monster' | 'frog';

export const GamesSection: React.FC<GamesSectionProps> = ({
  profile,
  onUpdateProfile,
}) => {
  const t = i18n[profile.language];
  const [selectedGame, setSelectedGame] = useState<GameId | null>(null);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');

  // Shared game state
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const [timer, setTimer] = useState(30);

  // 1. Pizza Chef State
  const [pizzaOrder, setPizzaOrder] = useState({ num: 3, den: 8 });
  const [pizzaDen, setPizzaDen] = useState(8);
  const [selectedSlices, setSelectedSlices] = useState<number[]>([0, 1, 2]);

  // 2. Balloon Pop State
  const [balloons, setBalloons] = useState<Array<{ id: number; num: number; den: number; x: number; y: number; popped: boolean }>>([]);
  const [balloonTargetRule, setBalloonTargetRule] = useState<'lessHalf' | 'equalHalf' | 'improper'>('lessHalf');

  // 3. Memory Match State
  const [memoryCards, setMemoryCards] = useState<Array<{ id: number; pairId: number; text?: string; num?: number; den?: number; flipped: boolean; matched: boolean }>>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);

  // 4. Sorter State
  const [sorterCards, setSorterCards] = useState<Array<{ id: number; num: number; den: number; type: 'proper' | 'improper' | 'mixed' }>>([]);
  const [currentSorterCard, setCurrentSorterCard] = useState<{ id: number; num: number; den: number; type: 'proper' | 'improper' | 'mixed' } | null>(null);

  // 5. Race State
  const [playerDistance, setPlayerDistance] = useState(0);
  const [robotDistance, setRobotDistance] = useState(0);
  const [raceQuestion, setRaceQuestion] = useState<{ q: string; opts: string[]; correct: number }>({ q: '2/5 + 1/5 = ?', opts: ['3/5', '3/10', '1/5'], correct: 0 });

  // 6. Monster State
  const [monsterHunger, setMonsterHunger] = useState({ num: 3, den: 5 });
  const [monsterFedBlocks, setMonsterFedBlocks] = useState<number[]>([]);

  // 7. Frog State
  const [frogTarget, setFrogTarget] = useState({ num: 3, den: 4 });
  const [frogCurrentPos, setFrogCurrentPos] = useState({ num: 0, den: 4 });

  // Reset Game handler
  const startNewGame = (gameId: GameId) => {
    sound.playClick();
    setSelectedGame(gameId);
    setScore(0);
    setLives(3);
    setIsGameOver(false);
    setIsGameWon(false);
    setTimer(difficulty === 'easy' ? 45 : difficulty === 'medium' ? 30 : 20);

    if (gameId === 'pizza') {
      const dens = difficulty === 'easy' ? [4, 6] : difficulty === 'medium' ? [6, 8] : [8, 10, 12];
      const den = dens[Math.floor(Math.random() * dens.length)];
      const num = Math.floor(Math.random() * (den - 1)) + 1;
      setPizzaOrder({ num, den });
      setPizzaDen(den);
      setSelectedSlices([]);
    } else if (gameId === 'balloon') {
      setupBalloonRound();
    } else if (gameId === 'memory') {
      setupMemoryCards();
    } else if (gameId === 'sorter') {
      setupSorterCards();
    } else if (gameId === 'race') {
      setPlayerDistance(0);
      setRobotDistance(0);
      generateRaceQuestion();
    } else if (gameId === 'monster') {
      setupMonsterRound();
    } else if (gameId === 'frog') {
      setupFrogRound();
    }
  };

  // Timer effect
  useEffect(() => {
    if (!selectedGame || isGameOver || isGameWon) return;
    if (selectedGame === 'pizza' || selectedGame === 'balloon' || selectedGame === 'race') {
      const interval = setInterval(() => {
        setTimer(t => {
          if (t <= 1) {
            handleGameOver();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [selectedGame, isGameOver, isGameWon]);

  const handleGameOver = () => {
    sound.playWrong();
    setIsGameOver(true);
  };

  const handleGameVictory = (bonusXP = 30) => {
    sound.playFanfare();
    launchConfetti();
    setIsGameWon(true);
    onUpdateProfile({
      xp: profile.xp + bonusXP,
      stars: profile.stars + 3
    });
  };

  // 1. Pizza Chef Logic
  const handleSliceClick = (index: number) => {
    sound.playClick();
    if (selectedSlices.includes(index)) {
      setSelectedSlices(selectedSlices.filter(i => i !== index));
    } else {
      setSelectedSlices([...selectedSlices, index]);
    }
  };

  const handleServePizza = () => {
    if (pizzaDen === pizzaOrder.den && selectedSlices.length === pizzaOrder.num) {
      sound.playCorrect();
      launchConfetti();
      const newScore = score + 1;
      setScore(newScore);
      if (newScore >= 3) {
        handleGameVictory(35);
      } else {
        // Next order
        const dens = difficulty === 'easy' ? [4, 6] : difficulty === 'medium' ? [6, 8] : [8, 12];
        const den = dens[Math.floor(Math.random() * dens.length)];
        const num = Math.floor(Math.random() * (den - 1)) + 1;
        setPizzaOrder({ num, den });
        setPizzaDen(den);
        setSelectedSlices([]);
      }
    } else {
      sound.playWrong();
      const nextLives = lives - 1;
      setLives(nextLives);
      if (nextLives <= 0) handleGameOver();
    }
  };

  // 2. Balloon Pop Logic
  const setupBalloonRound = () => {
    const rules: Array<'lessHalf' | 'equalHalf' | 'improper'> = ['lessHalf', 'equalHalf', 'improper'];
    const chosenRule = rules[Math.floor(Math.random() * rules.length)];
    setBalloonTargetRule(chosenRule);

    const generated = [
      { id: 1, num: 1, den: 2, x: 15, y: 30, popped: false },
      { id: 2, num: 1, den: 4, x: 35, y: 50, popped: false },
      { id: 3, num: 3, den: 4, x: 55, y: 25, popped: false },
      { id: 4, num: 5, den: 3, x: 75, y: 45, popped: false },
      { id: 5, num: 2, den: 4, x: 90, y: 60, popped: false },
    ];
    setBalloons(generated);
  };

  const handlePopBalloon = (b: { id: number; num: number; den: number; popped: boolean }) => {
    if (b.popped) return;
    sound.playPop();

    let matches = false;
    const val = b.num / b.den;
    if (balloonTargetRule === 'lessHalf' && val < 0.5) matches = true;
    if (balloonTargetRule === 'equalHalf' && val === 0.5) matches = true;
    if (balloonTargetRule === 'improper' && val >= 1.0) matches = true;

    setBalloons(prev => prev.map(item => item.id === b.id ? { ...item, popped: true } : item));

    if (matches) {
      sound.playCorrect();
      const nextScore = score + 1;
      setScore(nextScore);
      if (nextScore >= 5) {
        handleGameVictory(30);
      }
    } else {
      sound.playWrong();
      const nextLives = lives - 1;
      setLives(nextLives);
      if (nextLives <= 0) handleGameOver();
    }
  };

  // 3. Memory Match Logic
  const setupMemoryCards = () => {
    const pairs = [
      { id: 1, pairId: 1, text: "1/2", num: 1, den: 2 },
      { id: 2, pairId: 1, text: "2/4 (Yarim)", num: 2, den: 4 },
      { id: 3, pairId: 2, text: "1/4", num: 1, den: 4 },
      { id: 4, pairId: 2, text: "2/8 (Chorak)", num: 2, den: 8 },
      { id: 5, pairId: 3, text: "3/4", num: 3, den: 4 },
      { id: 6, pairId: 3, text: "6/8", num: 6, den: 8 },
      { id: 7, pairId: 4, text: "1 Butun", num: 4, den: 4 },
      { id: 8, pairId: 4, text: "4/4", num: 4, den: 4 },
    ].sort(() => Math.random() - 0.5);

    setMemoryCards(pairs.map(p => ({ ...p, flipped: false, matched: false })));
    setFlippedIndices([]);
  };

  const handleCardClick = (idx: number) => {
    if (flippedIndices.length >= 2 || memoryCards[idx].flipped || memoryCards[idx].matched) return;
    sound.playClick();

    const nextFlipped = [...flippedIndices, idx];
    setFlippedIndices(nextFlipped);
    setMemoryCards(prev => prev.map((c, i) => i === idx ? { ...c, flipped: true } : c));

    if (nextFlipped.length === 2) {
      const [firstIdx, secondIdx] = nextFlipped;
      const card1 = memoryCards[firstIdx];
      const card2 = memoryCards[secondIdx];

      if (card1.pairId === card2.pairId) {
        sound.playCorrect();
        setTimeout(() => {
          setMemoryCards(prev => prev.map((c, i) => (i === firstIdx || i === secondIdx) ? { ...c, matched: true } : c));
          setFlippedIndices([]);
          const nextScore = score + 1;
          setScore(nextScore);
          if (nextScore >= 4) handleGameVictory(40);
        }, 500);
      } else {
        sound.playWrong();
        setTimeout(() => {
          setMemoryCards(prev => prev.map((c, i) => (i === firstIdx || i === secondIdx) ? { ...c, flipped: false } : c));
          setFlippedIndices([]);
        }, 900);
      }
    }
  };

  // 4. Sorter Logic
  const setupSorterCards = () => {
    const rawList: Array<{ id: number; num: number; den: number; type: 'proper' | 'improper' | 'mixed' }> = [
      { id: 1, num: 2, den: 5, type: 'proper' },
      { id: 2, num: 7, den: 4, type: 'improper' },
      { id: 3, num: 1, den: 3, type: 'proper' },
      { id: 4, num: 8, den: 3, type: 'improper' },
      { id: 5, num: 9, den: 9, type: 'improper' },
      { id: 6, num: 3, den: 7, type: 'proper' }
    ];
    const list = [...rawList].sort(() => Math.random() - 0.5);

    setSorterCards(list);
    setCurrentSorterCard(list[0]);
  };

  const handleSortIntoBox = (boxType: 'proper' | 'improper' | 'mixed') => {
    if (!currentSorterCard) return;
    sound.playClick();

    if (currentSorterCard.type === boxType) {
      sound.playCorrect();
      const nextScore = score + 1;
      setScore(nextScore);
      const remaining = sorterCards.filter(c => c.id !== currentSorterCard.id);
      setSorterCards(remaining);
      if (remaining.length === 0) {
        handleGameVictory(35);
      } else {
        setCurrentSorterCard(remaining[0]);
      }
    } else {
      sound.playWrong();
      const nextLives = lives - 1;
      setLives(nextLives);
      if (nextLives <= 0) handleGameOver();
    }
  };

  // 5. Race Logic
  const generateRaceQuestion = () => {
    const questions = [
      { q: "2/7 + 3/7 = ?", opts: ["5/7", "5/14", "6/7"], correct: 0 },
      { q: "7/9 - 4/9 = ?", opts: ["3/9", "3/0", "11/9"], correct: 0 },
      { q: "1/4 + 2/4 = ?", opts: ["3/4", "3/8", "1/4"], correct: 0 },
      { q: "1 - 2/5 = ?", opts: ["3/5", "2/5", "4/5"], correct: 0 },
      { q: "Qaysi biri katta: 3/8 yoki 5/8?", opts: ["5/8", "3/8", "Teng"], correct: 0 },
      { q: "12 ning 1/3 qismi?", opts: ["4", "3", "6"], correct: 0 }
    ];
    const item = questions[Math.floor(Math.random() * questions.length)];
    setRaceQuestion(item);
  };

  const handleRaceAnswer = (optIndex: number) => {
    sound.playClick();
    if (optIndex === raceQuestion.correct) {
      sound.playCorrect();
      const newP = playerDistance + 25;
      setPlayerDistance(newP);
      const newR = robotDistance + 15;
      setRobotDistance(newR);

      if (newP >= 100) {
        handleGameVictory(40);
      } else {
        generateRaceQuestion();
      }
    } else {
      sound.playWrong();
      setRobotDistance(r => r + 20);
      if (robotDistance + 20 >= 100) {
        handleGameOver();
      } else {
        generateRaceQuestion();
      }
    }
  };

  // 6. Monster Logic
  const setupMonsterRound = () => {
    const den = 5;
    const num = Math.floor(Math.random() * 4) + 1;
    setMonsterHunger({ num, den });
    setMonsterFedBlocks([]);
  };

  const handleMonsterBlockClick = (i: number) => {
    sound.playClick();
    if (monsterFedBlocks.includes(i)) {
      setMonsterFedBlocks(monsterFedBlocks.filter(idx => idx !== i));
    } else {
      setMonsterFedBlocks([...monsterFedBlocks, i]);
    }
  };

  const handleFeedMonster = () => {
    if (monsterFedBlocks.length === monsterHunger.num) {
      sound.playCorrect();
      launchConfetti();
      const newScore = score + 1;
      setScore(newScore);
      if (newScore >= 3) {
        handleGameVictory(35);
      } else {
        setupMonsterRound();
      }
    } else {
      sound.playWrong();
      const nextLives = lives - 1;
      setLives(nextLives);
      if (nextLives <= 0) handleGameOver();
    }
  };

  // 7. Frog Logic
  const setupFrogRound = () => {
    const den = 4;
    const num = Math.floor(Math.random() * 3) + 1;
    setFrogTarget({ num, den });
    setFrogCurrentPos({ num: 0, den: 4 });
  };

  const handleFrogPositionSelect = (selectedNum: number, den: number) => {
    sound.playJump();
    setFrogCurrentPos({ num: selectedNum, den });

    if (selectedNum === frogTarget.num) {
      sound.playCorrect();
      launchConfetti();
      const newScore = score + 1;
      setScore(newScore);
      if (newScore >= 3) {
        handleGameVictory(35);
      } else {
        setTimeout(setupFrogRound, 600);
      }
    } else {
      sound.playWrong();
      const nextLives = lives - 1;
      setLives(nextLives);
      if (nextLives <= 0) handleGameOver();
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Arcade Header */}
      <div className="bg-gradient-to-r from-purple-500 via-indigo-500 to-amber-500 rounded-3xl p-5 sm:p-7 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="bg-white/20 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
            Arcade Mode
          </span>
          <h2 className="text-2xl sm:text-3xl font-black mt-1">
            {t.games.arcadeTitle}
          </h2>
          <p className="text-sm text-purple-100 font-medium">
            {t.games.arcadeSub}
          </p>
        </div>

        {/* Difficulty Selector */}
        <div className="flex bg-white/20 backdrop-blur-md p-1 rounded-2xl border border-white/30">
          {(['easy', 'medium', 'hard'] as const).map(d => (
            <button
              key={d}
              onClick={() => { sound.playClick(); setDifficulty(d); }}
              className={`px-3 py-1.5 rounded-xl text-xs font-black capitalize transition-all ${
                difficulty === d
                  ? 'bg-white text-purple-700 shadow-sm'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {d === 'easy' ? t.common.easy : d === 'medium' ? t.common.medium : t.common.hard}
            </button>
          ))}
        </div>
      </div>

      {/* Game Selector Menu (When no game is active) */}
      {!selectedGame && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { id: 'pizza' as GameId, icon: '🍕', title: t.games.pizzaChef.title, desc: t.games.pizzaChef.desc, color: 'from-amber-400 to-orange-500' },
            { id: 'balloon' as GameId, icon: '🎈', title: t.games.balloonPop.title, desc: t.games.balloonPop.desc, color: 'from-pink-500 to-rose-500' },
            { id: 'memory' as GameId, icon: '🧠', title: t.games.memory.title, desc: t.games.memory.desc, color: 'from-blue-500 to-indigo-500' },
            { id: 'sorter' as GameId, icon: '📦', title: t.games.sorter.title, desc: t.games.sorter.desc, color: 'from-emerald-500 to-teal-500' },
            { id: 'race' as GameId, icon: '🏎️', title: t.games.race.title, desc: t.games.race.desc, color: 'from-red-500 to-amber-500' },
            { id: 'monster' as GameId, icon: '👾', title: t.games.monster.title, desc: t.games.monster.desc, color: 'from-violet-500 to-purple-600' },
            { id: 'frog' as GameId, icon: '🐸', title: t.games.frog.title, desc: t.games.frog.desc, color: 'from-green-500 to-emerald-600' },
          ].map(g => (
            <div
              key={g.id}
              onClick={() => startNewGame(g.id)}
              className="bg-white dark:bg-slate-800 rounded-3xl p-5 shadow-sm border border-slate-200 dark:border-slate-700 hover:border-amber-400 hover:scale-102 cursor-pointer transition-all flex flex-col justify-between group"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${g.color} text-white flex items-center justify-center text-3xl shadow-md mb-3 group-hover:scale-110 transition-transform`}>
                  {g.icon}
                </div>
                <h3 className="text-lg font-black text-slate-800 dark:text-slate-100 mb-1">
                  {g.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  {g.desc}
                </p>
              </div>

              <button className="mt-4 w-full bg-slate-100 dark:bg-slate-700 hover:bg-amber-500 hover:text-white text-slate-700 dark:text-slate-200 py-2 rounded-xl text-xs font-black transition-colors">
                🎮 {t.common.start}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Active Game Stage */}
      {selectedGame && (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200 dark:border-slate-700 space-y-6">
          {/* Top Stage Bar: Title, Score, Hearts, Timer, Exit */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-700 pb-4">
            <button
              onClick={() => setSelectedGame(null)}
              className="text-xs font-bold text-slate-500 hover:text-amber-500 flex items-center gap-1"
            >
              ◀ O'yinlar ro'yxatiga qaytish
            </button>

            <div className="flex items-center gap-4">
              <span className="text-sm font-extrabold text-amber-500">
                ⭐ {t.common.score}: {score}
              </span>
              <span className="text-sm font-extrabold text-rose-500">
                ❤️ {Array.from({ length: Math.max(0, lives) }).map((_, i) => '❤️').join('')}
              </span>
              {(selectedGame === 'pizza' || selectedGame === 'balloon' || selectedGame === 'race') && (
                <span className="text-sm font-black bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-xl text-slate-700 dark:text-slate-200">
                  ⏱️ {timer}s
                </span>
              )}
            </div>
          </div>

          {/* Game Over / Victory Overlays */}
          {isGameOver && (
            <div className="text-center py-8 space-y-4">
              <div className="text-5xl">😢</div>
              <h3 className="text-2xl font-black text-rose-500">O'yin tugadi!</h3>
              <p className="text-sm text-slate-500 font-medium">Xafa bo'lmang, qaytadan urinib ko'ring!</p>
              <button
                onClick={() => startNewGame(selectedGame)}
                className="bg-amber-500 text-white px-6 py-2.5 rounded-2xl font-black text-sm shadow-md hover:bg-amber-600"
              >
                🔄 {t.common.playAgain}
              </button>
            </div>
          )}

          {isGameWon && (
            <div className="text-center py-8 space-y-4">
              <div className="text-6xl">🏆</div>
              <h3 className="text-2xl font-black text-emerald-500">Ajoyib g'alaba!</h3>
              <p className="text-sm text-slate-500 font-medium">+30 XP va 3 yulduz qo'lga kiritildi!</p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => startNewGame(selectedGame)}
                  className="bg-amber-500 text-white px-6 py-2.5 rounded-2xl font-black text-sm shadow-md hover:bg-amber-600"
                >
                  🔄 {t.common.playAgain}
                </button>
                <button
                  onClick={() => setSelectedGame(null)}
                  className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-5 py-2.5 rounded-2xl font-black text-sm"
                >
                  {t.common.finish}
                </button>
              </div>
            </div>
          )}

          {/* GAME 1: PIZZA CHEF */}
          {!isGameOver && !isGameWon && selectedGame === 'pizza' && (
            <div className="flex flex-col items-center space-y-5">
              <div className="bg-amber-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-amber-200 text-center">
                <span className="text-xs font-black text-amber-600 uppercase tracking-wider block">
                  {t.games.pizzaChef.order}
                </span>
                <span className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-slate-100">
                  {pizzaOrder.num}/{pizzaOrder.den} pitsa kerak!
                </span>
              </div>

              <FractionPie
                numerator={selectedSlices.length}
                denominator={pizzaDen}
                size={220}
                interactive={true}
                selectedSlices={selectedSlices}
                onSliceClick={handleSliceClick}
              />

              <div className="text-xs font-semibold text-slate-400">
                Bo'laklar ustiga bosing: tanlangan bo'laklar {selectedSlices.length} / {pizzaDen}
              </div>

              <button
                onClick={handleServePizza}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-2xl font-black text-base shadow-md active:scale-95 transition-all"
              >
                🍕 {t.games.pizzaChef.serve}
              </button>
            </div>
          )}

          {/* GAME 2: BALLOON POP */}
          {!isGameOver && !isGameWon && selectedGame === 'balloon' && (
            <div className="space-y-4">
              <div className="bg-pink-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-pink-200 text-center">
                <span className="text-xs font-black text-pink-600 uppercase tracking-wider block">
                  {t.games.balloonPop.target}
                </span>
                <span className="text-xl sm:text-2xl font-black text-slate-800 dark:text-slate-100">
                  {balloonTargetRule === 'lessHalf' ? "1/2 dan KICHIK kasrlarni yoring!" : balloonTargetRule === 'equalHalf' ? "1/2 ga TENG kasrlarni yoring!" : "NOTO'G'RI kasrlarni yoring!"}
                </span>
              </div>

              <div className="relative h-64 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden flex items-center justify-around p-4">
                {balloons.map(b => (
                  <button
                    key={b.id}
                    disabled={b.popped}
                    onClick={() => handlePopBalloon(b)}
                    className={`w-16 h-20 rounded-full flex flex-col items-center justify-center font-black transition-all ${
                      b.popped
                        ? 'opacity-0 scale-150 pointer-events-none'
                        : 'bg-gradient-to-t from-pink-500 to-rose-400 text-white shadow-md hover:scale-110 active:scale-95 animate-bounce-gentle'
                    }`}
                  >
                    <span className="text-sm">{b.num}/{b.den}</span>
                    <span className="text-[10px] opacity-75">🎈</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* GAME 3: MEMORY MATCH */}
          {!isGameOver && !isGameWon && selectedGame === 'memory' && (
            <div className="space-y-4">
              <p className="text-xs font-bold text-slate-500 text-center">
                Bir-biriga teng bo'lgan kasrlarni toping (masalan, 1/2 va 2/4)!
              </p>
              <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
                {memoryCards.map((c, i) => (
                  <button
                    key={c.id}
                    onClick={() => handleCardClick(i)}
                    className={`h-24 rounded-2xl border-2 flex items-center justify-center font-black text-sm sm:text-base transition-all ${
                      c.matched
                        ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950 text-emerald-600'
                        : c.flipped
                        ? 'border-amber-500 bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-200'
                        : 'border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-700 text-transparent hover:border-amber-400'
                    }`}
                  >
                    {c.flipped || c.matched ? c.text : '❓'}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* GAME 4: SORTER */}
          {!isGameOver && !isGameWon && selectedGame === 'sorter' && currentSorterCard && (
            <div className="space-y-6 text-center">
              <div className="inline-block p-6 rounded-3xl bg-amber-50 dark:bg-slate-900 border-2 border-amber-400 shadow-md">
                <span className="text-xs font-black text-amber-600 uppercase block mb-1">
                  Ushbu kasrni saralang:
                </span>
                <span className="text-4xl font-black text-slate-800 dark:text-slate-100">
                  {currentSorterCard.num}/{currentSorterCard.den}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                <button
                  onClick={() => handleSortIntoBox('proper')}
                  className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-2xl font-black text-base shadow-md active:scale-95 transition-all"
                >
                  📥 {t.games.sorter.boxProper} (surat &lt; maxraj)
                </button>
                <button
                  onClick={() => handleSortIntoBox('improper')}
                  className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-2xl font-black text-base shadow-md active:scale-95 transition-all"
                >
                  📥 {t.games.sorter.boxImproper} (surat &ge; maxraj)
                </button>
              </div>
            </div>
          )}

          {/* GAME 5: RACE */}
          {!isGameOver && !isGameWon && selectedGame === 'race' && (
            <div className="space-y-5">
              {/* Track visual */}
              <div className="space-y-2 bg-slate-100 dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
                    <span>🏎️ {t.games.race.player}</span>
                    <span>{playerDistance}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full transition-all duration-300" style={{ width: `${playerDistance}%` }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
                    <span>🤖 {t.games.race.robot}</span>
                    <span>{robotDistance}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-500 rounded-full transition-all duration-300" style={{ width: `${robotDistance}%` }}></div>
                  </div>
                </div>
              </div>

              {/* Math prompt */}
              <div className="text-center space-y-3">
                <span className="text-xs font-black text-amber-500 uppercase tracking-wider">
                  Tezlikni oshirish uchun hisoblang:
                </span>
                <h4 className="text-2xl font-black text-slate-800 dark:text-slate-100">
                  {raceQuestion.q}
                </h4>

                <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
                  {raceQuestion.opts.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleRaceAnswer(i)}
                      className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-amber-500 py-3 rounded-xl font-black text-sm shadow-xs active:scale-95"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* GAME 6: FEED MONSTER */}
          {!isGameOver && !isGameWon && selectedGame === 'monster' && (
            <div className="flex flex-col items-center space-y-5 text-center">
              <div className="text-6xl animate-bounce-gentle">👾</div>
              <div className="bg-purple-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-purple-200">
                <span className="text-sm font-black text-slate-800 dark:text-slate-100">
                  Nom-Nom: "Menga shokoladning {monsterHunger.num}/{monsterHunger.den} qismini ber!"
                </span>
              </div>

              <FractionBar
                numerator={monsterFedBlocks.length}
                denominator={monsterHunger.den}
                width={250}
                height={55}
                interactive={true}
                selectedBlocks={monsterFedBlocks}
                onBlockClick={handleMonsterBlockClick}
                themeColor="chocolate"
              />

              <button
                onClick={handleFeedMonster}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-2xl font-black text-base shadow-md active:scale-95 transition-all"
              >
                🍫 {t.games.monster.feedBtn}
              </button>
            </div>
          )}

          {/* GAME 7: FROG JUMP */}
          {!isGameOver && !isGameWon && selectedGame === 'frog' && (
            <div className="flex flex-col items-center space-y-5 text-center">
              <div className="bg-green-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-green-200">
                <span className="text-xs font-black text-green-600 uppercase tracking-wider block">
                  {t.games.frog.jumpTo}
                </span>
                <span className="text-2xl font-black text-slate-800 dark:text-slate-100">
                  {frogTarget.num}/{frogTarget.den} nuqtasiga sakrang!
                </span>
              </div>

              <FractionNumberLine
                numerator={frogCurrentPos.num}
                denominator={frogTarget.den}
                width={320}
                interactive={true}
                onPositionSelect={handleFrogPositionSelect}
                showFrog={true}
              />

              <p className="text-xs text-slate-400 font-semibold">
                Sonlar o'qidagi to'g'ri nuqta ustiga bosing!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
