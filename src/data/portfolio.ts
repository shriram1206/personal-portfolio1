import type { Project, Experience, Skill, Certification, Education } from '../types';

export const personalInfo = {
    name: 'Shriram M',
    title: 'Full-Stack Software Engineer',
    location: 'Namakkal, Tamil Nadu, India',
    phone: '+91 8056668999',
    email: 'shriram.coder@gmail.com',
    linkedin: 'https://linkedin.com/in/shriram-m-sde',
    github: 'https://github.com/shriram1206',
    tagline: 'Building scalable microservices and AI-powered systems with production Java/Spring Boot expertise',
    description: "Final-year CSE student passionate about enterprise architecture, automation, and delivering scalable solutions for 500+ users with 95%+ satisfaction rates.",
    techStack: ['Java', 'Spring Boot', 'React', 'Docker', 'Kubernetes', 'AI/ML'],
    graduation: 'Expected May 2026',
    cgpa: '8.0/10.0 (80%)',
};

export const projects: Project[] = [
    {
        id: 'cliq-guarder',
        title: 'Cliq-Guarder – Enterprise AI-Powered Incident Response System',
        description: 'Architected enterprise-grade incident response platform handling 1,000 concurrent webhook requests with <500ms latency using Java 17, Spring Boot 3.2, Spring Data JPA, and PostgreSQL with zero downtime deployment',
        longDescription: 'Enterprise-grade incident response platform with AI-powered prediction engine, automated remediation, and comprehensive monitoring.',
        techStack: ['Java 17', 'Spring Boot 3.2', 'Spring Data JPA', 'Hibernate', 'PostgreSQL', 'OAuth2', 'Docker', 'Kubernetes', 'Maven'],
        achievements: [
            'Implemented 5-module microservices architecture with OAuth2-secured Webhook Handler and HMAC-SHA256 signature verification',
            'Built ML Prediction Engine with 85% accuracy target',
            'Integrated Zoho Cliq with rich message cards',
            'Created Automated Remediation Executor with 5-layer safety checks',
            'Comprehensive Error Handling Framework with request tracing',
        ],
        technicalDetails: [
            '50+ Java classes, 4,000+ lines of code',
            'Docker containerization and Kubernetes deployment',
            'Prometheus monitoring integration',
            'JUnit 5 testing framework',
            'Complete Swagger/OpenAPI documentation',
        ],
        metrics: [
            { label: 'Concurrent Requests', value: '1,000+' },
            { label: 'Response Latency', value: '<500ms' },
            { label: 'Uptime', value: '100%' },
            { label: 'Accuracy', value: '85%' },
        ],
        links: {
            github: 'https://github.com/shriram1206/cliq-guarder',
            live: '#',
        },
        image: '/projects/cliq-guarder.png',
        date: 'December 2024',
    },
    {
        id: 'asta-25',
        title: "ASTA'25 – National Symposium Event Assistant Chatbot",
        description: "Full-stack application serving 500+ participants at Selvam College of Technology's national symposium with intelligent intent recognition and real-time event management",
        longDescription: 'Intelligent chatbot with intent recognition engine and real-time event management for national symposium.',
        techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GitHub Actions'],
        achievements: [
            'Intent recognition engine with 20+ automated FAQ responses',
            'Real-time event/results management system',
            'Responsive UI with dark mode support',
            'Real-time data synchronization',
            'Automated CI/CD pipeline using GitHub Actions',
            'Reduced event coordinator workload by 60% through instant query resolution',
        ],
        technicalDetails: [
            'Built with Next.js and TypeScript',
            'Real-time updates with optimistic UI',
            'Fully responsive design',
            'Automated deployment pipeline',
        ],
        metrics: [
            { label: 'Active Users', value: '500+' },
            { label: 'Satisfaction', value: '95%' },
            { label: 'Workload Reduction', value: '60%' },
            { label: 'Response Time', value: 'Instant' },
        ],
        links: {
            live: 'https://asta25-chatbot.vercel.app/',
            github: 'https://github.com/shriram1206/asta25-chatbot',
        },
        image: '/projects/asta25.png',
        date: 'October 2024',
    },
    {
        id: 'multigate-eduflow',
        title: 'Multigate EduFlow Portal – Automated Leave Management System',
        description: 'Full-stack leave request management system serving 500+ users with 80% reduction in approval turnaround time (5 days → 24 hours)',
        longDescription: 'Automated leave management system with role-based access control and real-time notifications.',
        techStack: ['React', 'Node.js', 'Express', 'MySQL', 'JWT Authentication'],
        achievements: [
            'Architected secure 3-tier workflow with role-based access control',
            'JWT authentication and authorization',
            'Real-time notifications system',
            'Optimized MySQL queries for 500+ concurrent users',
            'Comprehensive error handling',
            'Seamless integration with institutional systems',
        ],
        technicalDetails: [
            'Full-stack MERN architecture',
            'MySQL database with optimized queries',
            'JWT-based authentication',
            'Role-based authorization',
        ],
        metrics: [
            { label: 'Active Users', value: '500+' },
            { label: 'Satisfaction', value: '95%' },
            { label: 'Faster Approvals', value: '80%' },
            { label: 'Turnaround Time', value: '24hrs' },
        ],
        links: {
            github: '#',
            demo: '#',
        },
        image: '/projects/eduflow.png',
        date: 'September 2024',
    },
    {
        id: 'personal-ai',
        title: 'Personal AI – Conversational AI Chatbot with Multi-User Authentication',
        description: 'Full-stack AI-powered chatbot with multi-user authentication, admin approval system, and personality-based conversational AI deployed on Render',
        longDescription: 'Privacy-first conversational AI system with JWT authentication, role-based access control, and Perplexity API integration for intelligent responses.',
        techStack: ['Python', 'FastAPI', 'Perplexity API', 'SQLAlchemy', 'JWT', 'SQLite', 'HTML/CSS', 'JavaScript', 'Render'],
        achievements: [
            'Built multi-user authentication system with JWT tokens and Argon2 password hashing',
            'Implemented admin dashboard with user approval workflow (pending/approved/rejected)',
            'Integrated Perplexity AI API for intelligent conversational responses',
            'Designed clean, responsive ChatGPT-style UI with conversation history management',
            'Deployed on Render with environment-based configuration for production',
            'Created personality-driven AI with customizable system prompts via JSON configuration',
        ],
        technicalDetails: [
            'FastAPI backend with SQLAlchemy ORM',
            'JWT-based session management',
            'Role-based authorization (admin/user)',
            'SQLite database with User, Conversation, and Message models',
            'Clean frontend with vanilla JavaScript',
        ],
        metrics: [
            { label: 'Authentication', value: 'JWT' },
            { label: 'Deployment', value: 'Render' },
            { label: 'Security', value: 'Argon2' },
            { label: 'API', value: 'Perplexity' },
        ],
        links: {
            github: 'https://github.com/shriram1206/personal-ai',
            live: 'https://shriram-v5of.onrender.com/chat',
        },
        image: '/projects/personal-ai.png',
        date: 'January 2025',
    },
];

