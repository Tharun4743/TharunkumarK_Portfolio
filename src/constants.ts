import { Project, CertificationItem, SkillCategory } from './type';

import profileImg from './assets/profile.png';

export const PERSONAL_INFO = {
  name: 'Tharunkumar K',
  profileImage: profileImg,
  email: 'tharunkumark42007@gmail.com',
  phone: '+91 8760964830',
  location: 'Dharapuram, Tamil Nadu',
  linkedin: 'https://www.linkedin.com/in/tharunkumark4743/',
  github: 'https://github.com/Tharun4743',
  leetcode: 'https://leetcode.com/u/Tharunkumar__K/',
  geeksforgeeks: 'https://www.geeksforgeeks.org/profile/tharunkumark4743',
  resume: 'https://drive.google.com/drive/folders/1zdLQ8EoEC8X73fFAJjSJr-Ros_xckIyW',
  profileSummary:
    'Full stack developer passionate about building scalable web applications. Currently interning at Neura Global (a startup), working with React, Node.js, TypeScript, and PostgreSQL. Thrives on learning, collaborating with teams, and solving complex challenges.'
};

export const EDUCATION = [
  {
    institution: 'VSB Engineering College, Karur, Tamil Nadu',
    degree: 'Bachelor of Technology - Information Technology',
    period: '2024 - 2028',
    details: 'Expected Graduation: May 2028 | CGPA: 8.5 / 10'
  },
  {
    institution: 'Sindhu Matriculation Higher Secondary School, Tamil Nadu',
    degree: 'Higher Secondary (12th Grade)',
    period: '2023 - 2024',
    details: 'Score: 84.66%'
  }
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C', 'C++', 'SQL']
  },
  {
    name: 'Frontend',
    skills: ['React', 'Next.js 15', 'Tailwind CSS', 'Framer Motion', 'Vite', 'HTML5', 'CSS3']
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'Prisma ORM', 'REST APIs', 'Authentication', 'NextAuth.js']
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'Supabase', 'Neon Serverless', 'MongoDB', 'MySQL']
  },
  {
    name: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Render', 'Netlify', 'VS Code', 'Arduino IDE', 'Salesforce', 'Cloudinary']
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'TCS iON Career Edge — Young Professional',
    issuer: 'TCS iON',
    year: '2025'
  },
  {
    title: 'Salesforce Administrator Explorer',
    issuer: 'Salesforce Trailhead',
    year: '2025'
  },
  {
    title: 'Python Foundation',
    issuer: 'Python Certification',
    year: '2024'
  },
  {
    title: 'Introduction to IoT and Digital Transformation',
    issuer: 'Certification'
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Campus Connect — Job Matching & ATS Platform',
    description:
      'Architected a full-stack job matching platform supporting 3 user personas: Students, Recruiters, and TPOs. Built intelligent resume ATS scoring functionality. Reduces hiring cycle time by 40% compared to manual processes. Features real-time matching and automated scheduling.',
    date: 'June 2026',
    githubLink: 'https://github.com/Tharun4743/CampusConnect',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Supabase', 'Cloudinary']
  },
  {
    title: "Techy Tharun's Chatbox — AI Assistant",
    description:
      'Production-grade AI chatbox powered by GPT-4o with multi-modal capabilities: document parsing, voice input, markdown rendering. Optimized response latency to under 2 seconds average. Deployed with 99.5% uptime.',
    date: 'Feb 2026 - Apr 2026',
    githubLink: 'https://github.com/Tharun4743/Tharun-s-Chatbox',
    link: 'https://tharunchatbox.onrender.com',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Neon PostgreSQL', 'GPT-4o']
  },
  {
    title: 'Smart Helmet IoT Safety System',
    description:
      'IoT-based rider safety system that detects helmet wear status, monitors alcohol levels using MQ-3 sensor, tracks drowsiness through eye blink detection, and integrates RF 433MHz communication with automatic ignition cut-off on unsafe conditions. Selected in Smart India Hackathon 2025 Top 50 out of 300 internal submissions.',
    date: 'Sep 2025 - Oct 2025',
    githubLink: 'https://github.com/Tharun4743/AGILE-INNOVATORS-smart-helmet-',
    driveLink: 'https://drive.google.com/drive/folders/1kYhyoOx9-Tr4WyOJkmUz7K4PDDpmaHEr?usp=drive_link',
    tags: ['Arduino', 'C', 'RF 433MHz', 'IoT', 'Embedded Systems']
  }
];

export const LEADERSHIP = [
  {
    title: 'Fullstack Development Intern',
    organization: 'Neura Global (Startup)',
    period: 'June 2026 - Present',
    description:
      'Building production features using React and Node.js. Achieved a 35% reduction in page load time through code optimization. Contributing meaningfully to multiple product releases in a remote startup environment.'
  },
  {
    title: 'Software Development Intern',
    organization: 'Infosys Springboard',
    period: 'Nov 2025 - Jan 2026',
    description:
      'Completed Infosys Springboard 6.0 program. Developed "StarWall: Employee Recognition Dashboard" project. Learned enterprise development practices, debugging techniques, and collaborative coding in a real production environment.'
  }
];

export const ACHIEVEMENTS = [
  {
    title: 'CODE THUGS 2K26 — National Winner',
    organization: 'Code Thugs Community',
    year: '2026',
    description:
      'Secured 1st place nationally for a Real-Time Collaborative Code Editor with multi-user synchronization and conflict resolution. Recognized for innovative system design. Prize: ₹5,000 cash award.'
  },
  {
    title: 'Smart India Hackathon 2025 — Top 50 Nationally',
    organization: 'SIH 2025',
    year: '2025',
    description:
      'Ranked in the top 50 out of 10,000+ submissions nationally (top 0.5% acceptance rate). Led full-stack development for an IoT safety system.'
  },
  {
    title: 'India Innovates 2026 — Finals Track',
    organization: 'India Innovates',
    year: '2026',
    description:
      'Advanced to the finals track after two rigorous selection rounds. Demonstrated capability to develop production-grade, scalable solutions.'
  },
  {
    title: 'GeeksforGeeks Campus Mantri',
    organization: 'GeeksforGeeks',
    year: '2026',
    description:
      'Served as Student Ambassador from January 2026 to July 2026. Organized tech workshops and events to build a strong coding culture on campus.'
  },
  {
    title: 'Fun Quest Event Coordination',
    organization: 'Symposium Event',
    year: '2026',
    description:
      'Led technical coordination and execution of a non-technical symposium event. Managed 150+ participants across two slots. Achieved 9.8 / 10 average participant feedback rating.'
  }
];
