import { Project, CertificationItem, SkillCategory } from './type';

import profileImg from './assets/profile.png';
import vsbecTaskManagerImg from './assets/vsbec-task-manager.png';
import campusConnectImg from './assets/campusconnect.jpeg';
import auraImg from './assets/aura.png';
import chatboxImg from './assets/chatbox.png';
import smartHelmetImg from './assets/smart-helmet.png';

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
    title: 'Infosys Internship Completion Certificate',
    issuer: 'Infosys Springboard',
    year: '2024',
    link: 'https://drive.google.com/file/d/1Q9M6APOGYKO0_jYrKBAO4fAwTFEZJigy/view?usp=drive_link',
    type: 'CERTIFICATE'
  },
  {
    title: 'Tata - GenAI Powered Data Analytics Job Simulation',
    issuer: 'Forage',
    year: 'Jun 2025',
    link: 'https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_RxeDd9TgPqW92wdDx_1750820862922_completion_certificate.pdf',
    type: 'CERTIFICATE'
  },
  {
    title: 'Dynamic Programming Camp Participation Certificate',
    issuer: 'AlgoUniversity',
    year: 'May 2026',
    link: 'https://d3uam8jk4sa4y4.cloudfront.net/static/certificates/Dynamic_Programming_camp/tharunkumar-k.png',
    type: 'CERTIFICATE'
  },
  {
    title: 'TCS iON Career Edge — Young Professional',
    issuer: 'TCS iON',
    year: '2025',
    link: '#',
    type: 'CERTIFICATE'
  },
  {
    title: 'Responsible AI: Applying AI Principles with Google Cloud',
    issuer: 'Google Cloud',
    year: 'Aug 2025',
    link: 'https://www.skills.google/public_profiles/180f5b3d-e9b7-448b-8a76-0347666076bb/badges/17907581?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    type: 'BADGE'
  },
  {
    title: 'Prompt Design in Agent Platform',
    issuer: 'Google',
    year: 'Jun 2025',
    link: 'https://www.skills.google/public_profiles/180f5b3d-e9b7-448b-8a76-0347666076bb/badges/16663518?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    type: 'BADGE'
  },
  {
    title: 'Introduction to Large Language Models',
    issuer: 'Google',
    year: 'Aug 2025',
    link: 'https://www.skills.google/public_profiles/180f5b3d-e9b7-448b-8a76-0347666076bb/badges/17907465?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    type: 'BADGE'
  },
  {
    title: 'Prompt Design in Vertex AI Skill Badge',
    issuer: 'Google',
    year: 'Jun 2025',
    link: 'https://www.skills.google/public_profiles/180f5b3d-e9b7-448b-8a76-0347666076bb',
    type: 'BADGE'
  },
  {
    title: 'Introduction to IoT',
    issuer: 'Cisco',
    year: 'Nov 2025',
    link: 'https://www.credly.com/badges/e0e38f42-909d-46a0-8a23-4cbb658ceb2b/linked_in_profile',
    type: 'BADGE'
  },
  {
    title: 'Salesforce Administrator Explorer',
    issuer: 'Trailhead by Salesforce',
    year: 'Aug 2025',
    link: 'https://drive.google.com/file/d/1IgkTkYQ-dfhashY-7-R6soyY7YQhw4zI/view?usp=drive_link',
    type: 'BADGE'
  },
  {
    title: 'Introduction to IoT and Digital Transformation',
    issuer: 'Certification',
    year: '2024',
    link: '#',
    type: 'CERTIFICATE'
  }
];

export const PORTFOLIO_STATS = {
  projectsCount: 5,
  certificationsCount: 15,
  leetcodeCount: 450,
  githubContributions: 200,
  hackathonsCount: 3,
};

