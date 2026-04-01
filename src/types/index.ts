export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    techStack: string[];
    achievements: string[];
    technicalDetails: string[];
    metrics: {
        label: string;
        value: string;
    }[];
    links: {
        github?: string;
        live?: string;
        demo?: string;
    };
    image: string;
    date: string;
    logo?: string;
}

export interface Experience {
    id: string;
    position: string;
    company: string;
    duration: string;
    achievements: string[];
    type: 'internship' | 'fulltime' | 'contract';
}

export interface Skill {
    category: string;
    skills: {
        name: string;
    }[];
}

export interface Certification {
    name: string;
    issuer: string;
    date: string;
    logo?: string;
}

export interface Education {
    institution: string;
    degree: string;
    duration: string;
    grade: string;
    coursework?: string[];
}

export interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}
