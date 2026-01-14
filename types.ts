
export interface Course {
  id: number;
  title: string;
  officialName: string;
  link: string;
  description: string;
  certification: string;
  icon: string;
}

export interface RoadmapProps {
  courses: Course[];
  checkpoint: string;
}
