export interface Article {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  content: string[];
  author: string;
  date: string;
  additionalImages?: string[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  iconColor: string;
}
