export type BlogDetailSection = {
  heading: string;
  paragraphs: string[];
  forExampleLabel?: string;
  bullets?: string[];
  closing?: string;
};

export type BlogDetail = {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  overlay?: string;
  excerpt: string;
  content: string[];
  sections: BlogDetailSection[];
};

export type BlogCardItem = {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  overlay?: string;
};
