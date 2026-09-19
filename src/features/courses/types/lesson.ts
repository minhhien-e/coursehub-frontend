export interface LessonResource {
  title: string;
  type: 'pdf' | 'github' | 'link';
  url: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isPreview?: boolean;
  isCompleted?: boolean;
  notes?: string;
  resources?: LessonResource[];
}

export interface Module {
  id: string;
  title: string;
  duration: string;
  lessons: Lesson[];
}
