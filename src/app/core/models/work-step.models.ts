export interface WorkStep {
  id: number;
  number: string;
  title: string;
  description: string;
  outcome: string | null;
  icon: string | null;
  sort_order: number;
  is_active: boolean;
}