export const experiences: Experience[] = [
    {
        id: 'ybi-foundation',
        position: 'AI/ML Intern',
        company: 'YBI Foundation (Remote)',
        duration: 'Jan 2025 – Feb 2025',
        achievements: [
            'Built and evaluated three ML models (Random Forest, SVM, neural network) achieving up to 89% validation accuracy on 10,000+ data points',
            'Implemented automated data cleaning and feature engineering pipelines using pandas/scikit-learn, reducing manual effort by 70%',
            'Documented comprehensive experiments, metrics, and reproducible pipelines with emphasis on validation methodology',
        ],
        type: 'internship',
    },
    {
        id: 'edunet-foundation',
        position: 'Technology Development Intern',
        company: 'EduNet Foundation',
        duration: 'Jul 2025 – Aug 2025',
        achievements: [
            'Contributed bug fixes and new features across SDLC phases, improving system stability by 25% through tighter validation and comprehensive regression testing',
            'Actively participated in code reviews, Agile ceremonies, and delivered weekly demos with clear documentation',
            'Gained hands-on experience with professional development workflows, version control best practices, and collaborative team dynamics',
        ],
        type: 'internship',
    },
];

export const skills: Skill[] = [
    {
        category: 'Programming Languages',
        skills: [
            { name: 'Java' },
            { name: 'Python' },
            { name: 'JavaScript' },
            { name: 'TypeScript' },
        ],
    },
    {
        category: 'Backend Technologies',
        skills: [
            { name: 'Spring Boot' },
            { name: 'Spring Data JPA' },
            { name: 'Hibernate' },
            { name: 'Spring Security' },
            { name: 'Node.js' },
            { name: 'Express' },
            { name: 'REST APIs' },
        ],
    },
    {
        category: 'Frontend Technologies',
        skills: [
            { name: 'React.js' },
            { name: 'Next.js' },
            { name: 'TypeScript' },
            { name: 'Tailwind CSS' },
            { name: 'HTML5/CSS3' },
        ],
    },
    {
        category: 'Databases',
        skills: [
            { name: 'PostgreSQL' },
            { name: 'MySQL' },
            { name: 'MongoDB' },
        ],
    },
    {
        category: 'DevOps & Tools',
        skills: [
            { name: 'Docker' },
            { name: 'Kubernetes' },
            { name: 'Git/GitHub' },
            { name: 'CI/CD' },
            { name: 'Maven' },
        ],
    },
];

export const certifications: Certification[] = [
    {
        name: 'Cloud Computing',
        issuer: 'NPTEL Elite',
        date: 'September 2024',
    },
    {
        name: 'Agile Development',
        issuer: 'Infosys Springboard',
        date: 'August 2024',
    },
    {
        name: 'Cybersecurity Virtual Experience',
        issuer: 'TATA via Forage',
        date: 'July 2024',
    },
    {
        name: 'TCS ION Young Professional',
        issuer: 'TCS',
        date: 'June 2024',
    },
];

export const education: Education[] = [
    {
        institution: 'Selvam College of Technology',
        degree: 'Bachelor of Engineering in Computer Science and Engineering',
        duration: '2022 – 2026 (Expected: May 2026)',
        grade: '8.0/10.0 (80%)',
        coursework: [
            'Data Structures & Algorithms',
            'Object-Oriented Programming',
            'Database Management Systems',
            'Artificial Intelligence',
            'Software Engineering',
            'Web Technologies',
        ],
    },
    {
        institution: 'Kandasamy Kandar School',
        degree: 'Higher Secondary Certificate (12th Grade)',
        duration: '2020 – 2022',
        grade: '65%',
    },
];

export const interests = [
    'Enterprise Microservices Architecture',
    'AI-Powered Systems & Automation',
    'Scientific Computing & Research Tech',
    'DevOps & Infrastructure Automation',
    'Open Source Contributions',
    'Badminton',
];
