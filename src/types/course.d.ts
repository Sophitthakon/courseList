export interface Course {
    id: string;
    title: string;
    professor: string;
    description: string;
    syllabus: CourseModule[];
}

export interface CourseModule {
    name: string;
    hour: string;
    description: string
}