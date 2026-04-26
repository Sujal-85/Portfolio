// Mock data for Sujal Khedekar's portfolio
// NOTE: testimonials are MOCKED placeholders — replace with real client quotes when available.

export const personal = {
  name: 'Sujal Khedekar',
  initials: 'SK',
  roles: [
    'Full Stack Developer',
    'Flutter Engineer',
    'AI Integration Specialist',
    'Freelance Developer'
  ],
  email: 'khedekarsujay720@gmail.com',
  phone: '+91 9359742537',
  location: 'Ratnagiri, India',
  linkedin: 'https://linkedin.com/in/sujal-khedekar',
  github: 'https://github.com/sujalkhedekar',
  leetcode: 'https://leetcode.com/sujalkhedekar',
  resumeUrl: '#',
  profileImage: 'https://res.cloudinary.com/duwxtqbkh/image/upload/v1777229479/Gemini_Generated_Image_xyg8cwxyg8cwxyg8_1_fdrotz.png',
  bio: "Final-year B.E. student at Finolex Academy of Management & Technology (CGPA 9.3). I build scalable, AI-driven web and mobile products. Across 3 internships and freelance work I've shipped Next.js dashboards, production Flutter apps, and cloud-native testing platforms."
};

export const stats = [
  { label: 'Internships', value: 3, suffix: '+' },
  { label: 'Projects Shipped', value: 10, suffix: '+' },
  { label: 'CGPA', value: 9.3, suffix: '/10', decimals: 1 },
  { label: 'Happy Clients', value: 8, suffix: '+' }
];

