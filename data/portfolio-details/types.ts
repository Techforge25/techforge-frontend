export type PortfolioDetail = {
  slug: string;
  projectName: string;
  category: string;
  heroImage: string;
  heroBadgeLabel: string;
  industry?: string;
  briefTitle: string;
  briefDescription: string;
  challengeTitle: string;
  challenges: string[];
  solutionTitle: string;
  solutionDescription: string;
  solutionFeatures: string[];
  resultsHeading: string;
  assumption?: string;
  decision?: string;
  launch?: string;
  learning?: string;
  nextStep?: string;
  results: Array<{
    value: string;
    label: string;
  }>;
  techStackHeading: string;
  techStacks: Array<{
    id: string;
    label: string;
    icon: string;
  }>;
};
