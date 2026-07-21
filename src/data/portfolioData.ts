export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  description: string;
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  details?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  period: string;
  credentialId?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: 'All' | 'Mobile Apps' | 'Web Systems' | 'Full Stack';
  language: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  imageAlt: string;
  imageUrl: string;
}

export const portfolioData = {
  personal: {
    name: 'Mohammed Fuad Al_Sanhani',
    brandName: 'MOHAMMED_DEV',
    title: 'Software Developer & Enterprise Solution Architect',
    email: 'mohammedalsanhani2@gmail.com',
    phone: '+967 770-180-062',
    location: 'Zubairy St., Sana\'a, Yemen',
    linkedIn: 'https://www.linkedin.com/in/mohammed-al-sanhani-40217a331',
    gitHub: 'https://github.com/MohammedFu',
    status: 'Available for Developer & Lead Roles',
    summary:
      'Dedicated Software Developer with a strong background in developing custom enterprise applications. Skilled in system integration, application performance optimization, and database architecture. Proficient across Flutter, React Native, Go, TypeScript, PHP/Laravel, and SQL databases, with a passion for delivering high-impact, user-centric solutions.',
    stats: {
      projectsShipped: '15+',
      systemUptime: '99.9%',
      commitsMade: '1,000+',
      experienceYears: '4+ Years'
    }
  },

  skills: {
    languages: [
      'Flutter',
      'React Native',
      'Go',
      'TypeScript',
      'JavaScript',
      'Kotlin Native',
      'Java Native',
      'PHP',
      'Laravel',
      'Java',
      'C#',
      'C++',
      'MySQL',
      'PostgreSQL'
    ],
    categories: [
      {
        title: 'Mobile & Cross-Platform',
        icon: 'smartphone',
        description: 'Building native-grade mobile applications with Flutter, React Native, Kotlin & Java.',
        skills: ['Flutter', 'React Native', 'Kotlin', 'Java', 'Android SDK']
      },
      {
        title: 'Backend & Cloud Infrastructure',
        icon: 'dns',
        description: 'Architecting scalable APIs, push notification proxies, and microservices in Go, PHP & Node.',
        skills: ['Go', 'PHP / Laravel', 'Node.js', 'REST APIs', 'Server Admin']
      },
      {
        title: 'Enterprise Databases',
        icon: 'database',
        description: 'Designing normalized relational schemas and high-throughput query optimization.',
        skills: ['MySQL', 'PostgreSQL', 'Database Design', 'Query Tuning']
      },
      {
        title: 'Modern Languages & Tooling',
        icon: 'terminal',
        description: 'Strictly typed engineering with TypeScript, C#, C++, Git, and CI/CD automation.',
        skills: ['TypeScript', 'JavaScript', 'C#', 'C++', 'Git / GitHub']
      }
    ],
    softSkills: [
      'Problem-Solving',
      'Interpersonal Skills',
      'Attention to Detail',
      'Communication',
      'Creativity',
      'Work Under Pressure',
      'Teamwork',
      'Leadership',
      'Work Ethic',
      'Adaptability',
      'Time Management'
    ],
    spokenLanguages: [
      { name: 'Arabic', level: 'Native' },
      { name: 'English', level: 'Proficient' }
    ]
  },

  experiences: [
    {
      id: 'exp-1',
      role: 'Mobile Developer & Project Manager',
      company: 'Sofa Company for Digital Solutions',
      location: 'Sana\'a, Yemen',
      period: 'April 2025 – Present',
      isCurrent: true,
      description:
        'Serving as Project Manager for an enterprise chatting app and Server Administrator for the notification push proxy infrastructure, ensuring high delivery throughput and 99.9% uptime.',
      technologies: ['Flutter', 'Go', 'Push Notification Proxy', 'Server Administration', 'Project Management']
    },
    {
      id: 'exp-2',
      role: 'IT Support Engineer',
      company: 'Ministry of Civil Services and Administrative Development',
      location: 'Sana\'a, Yemen',
      period: 'November 2024 – Present',
      isCurrent: true,
      description:
        'Providing administrative technical infrastructure support, network diagnostics, hardware maintenance, and database troubleshooting across government departments.',
      technologies: ['IT Infrastructure', 'Network Support', 'Database Troubleshooting', 'System Security']
    },
    {
      id: 'exp-3',
      role: 'LMS Implementer',
      company: 'International University of Technology Twintech',
      location: 'Sana\'a, Yemen',
      period: 'December 2024 – Present',
      isCurrent: true,
      description:
        'Leading the implementation, customization, and deployment of academic Learning Management System (LMS) modules for university faculty and student workflows.',
      technologies: ['LMS Customization', 'Database Management', 'PHP', 'System Integration', 'User Training']
    },
    {
      id: 'exp-4',
      role: 'BIT Trainee',
      company: 'Hael Saeed Anam Trading Company',
      location: 'Sana\'a, Yemen',
      period: 'February 2025 – Present',
      isCurrent: true,
      description:
        'Engaged in intensive Business Information Technology training focusing on enterprise resource planning (ERP), data analytics, and corporate software operations.',
      technologies: ['Enterprise Systems', 'Business Analytics', 'ERP Workflows', 'Process Optimization']
    },
    {
      id: 'exp-5',
      role: 'Optician & Sales Specialist',
      company: 'Lutf for Optics and Hearing Aids Company',
      location: 'Sana\'a, Yemen',
      period: 'January 2019 – December 2022',
      isCurrent: false,
      description:
        'Managed client relations, streamlined optical inventory tracking, and achieved top-tier customer satisfaction ratings through effective interpersonal communication.',
      technologies: ['Client Relations', 'Inventory Tracking', 'Customer Satisfaction', 'Sales Operations']
    }
  ] as ExperienceItem[],

  education: [
    {
      id: 'edu-1',
      degree: 'Bachelor’s Degree in Business Information Technology (BIT)',
      institution: 'International University of Technology Twintech',
      period: 'October 2021 – February 2025',
      grade: 'GPA: 3.26 / 4.00',
      details: 'Specialized in Software Engineering, Database Systems, Enterprise Architecture, and Business Analytics.'
    },
    {
      id: 'edu-2',
      degree: 'High School Certificate',
      institution: 'Al-Rowad School',
      period: 'March 2019 – August 2020',
      grade: 'GPA: 65.50%',
      details: 'Scientific Track with emphasis on Mathematics, Computer Basics, and Physical Sciences.'
    }
  ] as EducationItem[],

  certifications: [
    {
      id: 'cert-1',
      title: 'Information Technology Department Internship',
      issuer: 'SABAFON Telecommunications Company',
      period: 'Aug 2024 – Sept 2024',
      credentialId: 'SABAFON-IT-2024'
    },
    {
      id: 'cert-2',
      title: 'Business Management, HR, Customer Service & Advanced E-Marketing',
      issuer: 'Al-Hamdi Foundation',
      period: 'Dec 2023 – Jan 2024',
      credentialId: 'AHF-BM-884'
    },
    {
      id: 'cert-3',
      title: 'Training of Trainers (TOT)',
      issuer: 'Amargy Institute',
      period: 'Apr 2024 – May 2024',
      credentialId: 'TOT-AMARGY-2024'
    },
    {
      id: 'cert-4',
      title: 'Intermediate Diploma in ESL',
      issuer: 'SunWay Institute',
      period: 'Nov 2018 – Nov 2021',
      credentialId: 'SUNWAY-ESL-DIP'
    },
    {
      id: 'cert-5',
      title: 'First Aid Basics & Emergency Care',
      issuer: 'Ministry of Health & Yemen Red Crescent',
      period: '2016, 2019',
      credentialId: 'YRC-FA-CERT'
    }
  ] as CertificationItem[],

  projects: [
    {
      id: 'proj-1',
      title: 'LM-E-mart Mobile SaaS App',
      description:
        'Specialized mobile extension of the LM-E-mart Multi-Tenancy eCommerce SaaS platform. Built with Flutter, enabling individual vendors to launch dedicated storefronts with full inventory and checkout integration.',
      category: 'Mobile Apps',
      language: 'Dart / Flutter',
      technologies: ['Flutter', 'Dart', 'SaaS Multi-Tenancy', 'REST API', 'State Management'],
      githubUrl: 'https://github.com/MohammedFu/LM-E-mart-mobile-app',
      featured: true,
      imageAlt: 'SaaS multi-tenancy mobile storefront preview showing modern product layout and smooth dark mode styling',
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67daf40955?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'proj-2',
      title: 'University Quality Assurance Portal',
      description:
        'Comprehensive web management platform designed for academic institutions to monitor compliance, track faculty evaluation workflows, generate audit reports, and standardize quality benchmarks.',
      category: 'Web Systems',
      language: 'PHP / Laravel',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Quality Assurance', 'Role-Based Access'],
      githubUrl: 'https://github.com/MohammedFu',
      featured: true,
      imageAlt: 'Academic quality assurance web analytics dashboard with metrics, evaluation charts, and audit workflow status',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'proj-3',
      title: 'Event & Wedding Booking System',
      description:
        'All-in-one mobile booking platform connecting clients with event halls, luxury car rentals, professional photographers, and musical entertainers through an intuitive single interface.',
      category: 'Mobile Apps',
      language: 'Dart / Flutter',
      technologies: ['Flutter', 'Dart', 'Booking Engine', 'Payment Gateways', 'Provider Dashboard'],
      githubUrl: 'https://github.com/MohammedFu/event-booking-system',
      featured: true,
      imageAlt: 'Event and wedding multi-service booking mobile app interface displaying venue listings and photographer packages',
      imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'proj-4',
      title: 'LM Coffee Mobile & Web App',
      description:
        'Cross-platform mobile and web application for coffee shop ordering. Built with Expo and React Native, featuring interactive custom coffee builder and cart checkout.',
      category: 'Mobile Apps',
      language: 'TypeScript / React Native',
      technologies: ['React Native', 'Expo', 'TypeScript', 'Tailwind', 'AsyncStorage'],
      githubUrl: 'https://github.com/MohammedFu/LM-Coffee-Mobile-Web-Coffee-Shop',
      featured: false,
      imageAlt: 'LM Coffee mobile app UI displaying specialty brews, espresso customizations, and checkout modal',
      imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'proj-5',
      title: 'Designer Store Customizer',
      description:
        'Interactive web application empowering users to custom design, preview, and personalize dress styles, fabrics, and colors directly in their browser.',
      category: 'Web Systems',
      language: 'Vue.js / Web',
      technologies: ['Vue.js', 'JavaScript', 'HTML5 Canvas', 'CSS3 Animations'],
      githubUrl: 'https://github.com/MohammedFu/designer-store',
      featured: false,
      imageAlt: 'Interactive fashion dress designer web tool with color pickers and real-time apparel rendering',
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'proj-6',
      title: 'Expense Tracker Mobile App',
      description:
        'Sleek personal finance tracking application built with React Native for logging daily transactions, categorizing budgets, and visualizing weekly spending habits.',
      category: 'Mobile Apps',
      language: 'JavaScript / React Native',
      technologies: ['React Native', 'JavaScript', 'State Hooks', 'Chart Utilities'],
      githubUrl: 'https://github.com/MohammedFu/Expense_Tracker_App',
      featured: false,
      imageAlt: 'Expense tracker mobile app screen displaying category breakdown charts and transaction history',
      imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'proj-7',
      title: 'Cross-Platform CrudApp',
      description:
        'Clean architecture mobile application template leveraging React Native, Expo, and TypeScript to demonstrate high-performance data CRUD operations.',
      category: 'Full Stack',
      language: 'TypeScript',
      technologies: ['React Native', 'Expo', 'TypeScript', 'REST Client'],
      githubUrl: 'https://github.com/MohammedFu/CrudApp',
      featured: false,
      imageAlt: 'Cross-platform mobile CRUD app displaying structured lists and item edit modals',
      imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
    }
  ] as ProjectItem[]
};
