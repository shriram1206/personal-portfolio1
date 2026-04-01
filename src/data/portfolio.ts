import type { Project, Experience, Skill, Certification, Education } from '../types';

export const personalInfo = {
    name: 'Shriram M',
    title: 'Software Development Engineer',
    location: 'Namakkal, Tamil Nadu, India',
    phone: '+91 96008 35006',
    email: 'shriram.coder@gmail.com',
    linkedin: 'https://linkedin.com/in/shriram-m-sde',
    github: 'https://github.com/shriram1206',
    tagline: 'Building production-grade AI systems with Java, Spring Boot, Spring AI, and Next.js — RAG pipelines, MCP-based workflows, microservices at scale',
    description: "Final-year CS student (May 2026) building production-grade AI systems with Java, Spring Boot, Spring AI, and Next.js. Shipped a live SaaS product, implemented RAG pipelines and MCP-based agentic workflows, and delivered microservices handling 1,000+ concurrent requests. Passionate about applied AI research — bridging LLM capabilities with real-world engineering.",
    techStack: ['Java 17', 'Spring Boot', 'Spring AI', 'RAG', 'MCP', 'Next.js', 'React', 'Docker', 'Kubernetes', 'AI/ML'],
    graduation: 'Expected May 2026',
    cgpa: '77%',
};

export const projects: Project[] = [
    {
        id: 'feedbackwall',
        title: 'FeedbackWall — SaaS Feedback Management Platform',
        description: 'Solo-founded and shipped a public feedback management platform — Canny alternative with feature voting, changelog, email alerts, and embeddable widget',
        longDescription: 'Production-grade SaaS feedback management platform with multi-tenant architecture, real-time notifications, and embeddable feedback widgets for live beta users.',
        techStack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vercel', 'Tailwind CSS'],
        achievements: [
            'Solo-founded and shipped a Canny alternative with public feedback boards',
            'Implemented feature voting and changelog features',
            'Built email alert system for feature updates',
            'Created embeddable widget for seamless integration',
            'Live deployment at feedbackwall-mu.vercel.app with real beta users onboarded',
            'Designed multi-tenant Supabase architecture with row-level security',
            'Deployed on Vercel with full CI/CD pipeline',
        ],
        technicalDetails: [
            'Multi-tenant Supabase architecture',
            'Row-level security (RLS) for data isolation',
            'Full CI/CD pipeline with Vercel',
            'Real-time notifications system',
            'Embeddable widget technology',
        ],
        metrics: [
            { label: 'Status', value: 'Live Production' },
            { label: 'Beta Users', value: 'Active' },
            { label: 'Build Time', value: 'Solo' },
            { label: 'Platform', value: 'Vercel' },
        ],
        links: {
            live: 'https://feedbackwall-mu.vercel.app/',
            github: '#',
        },
        image: '/projects/feedbackwall.png',
        date: '2026',
        logo: 'feedbackwall',
    },
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
        description: "Backend application serving 500+ participants at Selvam College of Technology's national symposium with intelligent intent recognition and real-time event management",
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
        description: 'Backend leave request management system serving 500+ users with 80% reduction in approval turnaround time (5 days → 24 hours)',
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
            'Backend MERN architecture',
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
    {
        id: 'ai-agent-n8n',
        title: 'Personal AI Assistant – n8n Automation Workflow',
        description: 'Intelligent morning briefing system automating email categorization, task prioritization, and daily summaries using n8n, OpenAI GPT-4, and Telegram',
        longDescription: 'Automated workflow orchestration system for daily productivity enhancement with AI-powered email processing and intelligent task management.',
        techStack: ['n8n', 'OpenAI GPT-4', 'Gmail API', 'Telegram Bot', 'OAuth2', 'Webhooks', 'Cron Scheduler'],
        achievements: [
            'Built automated morning briefing system with scheduled triggers',
            'Integrated OpenAI GPT-4 for intelligent email categorization and prioritization',
            'Automated urgent communication detection with real-time Telegram notifications',
            'Implemented daily task suggestion engine based on email content analysis',
            'Configured OAuth2 authentication for secure Gmail API access',
            'Designed multi-node workflow with error handling and retry logic',
        ],
        technicalDetails: [
            'n8n workflow automation platform',
            'AI-powered email processing with GPT-4',
            'Scheduled executions via Cron triggers',
            'Telegram Bot integration for notifications',
            'Gmail API with OAuth2 security',
        ],
        metrics: [
            { label: 'Nodes Used', value: '10+' },
            { label: 'Daily Executions', value: 'Automated' },
            { label: 'AI Model', value: 'GPT-4' },
            { label: 'Time Saved', value: '30min/day' },
        ],
        links: {
            github: 'https://github.com/shriram1206/ai-agent-n8n',
            live: '#',
        },
        image: '/projects/ai-agent.png',
        date: 'January 2026',
    },
];

