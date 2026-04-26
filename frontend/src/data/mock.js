// Mock data for Sujal Khedekar's portfolio
export const personal = {
  name: 'Sujal Khedekar',
  initials: 'SK',
  roles: [
    'Full Stack Developer',
    'Flutter Engineer',
    'AI Integration Specialist',
    'UI/UX Enthusiast'
  ],
  email: 'khedekarsujay720@gmail.com',
  phone: '+91 9359742537',
  location: 'Ratnagiri, India',
  linkedin: 'https://linkedin.com/in/sujal-khedekar',
  github: 'https://github.com/sujalkhedekar',
  leetcode: 'https://leetcode.com/sujalkhedekar',
  resumeUrl: '#',
  profileImage: 'https://res.cloudinary.com/duwxtqbkh/image/upload/v1777229479/Gemini_Generated_Image_xyg8cwxyg8cwxyg8_1_fdrotz.png',
  bio: "I'm a final-year B.E. student at Finolex Academy of Management & Technology with a 9.3 CGPA and a passion for building scalable, AI-driven web and mobile products. Across 3 internships I've shipped Next.js dashboards, Flutter apps, and cloud-native testing platforms — turning ideas into clean, performant interfaces and robust backends."
};

export const stats = [
  { label: 'Internships', value: 3, suffix: '+' },
  { label: 'Projects Shipped', value: 10, suffix: '+' },
  { label: 'CGPA', value: 9.3, suffix: '/10', decimals: 1 },
  { label: 'Years Experience', value: 2, suffix: '+' }
];

export const skills = {
  Frontend: [
    { name: 'React.js', level: 92 },
    { name: 'Next.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'TailwindCSS', level: 95 },
    { name: 'HTML5', level: 96 },
    { name: 'CSS3', level: 92 },
    { name: 'Shadcn UI', level: 88 }
  ],
  Backend: [
    { name: 'Node.js', level: 90 },
    { name: 'Express.js', level: 88 },
    { name: 'Python', level: 80 },
    { name: 'REST APIs', level: 90 }
  ],
  Mobile: [
    { name: 'Flutter', level: 92 },
    { name: 'Dart', level: 90 }
  ],
  Database: [
    { name: 'MongoDB', level: 88 },
    { name: 'MySQL', level: 82 },
    { name: 'Firebase', level: 90 },
    { name: 'Firestore', level: 88 }
  ],
  Cloud: [
    { name: 'AWS (ECS, S3, CloudFront)', level: 80 },
    { name: 'GCP (Pub/Sub, GCS)', level: 78 },
    { name: 'Docker', level: 82 }
  ],
  Tools: [
    { name: 'Git & GitHub', level: 92 },
    { name: 'Figma', level: 80 },
    { name: 'n8n', level: 85 },
    { name: 'ElevenLabs', level: 75 },
    { name: 'GSAP', level: 78 }
  ]
};

export const experience = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Aivalytics',
    period: 'Dec 2025 — Present',
    location: 'Remote',
    stack: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
    points: [
      'Building scalable full-stack modules, reducing feature deployment time by 40%.',
      'Integrating AI/ML APIs and cloud services to automate data workflows across internal dashboards.',
      'Collaborating cross-functionally to optimize backend architecture and AI-powered UX.'
    ]
  },
  {
    role: 'Software Engineer Intern',
    company: 'Arteo.ai · Thriftsense Technologies',
    period: 'Apr 2025 — Sep 2025',
    location: 'Bengaluru',
    stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Shadcn UI'],
    points: [
      'Revamped UI/UX of Arteo.ai — mobile responsiveness up 35%, bounce rate down 20%.',
      'Shipped 20+ dynamic frontend components, improving development efficiency by 30%.',
      'Integrated AI-based APIs and design systems for higher engagement and usability.'
    ]
  },
  {
    role: 'Web Developer Intern',
    company: 'Gadre Infotech Pvt. Ltd.',
    period: 'June 2024',
    location: 'Ratnagiri',
    stack: ['Node.js', 'MySQL', 'JavaScript', 'HTML/CSS'],
    points: [
      'Collaborated with a team of 6 to build a web platform, reducing server-side load time by 25%.',
      'Implemented 10+ interactive frontend features and local server environments — 40% faster testing.'
    ]
  }
];

export const projects = [
  {
    name: 'Prasanna Caterers App',
    tag: 'Sponsored Project',
    stack: ['Flutter', 'Firebase', 'MongoDB', 'Cloud Functions', 'UPI'],
    desc: 'Full-stack mobile app digitizing college mess operations — meal booking, leave requests, billing, and admin analytics with real-time notifications.',
    impact: 'Reduced manual workload by 60%',
    demo: '#',
    github: '#',
    accent: 'from-indigo-500/30 to-fuchsia-500/20'
  },
  {
    name: 'Ratnagreen Techno Services',
    tag: 'Freelance',
    stack: ['Flutter', 'Firebase', 'n8n', 'WhatsApp API', 'Google Cloud'],
    desc: 'Digitized organic waste management with automated WhatsApp acknowledgments, production scheduling, and role-based access control.',
    impact: 'Eliminated manual follow-ups',
    demo: '#',
    github: '#',
    accent: 'from-emerald-500/30 to-cyan-500/20'
  },
  {
    name: 'WebTestPro',
    tag: 'Full-Stack Platform',
    stack: ['React', 'Node.js', 'Python', 'Docker', 'AWS', 'GCP'],
    desc: 'Automated web testing platform with AI-generated reports, team management, and cloud deployment via ECS Fargate, CloudFront and S3.',
    impact: 'Real-time CI/CD orchestration',
    demo: '#',
    github: '#',
    accent: 'from-cyan-500/30 to-violet-500/20'
  },
  {
    name: 'FlowLink',
    tag: 'Sponsored Major Project',
    stack: ['Flutter', 'Node.js', 'Socket.io', 'Firebase', 'JWT', 'GCP'],
    desc: 'Dual app platform (Customer + Retailer) with real-time inventory tracking via Socket.io, role-based JWT auth, and analytics.',
    impact: 'End-to-end supply chain digitization',
    demo: '#',
    github: '#',
    accent: 'from-violet-500/30 to-rose-500/20'
  }
];

export const certifications = [
  { name: 'Google Analytics', issuer: 'Google', initials: 'G' },
  { name: 'GenAI Application for Developers', issuer: 'Coursera', initials: 'C' },
  { name: 'OpenAI ChatGPT Models', issuer: 'Infosys Springboard', initials: 'IS' },
  { name: 'React.js Learning Path', issuer: 'Infosys Springboard', initials: 'IS' },
  { name: 'Generative Models for Developers', issuer: 'Infosys Springboard', initials: 'IS' },
  { name: 'Data Analysis using Python', issuer: 'IBM SkillsBuild', initials: 'IBM' },
  { name: 'Getting Started with AI', issuer: 'IBM SkillsBuild', initials: 'IBM' }
];

export const achievements = [
  { title: 'Smart India Hackathon 2024 & 2025', desc: 'Selected in Internal Hackathon round both years.', icon: 'Trophy' },
  { title: '1st Prize — Project Exhibition', desc: 'IT Department, Finolex Academy (2024).', icon: 'Award' },
  { title: 'Ranked 1st in SSC Board Exam', desc: 'School-level academic excellence (94.2%).', icon: 'Medal' },
  { title: 'CGPA 9.3 / 10', desc: 'Finolex Academy of Management & Technology.', icon: 'GraduationCap' }
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certs' },
  { label: 'Contact', href: '#contact' }
];
