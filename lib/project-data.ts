export interface ProjectImage {
  url: string;
  alt: string;
}

export interface ProjectTechnology {
  category: string;
  items: { name: string; logo?: string }[];
}

export interface ProjectMetric {
  name: string;
  value: number;
  max: number;
}

export interface ProjectData {
  id: string;
  title: string;
  projectLink?: string;
  images: ProjectImage[];
  overview: {
    description: string;
    details: string;
  };
  features: string[];
  technologies: ProjectTechnology[];
  metrics: ProjectMetric[];
}
