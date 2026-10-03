export type Language = 'uz' | 'ru' | 'en';

export interface UserProfile {
  name: string;
  avatar: string;
  xp: number;
  stars: number;
  streak: number;
  lastActiveDate: string;
  unlockedLessons: number; // max unlocked lesson (1..11)
  completedLessons: number[];
  badges: string[];
  mistakes: string[]; // question ids
  soundEnabled: boolean;
  calmMode: boolean;
  theme: 'light' | 'dark';
  language: Language;
}

export interface Badge {
  id: string;
  icon: string;
  titleKey: string;
  descKey: string;
}

export type QuestionType =
  | 'multiple_choice'
  | 'true_false'
  | 'type_fraction'
  | 'visual_choice'
  | 'fill_blank';

export interface Question {
  id: string;
  category: 'concepts' | 'reading' | 'types' | 'comparing' | 'operations' | 'number_of_fraction' | 'word_problems';
  difficulty: 'easy' | 'medium' | 'hard';
  type: QuestionType;
  prompt: Record<Language, string>;
  options?: Record<Language, string[]>;
  correctAnswer: string | number; // index or value string e.g. "3/4"
  visual?: {
    num: number;
    den: number;
    type?: 'pizza' | 'bar';
  };
  hint: Record<Language, string>;
  explanation: Record<Language, string>;
}

export interface Lesson {
  id: number;
  title: Record<Language, string>;
  caseStory: Record<Language, string>;
  explanation: Record<Language, string>;
  defaultFraction: { num: number; den: number };
  tasks: Array<{
    id: number;
    question: Record<Language, string>;
    options?: Record<Language, string[]>;
    correctAnswer: string | number;
    type: 'choice' | 'visual_click';
    hint: Record<Language, string>;
    targetNum?: number;
    targetDen?: number;
  }>;
  rememberBox: Record<Language, string>;
}