export const PROJECTS: Project[] = [
  {
    title: 'VSBEC Academic Task Manager',
    description:
      'Role-based academic task management platform for centralized task collection, proof submission, verification, and class-level data management.',
    longDescription:
      'The VSBEC Academic Task Manager is a centralized academic workflow platform engineered to modernize manual task collection, proof submission, and verification processes.\n\nThe system enables administrators and academic staff to create and assign tasks to specific classes, collect student screenshot/proof submissions, and process verified work through a multi-tier role-based access control architecture (Supreme Admin, HOD, Class Advisor, Student Coordinator, and Student).\n\nBuilt as a full-stack web application with React.js, TypeScript, Express.js, PostgreSQL, and Cloudinary, it enforces multi-tenant class and department data isolation with IDOR protection.\n\nThe platform is now actively deployed and implemented in the department to manage real-world academic task collection and verification.',
    date: 'Production Deployed',
    link: 'https://it-taskmanager.onrender.com/',
    githubLink: 'https://github.com/Tharun4743/IT_taskmanager',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'Cloudinary', 'Render'],
    category: 'fullstack',
    status: 'Production Deployed',
    realWorldImplementation:
      'Currently implemented and being used in the department to centrally collect and manage academic task details.',
    image: vsbecTaskManagerImg,
    problem:
      'Academic task details are often collected through scattered communication channels, manual submissions, and disconnected verification processes. This makes tracking, managing, and verifying student task completion difficult.',
    solution:
      'The VSBEC Academic Task Manager provides a centralized platform where authorized academic staff can create and manage tasks, students can submit proof of completion, and coordinators/advisors can review and verify submissions using role-based access control.',
    features: [
      'Role-based access control',
      'Supreme Admin global platform management',
      'HOD department-level management',
      'Class Advisor class-level management',
      'Student Coordinator class-specific task and review operations',
      'Student-specific task dashboard',
      'HOD task creation with class selection',
      'Class-based task assignment',
      'Student screenshot/proof submission',
      'Submission review and approval workflow',
      'Submission unlock workflow',
      'Department and class-level data isolation',
      'Secure backend API authorization',
      'IDOR protection',
      'PostgreSQL as the single source of truth',
      'Cloudinary image storage',
      'Environment-based production configuration',
      'Deployed on Render'
    ],
    roleStructure: [
      {
        role: 'Supreme Admin',
        description: 'Global platform, department, class, and user management.'
      },
      {
        role: 'HOD',
        description: 'Restricted to the assigned department and authorized department-level classes, staff, students, and tasks.'
      },
      {
        role: 'Class Advisor',
        description: 'Restricted to assigned class/classes with class information management, student management, coordinator assignment, and submission review.'
      },
      {
        role: 'Student Coordinator',
        description: 'Restricted to the assigned class for class-specific task posting, submission review, and permitted unlock actions.'
      },
      {
        role: 'Student',
        description: 'Access to own dashboard, authorized tasks, and screenshot/proof submission.'
      }
    ],
    architecture:
      'Decoupled React.js & TypeScript SPA frontend communicating via REST APIs with a Node.js & Express.js backend. Powered by PostgreSQL database as the single source of truth and Cloudinary for screenshot/proof media storage, deployed on Render with environment-based production configuration.',
    challenges:
      'Enforcing strict class and department-level multi-tenant data isolation while maintaining seamless access for multi-role staff (Supreme Admin down to Student Coordinators). Solved by engineering robust server-side authorization middleware, IDOR protection, and row-level relational isolation in PostgreSQL.',
    myRole: 'Full-Stack Architect & Lead Developer',
    impact:
      'Transformed academic task collection from fragmented manual workflows into a centralized digital platform with role-based access, class-level data isolation, and structured verification.\n\nThe platform is currently being implemented in the department for real-world academic task collection and management.',
    keyLearnings:
      'Engineered multi-tier RBAC workflows, implemented secure media submission pipelines with Cloudinary, and built production-grade REST APIs enforcing strict data isolation and IDOR protection.'
  },
  {
    title: 'Campus Connect — College Placement Cell Platform',
    description:
      'Premium, enterprise-grade placement management platform designed to automate TPO workflows, facilitate seamless recruiter engagement, and help students transition smoothly into their careers.',
    longDescription:
      'Campus Connect is an enterprise-grade college placement cell management platform designed to automate Training & Placement Officer (TPO) workflows and streamline recruitment operations.\n\nThe platform connects students, corporate recruiters, and placement officers into a unified digital ecosystem, facilitating automated job drive creation, multi-filter student screening, and interview scheduling.\n\nIt features an interactive Document Vault backed by Cloudinary for storing verified transcripts and resumes, alongside real-time application status tracking powered by WebSockets.\n\nBuilt with React, TypeScript, Node.js, Express, and Supabase PostgreSQL, Campus Connect eliminates manual placement record keeping and reduces interview scheduling friction.',
    date: 'June 2026',
    githubLink: 'https://github.com/Tharun4743/CampusConnect',
    link: 'https://campusconnect-yg4h.onrender.com/',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Supabase', 'Socket.IO'],
    category: 'fullstack',
    status: 'Production Deployed',
    image: campusConnectImg,
    problem:
      'College placement cells often struggle with manual record keeping, fragmented email communication with recruiters, delayed student application tracking, and lack of real-time visibility for Training & Placement Officers (TPOs).',
    solution:
      'Campus Connect centralizes the placement workflow into an enterprise platform featuring real-time application tracking, document vault storage, automated recruiter drive management, and verified TPO invite pipelines.',
    features: [
      'Interactive Document Vault for academic transcripts, resumes, and certificates backed by Cloudinary',
      'Real-Time Application Tracker with a step-by-step visual timeline tracking progress',
      'Profile Verification Pipeline and Invite Management for Training & Placement Officers',
      'Job Drive Creator, Multi-Filter Screening, and Interview Scheduler for HR & Recruiters',
      'Detailed Audit Logs, Moderation Desk, and Database Seeding utilities for Administrators'
    ],
    challenges:
      'Configuring proxy-aware rate limiting and enforcing Same-Origin CSRF Guard for state-modifying requests. Solved by implementing strict custom Helmet policies to selectively bypass headers for secure Google SSO.',
    architecture:
      'Decoupled React SPA frontend and RESTful Express.js API backend, sharing real-time event updates via WebSockets and utilizing Supabase PostgreSQL.',
    myRole: 'Lead Full Stack Developer',
    impact: 'Streamlined placement workflows for 500+ students, reducing manual data entry by 80% and decreasing interview scheduling conflicts to zero.',
    keyLearnings: 'Mastered WebSocket integration for real-time state synchronization and gained deep insights into secure document handling and RBAC (Role-Based Access Control) using Supabase.'
  },
  {
    title: "Techy Tharun's Chatbox — AI Assistant",
    description:
      'A high-performance, premium AI assistant powered by GPT-4o. Featuring a sleek, humanized interface and optimized for extreme speed and near-zero latency streaming.',
    longDescription:
      "Techy Tharun's Chatbox is a high-performance, conversational AI assistant powered by OpenAI GPT-4o models, engineered for near-zero latency streaming and humanized digital interaction.\n\nThe platform offers multimodal capabilities, enabling users to upload and parse documents (PDF, DOCX, TXT), perform real-time voice transcription, and receive beautifully formatted markdown responses.\n\nArchitected with Next.js 15 App Router, TypeScript, Tailwind CSS, Prisma ORM, and Neon Serverless PostgreSQL, it achieves sub-200ms latency through parallelized backend operations.\n\nDesigned as a PWA with sleek glassmorphism aesthetics, it delivers an intuitive, empathetic chat experience tailored for high-speed technical workflows.",
    date: 'Feb 2026 - Apr 2026',
    githubLink: 'https://github.com/Tharun4743/Tharun-s-Chatbox',
    link: 'https://tharunchatbox.onrender.com',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Neon PostgreSQL', 'GPT-4o'],
    category: 'fullstack',
    status: 'Production Deployed',
    image: chatboxImg,
    problem:
      'Standard AI chat interfaces often suffer from high latency, clunky document uploads, lack of voice interaction, and robotic user experiences that fail to adapt to local network setups.',
    solution:
      "Techy Tharun's Chatbox leverages parallelized GPT-4o streaming APIs, Next.js 15 App Router, and a humanized glassmorphic UI supporting instant document parsing, voice commands, and sub-200ms response streaming.",
    features: [
      'Extreme Performance with parallelized backend operations for near-zero latency streaming',
      'Humanized UI featuring empathetic authentication flow and sleek glassmorphism design',
      'Advanced Tools supporting file attachments (PDF, Doc, TXT), voice input, and markdown rendering',
      'PWA-ready and optimized for local networks with personalized branding'
    ],
    challenges:
      'Handling response latency and message streaming connections. Solved by parallelizing backend operations and streaming tokens to achieve near-zero latency.',
    architecture:
      'Architected using Next.js 15 App Router and Turbopack, styled with Tailwind CSS and Framer Motion, authenticated via NextAuth.js v5 Beta, and powered by Prisma ORM with Neon Serverless PostgreSQL and OpenRouter (GPT-4o).',
    myRole: 'AI Engineer & Frontend Architect',
    impact: 'Achieved sub-200ms latency on AI streaming responses and created a seamless UX that mimics human-like interaction.',
    keyLearnings: 'Deeply understood the complexities of handling Server-Sent Events (SSE) for AI streaming and optimizing Next.js App Router for extreme performance.'
  },
  {
    title: 'Aura — AI Unified Retrieval Assistant',
    description:
      '100% Offline Multimodal Retrieval-Augmented Generation (RAG) System developed for resource-constrained environments. Features local document processing, multimodal vision indexing, and voice transcription.',
    longDescription:
      'Aura is a military-grade, 100% offline multimodal Retrieval-Augmented Generation (RAG) workstation built for sovereign, air-gapped enterprise and defense environments.\n\nThe platform enables local page-by-page document ingestion (PDF, plaintext), local visual indexing using Hugging Face CLIP embeddings, and offline speech-to-text transcription via Vosk and Whisper.\n\nIt integrates local Llama-3 models running on Ollama with ChromaDB vector storage, ensuring grounded, context-anchored chat generation without transmitting any data over external networks.\n\nWrapped in an Electron desktop shell packaging a Spring Boot Java backend, local JRE, and Python environment, Aura provides absolute data privacy and zero-latency local intelligence.',
    date: '2026',
    githubLink: 'https://github.com/Tharun4743/SIH25231',
    tags: ['React', 'Spring Boot', 'Java', 'SQLite', 'ChromaDB', 'Ollama', 'Electron'],
    category: 'fullstack',
    image: auraImg,
    problem:
      'Enterprise and defense environments requiring intelligent document and visual asset retrieval cannot rely on cloud-based LLM APIs due to strict data privacy, air-gapped network policies, and latency constraints.',
    solution:
      'Aura provides a 100% offline, sovereign multimodal RAG workstation packaged in an Electron shell, running local LLMs via Ollama, local CLIP vision embeddings, and offline STT for complete on-premises privacy.',
    features: [
      'Document Processing: Local page-by-page text extraction from PDF and plaintext documents via Apache PDFBox',
      'Multimodal Vision: Visual feature extraction and semantic indexing of local image materials using Hugging Face CLIP',
      'Voice Transcription: Vocal queries transcribed locally via Python speech-to-text translators (Whisper/Vosk)',
      'Grounded Retrieval (RAG): Integrates with local Llama-3 running on Ollama for context-anchored chat generation',
      'Glassmorphic Desktop Wrapper: Compiled as an Electron shell packaging the JRE, Python environment, and Spring Boot server into a one-click executable'
    ],
    challenges:
      'Orchestrating multiple local LLMs and vector databases in a fully air-gapped desktop environment without relying on external APIs. Solved by bundling a local JRE and Python environment into a self-contained Electron installer.',
    architecture:
      'Decoupled React SPA frontend and RESTful Spring Boot Java API backend, sharing real-time event updates via WebSockets, all wrapped in an Electron desktop shell.',
    myRole: 'Core Systems Developer',
    impact: 'Enabled completely air-gapped, privacy-preserving document and vision querying, making it suitable for secure enterprise and military deployment environments.',
    keyLearnings: 'Learned to orchestrate local LLMs and vector databases within an Electron desktop shell and optimized Java Spring Boot for local low-memory environments.'
  },
  {
    title: 'Smart Helmet IoT Safety System',
    description:
      'An intelligent IoT helmet system that proactively prevents accidents by monitoring helmet wear, alcohol levels, and drowsiness — disabling bike ignition on unsafe conditions via RF communication. Smart India Hackathon 2025 Submission.',
    longDescription:
      'The Smart Helmet IoT Safety System is an embedded rider safety platform engineered to proactively eliminate motorcycle casualties through real-time hardware sensing and ignition interlocking.\n\nDeveloped for Smart India Hackathon 2025, the system links a sensor-equipped helmet with a motorcycle ignition receiver circuit via low-latency RF 433MHz wireless communication.\n\nIt continuously monitors helmet wearing compliance (IR proximity sensor), rider alcohol levels (MQ-3 sensor), and driver drowsiness (eye-blink patterns), automatically cutting bike ignition within 500ms under unsafe conditions.\n\nBuilt with Arduino microcontrollers, C programming, relays, and an I²C LCD status display, it incorporates a 5-second RF fail-safe signal protection for real-world environmental reliability.',
    date: 'Sep 2025 - Oct 2025',
    githubLink: 'https://github.com/Tharun4743/AGILE-INNOVATORS-smart-helmet-',
    driveLink: 'https://drive.google.com/drive/folders/1kYhyoOx9-Tr4WyOJkmUz7K4PDDpmaHEr?usp=drive_link',
    tags: ['Arduino', 'C', 'RF 433MHz', 'IoT', 'Embedded Systems'],
    category: 'iot',
    image: smartHelmetImg,
    problem:
      'Two-wheeler accidents frequently lead to severe casualties due to helmet non-compliance, DUI (driving under the influence), and unmonitored rider drowsiness.',
    solution:
      'The Smart Helmet IoT Safety System links rider sensors (IR proximity, MQ-3 alcohol, eye-blink drowsiness) via RF 433MHz to an ignition-interlock circuit that automatically blocks bike ignition under unsafe conditions.',
    features: [
      'Helmet Detection: Ensures rider wears the helmet before starting via IR/Proximity sensor',
      'Alcohol Detection: MQ-3 sensor detects alcohol presence and blocks ignition',
      'Drowsiness Detection: Monitors eye blink patterns and triggers buzzer on drowsiness',
      'Failsafe Mode: Auto-disables ignition if no RF data is received for 5 seconds'
    ],
    challenges:
      'Ensuring reliable real-time communication between the helmet transmitter and bike receiver. Solved by utilizing RF 433MHz to send sensor data every 100ms with a failsafe mode for signal loss.',
    architecture:
      'Dual-unit embedded system utilizing Arduino microcontrollers, RF transmitters/receivers, relays, and an I²C LCD display for real-time status.',
    myRole: 'IoT & Embedded Systems Engineer',
    impact: 'Developed a prototype capable of reacting in under 500ms to dangerous rider states, potentially preventing life-threatening accidents.',
    keyLearnings: 'Navigated hardware constraints to establish reliable RF communication and improved sensor calibration techniques for real-world environmental noise.'
  }
];

