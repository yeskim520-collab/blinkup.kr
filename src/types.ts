export type PageType = 'home' | 'about' | 'services' | 'insights' | 'insight-detail' | 'work' | 'contact';

export interface NavItem {
  id: PageType;
  label: string;
  subLabel: string;
  path: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  keyTakeaways?: string[];
  relatedSection?: string;
  author?: string;
}

export interface AccordionItemData {
  id: string;
  insightId: string;
  title: string;
  subtitle?: string;
  content: string;
  details?: string[];
}
