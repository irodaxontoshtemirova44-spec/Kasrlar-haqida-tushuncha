import React from 'react';

interface PieProps {
  numerator: number;
  denominator: number;
  size?: number;
  interactive?: boolean;
  onSliceClick?: (index: number) => void;
  selectedSlices?: number[]; // indices 0..denominator-1
  type?: 'pizza' | 'pie';
}

export const FractionPie: React.FC<PieProps> = ({
  numerator,
  denominator,
  size = 180,
  interactive = false,
  onSliceClick,
  selectedSlices,
  type = 'pizza',
}) => {
  const radius = size / 2 - 10;
  const center = size / 2;
  const denom = Math.max(1, Math.min(24, denominator));

  // Determine active slice indices
  const isSliceActive = (i: number) => {
    if (selectedSlices) return selectedSlices.includes(i);
    return i < numerator;
  };

  const slices = [];
  for (let i = 0; i < denom; i++) {
    const startAngle = (i * 2 * Math.PI) / denom - Math.PI / 2;
    const endAngle = ((i + 1) * 2 * Math.PI) / denom - Math.PI / 2;

    const x1 = center + radius * Math.cos(startAngle);
    const y1 = center + radius * Math.sin(startAngle);
    const x2 = center + radius * Math.cos(endAngle);
    const y2 = center + radius * Math.sin(endAngle);

    const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
    const pathData = denom === 1
      ? `M ${center - radius} ${center} A ${radius} ${radius} 0 1 0 ${center + radius} ${center} A ${radius} ${radius} 0 1 0 ${center - radius} ${center} Z`
      : `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;

    const active = isSliceActive(i);

    // Pizza slice colors
    const fillColor = type === 'pizza'
      ? active ? '#f59e0b' : '#fef3c7'
      : active ? '#3b82f6' : '#e0e7ff';

    const strokeColor = type === 'pizza' ? '#b45309' : '#1d4ed8';

    // Midpoint for pepperoni
    const midAngle = (startAngle + endAngle) / 2;
    const pepDist = radius * 0.6;
    const px = center + pepDist * Math.cos(midAngle);
    const py = center + pepDist * Math.sin(midAngle);

    slices.push(
      <g
        key={i}
        className={interactive ? 'cursor-pointer transition-transform hover:opacity-90' : ''}
        onClick={() => interactive && onSliceClick && onSliceClick(i)}
      >
        <path
          d={pathData}
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth="2.5"
          className="transition-colors duration-200"
        />
        {type === 'pizza' && active && denom <= 12 && (
          <circle cx={px} cy={py} r={size > 140 ? 5 : 3.5} fill="#dc2626" opacity="0.85" />
        )}
      </g>
    );
  }

  return (
    <div className="inline-flex flex-col items-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="drop-shadow-md select-none"
      >
        {/* Crust background */}
        <circle
          cx={center}
          cy={center}
          r={radius + 3}
          fill={type === 'pizza' ? '#d97706' : '#60a5fa'}
          stroke={type === 'pizza' ? '#b45309' : '#2563eb'}
          strokeWidth="3"
        />
        {slices}
        {/* Center hub */}
        <circle cx={center} cy={center} r={4} fill="#78350f" />
      </svg>
    </div>
  );
};

interface BarProps {
  numerator: number;
  denominator: number;
  width?: number;
  height?: number;
  interactive?: boolean;
  onBlockClick?: (index: number) => void;
  selectedBlocks?: number[];
  themeColor?: 'chocolate' | 'blue' | 'emerald';
}

export const FractionBar: React.FC<BarProps> = ({
  numerator,
  denominator,
  width = 240,
  height = 50,
  interactive = false,
  onBlockClick,
  selectedBlocks,
  themeColor = 'chocolate',
}) => {
  const denom = Math.max(1, Math.min(24, denominator));
  const blockWidth = width / denom;

  const isBlockActive = (i: number) => {
    if (selectedBlocks) return selectedBlocks.includes(i);
    return i < numerator;
  };

  const getColors = (active: boolean) => {
    if (themeColor === 'chocolate') {
      return active
        ? { fill: '#78350f', stroke: '#451a03', text: '#fef3c7' }
        : { fill: '#fed7aa', stroke: '#d97706', text: '#9a3412' };
    }
    if (themeColor === 'emerald') {
      return active
        ? { fill: '#059669', stroke: '#065f46', text: '#ffffff' }
        : { fill: '#d1fae5', stroke: '#10b981', text: '#065f46' };
    }
    return active
      ? { fill: '#3b82f6', stroke: '#1e40af', text: '#ffffff' }
      : { fill: '#e0e7ff', stroke: '#6366f1', text: '#3730a3' };
  };

  return (
    <div className="inline-flex flex-col items-center">
      <svg
        width={width}
        height={height}
        className="rounded-xl overflow-hidden drop-shadow-sm select-none"
      >
        <rect
          x="1"
          y="1"
          width={width - 2}
          height={height - 2}
          rx="8"
          fill="#f1f5f9"
          stroke="#cbd5e1"
          strokeWidth="2"
        />
        {Array.from({ length: denom }).map((_, i) => {
          const active = isBlockActive(i);
          const c = getColors(active);
          const x = i * blockWidth;
          return (
            <g
              key={i}
              className={interactive ? 'cursor-pointer' : ''}
              onClick={() => interactive && onBlockClick && onBlockClick(i)}
            >
              <rect
                x={x + 1.5}
                y={2}
                width={blockWidth - 3}
                height={height - 4}
                rx="4"
                fill={c.fill}
                stroke={c.stroke}
                strokeWidth="1.5"
                className="transition-colors duration-200"
              />
              {/* Chocolate bar square shine / bevel */}
              {themeColor === 'chocolate' && active && (
                <rect
                  x={x + 5}
                  y={6}
                  width={Math.max(4, blockWidth - 10)}
                  height={height - 12}
                  rx="3"
                  fill="#92400e"
                  opacity="0.4"
                />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

interface NumberLineProps {
  numerator: number;
  denominator: number;
  max?: number; // default 1
  width?: number;
  interactive?: boolean;
  onPositionSelect?: (num: number, den: number) => void;
  showFrog?: boolean;
}

export const FractionNumberLine: React.FC<NumberLineProps> = ({
  numerator,
  denominator,
  max = 1,
  width = 300,
  interactive = false,
  onPositionSelect,
  showFrog = true,
}) => {
  const height = 80;
  const padding = 36;
  const lineY = 44;
  const lineWidth = width - padding * 2;
  const denom = Math.max(1, denominator);

  const totalSteps = denom * max;
  const currentFractionVal = Math.min(max, numerator / denom);
  const frogX = padding + (currentFractionVal / max) * lineWidth;

  return (
    <div className="w-full flex justify-center overflow-x-auto py-2">
      <svg width={width} height={height} className="select-none overflow-visible">
        {/* Base axis line */}
        <line
          x1={padding}
          y1={lineY}
          x2={width - padding}
          y2={lineY}
          stroke="#475569"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Ticks and fractions */}
        {Array.from({ length: totalSteps + 1 }).map((_, step) => {
          const x = padding + (step / totalSteps) * lineWidth;
          const isWhole = step % denom === 0;
          const wholeVal = step / denom;

          return (
            <g
              key={step}
              className={interactive ? 'cursor-pointer' : ''}
              onClick={() => interactive && onPositionSelect && onPositionSelect(step, denom)}
            >
              <line
                x1={x}
                y1={isWhole ? lineY - 14 : lineY - 8}
                x2={x}
                y2={isWhole ? lineY + 14 : lineY + 8}
                stroke={isWhole ? '#1e293b' : '#64748b'}
                strokeWidth={isWhole ? 3 : 2}
              />
              {isWhole ? (
                <text
                  x={x}
                  y={lineY + 30}
                  textAnchor="middle"
                  className="font-bold text-sm fill-slate-800 dark:fill-slate-100"
                >
                  {wholeVal}
                </text>
              ) : (
                <text
                  x={x}
                  y={lineY + 28}
                  textAnchor="middle"
                  className="text-xs font-semibold fill-slate-500 dark:fill-slate-400"
                >
                  {step}/{denom}
                </text>
              )}
            </g>
          );
        })}

        {/* Frog or Pin Indicator */}
        {showFrog && (
          <g transform={`translate(${frogX}, ${lineY - 24})`} className="transition-transform duration-300">
            {/* Frog emoji or SVG */}
            <circle cx="0" cy="0" r="14" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
            <circle cx="-5" cy="-14" r="5" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
            <circle cx="5" cy="-14" r="5" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
            <circle cx="-5" cy="-14" r="2.5" fill="#ffffff" />
            <circle cx="-4.5" cy="-14" r="1.5" fill="#000000" />
            <circle cx="5" cy="-14" r="2.5" fill="#ffffff" />
            <circle cx="4.5" cy="-14" r="1.5" fill="#000000" />
            {/* Smile */}
            <path d="M -5 -3 Q 0 4 5 -3" stroke="#14532d" strokeWidth="1.5" fill="none" />
            {/* Arrow pointer */}
            <polygon points="-5,14 5,14 0,22" fill="#15803d" />
          </g>
        )}
      </svg>
    </div>
  );
};

interface MascotProps {
  mood?: 'happy' | 'cheer' | 'thinking' | 'encouraging' | 'waving';
  speech?: string;
  size?: number;
}

export const Mascot: React.FC<MascotProps> = ({
  mood = 'happy',
  speech,
  size = 85,
}) => {
  return (
    <div className="flex items-center gap-3">
      <div
        style={{ width: size, height: size }}
        className="relative flex-shrink-0 animate-bounce-gentle select-none"
      >
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          {/* Pizza slice body */}
          <path
            d="M 50 12 L 88 84 Q 50 94 12 84 Z"
            fill="#f59e0b"
            stroke="#b45309"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Crust */}
          <path
            d="M 12 84 Q 50 94 88 84 Q 50 99 12 84 Z"
            fill="#d97706"
            stroke="#92400e"
            strokeWidth="2.5"
          />
          {/* Chef Hat */}
          <path
            d="M 40 16 C 35 6 45 2 50 4 C 55 2 65 6 60 16 Z"
            fill="#ffffff"
            stroke="#cbd5e1"
            strokeWidth="2"
          />
          <rect x="42" y="14" width="16" height="5" rx="1.5" fill="#ef4444" />

          {/* Pepperoni cheeks / toppings */}
          <circle cx="34" cy="62" r="5" fill="#ef4444" opacity="0.6" />
          <circle cx="66" cy="62" r="5" fill="#ef4444" opacity="0.6" />
          <circle cx="50" cy="38" r="4" fill="#ef4444" opacity="0.8" />

          {/* Big Cartoon Eyes */}
          <ellipse cx="40" cy="48" rx="6.5" ry="8" fill="#ffffff" stroke="#78350f" strokeWidth="1.5" />
          <ellipse cx="60" cy="48" rx="6.5" ry="8" fill="#ffffff" stroke="#78350f" strokeWidth="1.5" />

          {mood === 'thinking' ? (
            <>
              <circle cx="42" cy="44" r="3.5" fill="#1e293b" />
              <circle cx="62" cy="44" r="3.5" fill="#1e293b" />
              {/* Eyebrows angled */}
              <line x1="33" y1="38" x2="45" y2="40" stroke="#78350f" strokeWidth="2" />
              <line x1="55" y1="40" x2="67" y2="38" stroke="#78350f" strokeWidth="2" />
              {/* Thinking mouth */}
              <path d="M 46 64 Q 50 62 54 64" stroke="#78350f" strokeWidth="2.5" fill="none" />
            </>
          ) : mood === 'cheer' ? (
            <>
              {/* Sparkle happy eyes */}
              <path d="M 34 50 Q 40 44 46 50" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M 54 50 Q 60 44 66 50" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* Wide smile */}
              <path d="M 40 58 Q 50 72 60 58 Z" fill="#b91c1c" stroke="#78350f" strokeWidth="1.5" />
              <path d="M 45 66 Q 50 69 55 66" fill="#f87171" />
              {/* Hands up cheering! */}
              <path d="M 20 62 Q 8 46 14 36" stroke="#b45309" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              <path d="M 80 62 Q 92 46 86 36" stroke="#b45309" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            </>
          ) : (
            <>
              {/* Pupils with glint */}
              <circle cx="41" cy="49" r="3.5" fill="#1e293b" />
              <circle cx="42" cy="47" r="1.2" fill="#ffffff" />
              <circle cx="61" cy="49" r="3.5" fill="#1e293b" />
              <circle cx="62" cy="47" r="1.2" fill="#ffffff" />
              {/* Cheerful smile */}
              <path d="M 42 60 Q 50 68 58 60" stroke="#78350f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              {/* Waving hand */}
              <path d="M 80 64 Q 92 58 92 46" stroke="#b45309" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            </>
          )}
        </svg>
      </div>

      {speech && (
        <div className="relative bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border-2 border-amber-300 dark:border-amber-600 rounded-2xl px-4 py-2 text-sm font-semibold shadow-md max-w-xs md:max-w-md">
          {speech}
          {/* Speech bubble tail */}
          <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-amber-300 dark:border-r-amber-600"></div>
        </div>
      )}
    </div>
  );
};
