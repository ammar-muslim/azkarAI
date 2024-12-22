export interface Dhikr {
  id: number;
  text: string;
  count: number;
  reference?: string;
  benefit: string;
}

export type Category = 'morning' | 'evening';