export const LEADERSHIP = [
  {
    title: 'Fullstack Development Intern',
    organization: 'Neura Global (Startup)',
    period: 'June 2026 - Present',
    description:
      'Developing and optimizing full-stack features using React, Node.js, and TypeScript. Collaborating with cross-functional teams to build responsive user interfaces and robust backend APIs in a fast-paced startup environment.'
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
    title: 'Hackathon Winner',
    organization: 'Code Thugs 2k26',
    year: '2026',
    type: 'ACHIEVEMENT',
    description:
      'Secured 1st place nationally for a Real-Time Collaborative Code Editor with multi-user synchronization and conflict resolution. Recognized for innovative system design. Prize: ₹5,000 cash award.'
  },
  {
    title: 'Smart India Hackathon 2025 — Internal Hackathon Top 50',
    organization: 'SIH 2025',
    year: '2025',
    type: 'RECOGNITION',
    description:
      'Selected in the top 50 out of 300+ submissions during the SIH internal hackathon phase. Led the full-stack development for an IoT-based rider safety system.'
  },
  {
    title: 'India Innovates 2026 — Finals Track',
    organization: 'India Innovates',
    year: '2026',
    type: 'RECOGNITION',
    description:
      'Advanced to the finals track after two rigorous selection rounds. Demonstrated capability to develop production-grade, scalable solutions.'
  },
  {
    title: 'GeeksforGeeks Campus Mantri',
    organization: 'GeeksforGeeks',
    year: '2026',
    type: 'LEADERSHIP',
    description:
      'Served as Student Ambassador from January 2026 to July 2026. Organized tech workshops and events to build a strong coding culture on campus.'
  },
  {
    title: 'Fun Quest Event Coordination',
    organization: 'Symposium Event',
    year: '2026',
    type: 'LEADERSHIP',
    description:
      'Led technical coordination and execution of a non-technical symposium event. Managed 150+ participants across two slots. Achieved 9.8 / 10 average participant feedback rating.'
  }
];
