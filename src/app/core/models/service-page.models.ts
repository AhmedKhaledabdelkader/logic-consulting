export interface ServiceGroup {
  title: string | null;
  items: { id: number; title: string }[];
}

export interface ServiceDetail {
  id: number;
  code: string | null;
  slug: string;
  title: string;
  description: string;
  icon: string | null;
  sort_order: number;
  is_active: boolean;
  groups: ServiceGroup[];
  items_count: number;
}
