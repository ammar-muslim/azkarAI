import type { Category } from '../../types/dhikr';

export interface DhikrCardProps {
  text: string | ((category: Category) => string);
  count: number;
  reference?: string;
  benefit: string;
  isDark?: boolean;
  onComplete?: () => void;
  index: number;
}