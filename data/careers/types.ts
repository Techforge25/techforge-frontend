export type JobPosition = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string; // e.g., "Full-time"
  experience: string; // e.g., "Senior (5+ years)"
  salaryRange?: string; // e.g., "Competitive" or "$80k - $120k"
  description: string;
  aboutRole: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  benefits: string[];
};