const DEVICON = (slug, variant = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-${variant}.svg`;

export const skills = {
  Frontend: [
    { name: 'React.js', level: 92, icon: DEVICON('react') },
    { name: 'Next.js', level: 90, icon: DEVICON('nextjs', 'original'), invert: true },
    { name: 'TypeScript', level: 85, icon: DEVICON('typescript') },
    { name: 'TailwindCSS', level: 95, icon: DEVICON('tailwindcss') },
    { name: 'JavaScript', level: 92, icon: DEVICON('javascript') },
    { name: 'HTML5', level: 96, icon: DEVICON('html5') },
    { name: 'CSS3', level: 92, icon: DEVICON('css3') }
  ],
  Backend: [
    { name: 'Node.js', level: 90, icon: DEVICON('nodejs') },
    { name: 'Express.js', level: 88, icon: DEVICON('express'), invert: true },
    { name: 'Python', level: 80, icon: DEVICON('python') }
  ],
  Mobile: [
    { name: 'Flutter', level: 92, icon: DEVICON('flutter') },
    { name: 'Dart', level: 90, icon: DEVICON('dart') }
  ],
  Database: [
    { name: 'MongoDB', level: 88, icon: DEVICON('mongodb') },
    { name: 'MySQL', level: 82, icon: DEVICON('mysql') },
    { name: 'Firebase', level: 90, icon: DEVICON('firebase', 'plain') }
  ],
  Cloud: [
    { name: 'AWS', level: 80, icon: DEVICON('amazonwebservices', 'original-wordmark'), invert: true },
    { name: 'Google Cloud', level: 78, icon: DEVICON('googlecloud') },
    { name: 'Docker', level: 82, icon: DEVICON('docker') }
  ],
  Tools: [
    { name: 'Git', level: 92, icon: DEVICON('git') },
    { name: 'GitHub', level: 90, icon: DEVICON('github'), invert: true },
    { name: 'Figma', level: 80, icon: DEVICON('figma') },
    { name: 'n8n', level: 85, icon: 'https://cdn.simpleicons.org/n8n/EA4B71' },
    { name: 'GSAP', level: 78, icon: 'https://cdn.simpleicons.org/greensock/88CE02' }
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

export const projectCategories = ['All', 'Full Stack', 'Mobile App', 'Automation', 'Website'];

export const projects = [
  {
    name: 'Prasanna Caterers App',
    category: 'Mobile App',
    tag: 'Sponsored',
    year: '2025',
    cover: 'https://images.unsplash.com/photo-1767449441925-737379bc2c4d?w=1200&q=80&auto=format&fit=crop',
    stack: ['Flutter', 'Firebase', 'MongoDB', 'Cloud Functions', 'UPI'],
    desc: 'Full-stack mobile app digitizing college mess operations — meal booking, leave requests, billing, and admin analytics with real-time notifications.',
    impact: 'Reduced manual workload by 60%',
    demo: '#',
    github: '#'
  },
  {
    name: 'Ratnagreen Techno Services',
    category: 'Automation',
    tag: 'Freelance',
    year: '2025',
    cover: 'https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?w=1200&q=80&auto=format&fit=crop',
    stack: ['Flutter', 'Firebase', 'n8n', 'WhatsApp API', 'Google Cloud'],
    desc: 'Digitized organic waste management with n8n-driven WhatsApp automation, production scheduling, and role-based access control.',
    impact: 'Eliminated manual follow-ups',
    demo: '#',
    github: '#'
  },
  {
    name: 'WebTestPro',
    category: 'Full Stack',
    tag: 'Platform',
    year: '2024',
    cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop',
    stack: ['React', 'Node.js', 'Python', 'Docker', 'AWS', 'GCP'],
    desc: 'Automated web testing platform with AI-generated reports, team management, and cloud deployment via ECS Fargate, CloudFront and S3.',
    impact: 'Real-time CI/CD orchestration',
    demo: '#',
    github: '#'
  },
  {
    name: 'FlowLink',
    category: 'Mobile App',
    tag: 'Major Project',
    year: '2025',
    cover: 'https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?w=1200&q=80&auto=format&fit=crop',
    stack: ['Flutter', 'Node.js', 'Socket.io', 'Firebase', 'JWT', 'GCP'],
    desc: 'Dual app platform (Customer + Retailer) with real-time inventory tracking via Socket.io, role-based JWT auth, and analytics.',
    impact: 'End-to-end supply chain digitization',
    demo: '#',
    github: '#'
  },
  {
    name: 'WhatsApp Order Automation',
    category: 'Automation',
    tag: 'Freelance',
    year: '2025',
    cover: 'https://images.unsplash.com/photo-1759752393975-7ca7b302fcc6?w=1200&q=80&auto=format&fit=crop',
    stack: ['n8n', 'WhatsApp Business API', 'Google Sheets', 'Webhooks'],
    desc: 'No-code workflow that auto-acknowledges orders, sends payment links, and updates Google Sheets when WhatsApp messages arrive.',
    impact: 'Saved 6+ hours/week of manual replies',
    demo: '#',
    github: '#'
  },
  {
    name: 'Personal Portfolio',
    category: 'Website',
    tag: 'Self',
    year: '2026',
    cover: 'https://images.unsplash.com/photo-1591381287254-b3349c60bf9b?w=1200&q=80&auto=format&fit=crop',
    stack: ['React', 'Tailwind', 'GSAP', 'Three.js'],
    desc: 'This very portfolio — a fully animated, responsive site built with React + Tailwind, featuring smooth GSAP transitions and clean dev aesthetics.',
    impact: 'Live & open source',
    demo: '#',
    github: '#'
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

// MOCKED testimonials — replace with real client quotes
export const testimonials = [
  {
    name: 'Rohit Patil',
    role: 'Founder, Ratnagreen Techno Services',
    avatar: 'https://ui-avatars.com/api/?name=Rohit+Patil&background=6C63FF&color=fff&bold=true&size=128',
    quote: 'Sujal automated our entire WhatsApp order workflow with n8n and built the Flutter app in record time. Communication is sharp and code is solid — will hire again.',
    rating: 5,
    project: 'Ratnagreen Techno Services'
  },
  {
    name: 'Prof. A. Joshi',
    role: 'Coordinator, Prasanna Caterers (College Mess)',
    avatar: 'https://ui-avatars.com/api/?name=A+Joshi&background=00D4FF&color=000&bold=true&size=128',
    quote: 'The mess app reduced our paperwork by half. Sujal handled everything end-to-end — design, Flutter app, admin panel, and UPI integration. Highly professional.',
    rating: 5,
    project: 'Prasanna Caterers App'
  },
  {
    name: 'Aditya M.',
    role: 'Engineering Lead, Arteo.ai',
    avatar: 'https://ui-avatars.com/api/?name=Aditya+M&background=10B981&color=fff&bold=true&size=128',
    quote: 'One of the most reliable interns we\u2019ve worked with. Shipped 20+ frontend components in Next.js + TS without breaking a sweat. Owns problems and finishes them.',
    rating: 5,
    project: 'Arteo.ai Frontend Revamp'
  },
  {
    name: 'Neha S.',
    role: 'Local Business Owner',
    avatar: 'https://ui-avatars.com/api/?name=Neha+S&background=F59E0B&color=000&bold=true&size=128',
    quote: 'Got my landing page in under a week. Clean design, fast loading, and Sujal even set up the WhatsApp inquiry automation. Worth every rupee.',
    rating: 5,
    project: 'Freelance Website + Automation'
  }
];

export const navLinks = [
  { label: 'About', href: '/#about', hash: '#about' },
  { label: 'Skills', href: '/#skills', hash: '#skills' },
  { label: 'Experience', href: '/#experience', hash: '#experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' }
];
