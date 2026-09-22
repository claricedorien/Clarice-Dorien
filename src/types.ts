export type ProjectCategory = 'all' | 'web-apps' | 'design-systems' | 'creative-ui' | 'mobile-frontend';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  client?: string;
  role: string;
  featured: boolean;
  image: string;
  accentColor: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  experience: string;
  badge: string;
  description: string;
  iconName?: string;
}

export type TimelineType = 'all' | 'work' | 'education-recognition';

export interface TimelineItem {
  id: string;
  type: 'work' | 'education-recognition';
  period: string;
  title: string;
  companyOrInstitution: string;
  location: string;
  badge: string;
  description: string;
  achievements: string[];
  skills: string[];
  link?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}