export const experiences: Experience[] = [
    {
        id: 'servimos-technologies',
        position: 'SDE Intern',
        company: 'Servimos Technologies Pvt Ltd (WeServeTech LLC)',
        duration: 'Feb 2026 – Mar 2026',
        achievements: [
            'Built AI Report Generator using Java 17 + Spring Boot + Spring AI 1.1.0 — connected LLMs to structured business data for automated, context-aware report generation',
            'Implemented RAG context injection via pgvector + PostgreSQL for semantic document retrieval; applied MCP (SSE transport, JSON-RPC tool calling) to automate recurring reporting pipelines',
            'Delivered end-to-end AI backend module in Agile sprint workflow with mentor reviews and full ownership',
        ],
        type: 'internship',
    },
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
        duration: 'Jul 2025',
        achievements: [
            'Contributed bug fixes and features across SDLC phases, improving system stability by ~25%',
            'Participated in Agile ceremonies and technical documentation',
            'Gained hands-on experience with professional development workflows and version control best practices',
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
            { name: 'Spring AI 1.1.0' },
            { name: 'Spring Data JPA' },
            { name: 'Hibernate' },
            { name: 'Spring Security' },
            { name: 'Node.js' },
            { name: 'Express' },
            { name: 'REST APIs' },
            { name: 'OAuth2' },
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
        category: 'Databases & AI',
        skills: [
            { name: 'PostgreSQL' },
            { name: 'pgvector' },
            { name: 'MySQL' },
            { name: 'MongoDB' },
            { name: 'RAG (Retrieval Augmented Generation)' },
            { name: 'MCP (Model Context Protocol)' },
        ],
    },
    {
        category: 'DevOps & Tools',
        skills: [
            { name: 'GitHub Actions' },
            { name: 'CI/CD' },
            { name: 'Maven' },
        ],
    },
    {
        category: 'AI/ML & Cloud',
        skills: [
            { name: 'OpenAI GPT-4o' },
            { name: 'Prompt Engineering' },
            { name: 'AWS' },
            { name: 'Vercel' },
            { name: 'Supabase' },
            { name: 'Postmarnetes' },
            { name: 'Git/GitHub' },
            { name: 'CI/CD' },
            { name: 'Maven' },
        ],
    },
];

export const certifications: Certification[] = [
    {
        name: 'Introduction to Model Context Protocol',
        issuer: 'Anthropic',
        date: '2026',
    },
    {
        name: 'Software & Agile Development',
        issuer: 'Infosys Springboard',
        date: '2024',
    },
    {
        name: 'Cloud Computing',
        issuer: 'NPTEL',
        date: '2024',
    },
];

export const education: Education[] = [
    {
        institution: 'Selvam College of Technology',
        degree: 'Bachelor of Engineering in Computer Science and Engineering',
        duration: '2022 – May 2026 (Expected)',
        grade: 'CGPA: 77%',
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
