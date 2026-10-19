// Single source of truth for the portfolio content.
// Keep in sync with the CV (public/cv.pdf) — update here, not in components.

import hotelImg from '../assets/projects/hotel-system.jpg';
import inventoryImg from '../assets/projects/inventory-system.jpg';
import chessImg from '../assets/projects/chess-game.jpg';

export const contact = {
    name: 'Kamal Elmaddini',
    title: 'Full-Stack Developer',
    subtitle: 'Digital Content Creator & E-Commerce',
    location: 'Rabat, Morocco',
    phone: '+212 638 964 606',
    email: 'kamalelmaddini@gmail.com',
    relocation: 'Open to opportunities in Europe',
    socials: {
        github: 'https://github.com/KamalElmaddini',
        linkedin: 'https://www.linkedin.com/in/kamal-elmaddini/',
        youtube: 'https://www.youtube.com/channel/UCM-FojP-rcOkbjOgafTPUvA',
        instagram: 'https://www.instagram.com/kamal_madini/',
        facebook: 'https://www.facebook.com/kamal.elmaddini/',
        x: 'https://x.com/Kamal_Elmaddini',
        whatsapp: 'https://wa.me/212638964606',
    },
};

export const heroText =
    'I build websites and web apps with React, Next.js and Laravel — and I grow audiences. Founder of Estore.ma (6,000+ customers) and creator of ElMdPlay, with 50M+ views across platforms.';

export const bio =
    'Full-stack web developer and digital content creator from Rabat, Morocco. I combine technical skills (React, Next.js, Laravel) with hands-on experience in content creation, social media and community building. I have supported an association hosting American students as a translator and taught drawing to children at school art exhibitions. Motivated to contribute to social projects through digital communication, intercultural exchange and work with young people.';

export const stats = [
    { value: '$10K+', label: 'Revenue generated' },
    { value: '6,000+', label: 'Customers served' },
    { value: '50M+', label: 'Views across platforms' },
    { value: '24K+', label: 'YouTube subscribers' },
];

export const languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'B2 · C1 listening & reading' },
    { name: 'French', level: 'B1 · C1 listening & reading' },
    { name: 'Spanish', level: 'A2 · B1 listening & reading' },
];

export const interests = ['Video production', 'Graphics & 3D design', 'Football', 'Gaming'];

export const experience = [
    {
        date: 'Nov 2024 — Present',
        role: 'Founder — Estore.ma',
        meta: 'Digital products & subscription platform · Self-employed',
        points: [
            'Built and run a digital products and subscription platform from scratch.',
            'Served 6,000+ customers and generated $10,000+ in revenue.',
            'Managed the full customer journey: acquisition, sales, retention and support.',
        ],
    },
    {
        date: 'Jul 2023 — Present',
        role: 'Freelance Full-Stack Developer',
        meta: 'Self-employed · Remote',
        points: [
            'Design and develop websites and web applications for clients (React.js, Laravel).',
            'Manage projects end-to-end: requirements, development, deployment and client communication.',
        ],
    },
    {
        date: 'Feb 2026 — Present',
        role: 'Content Creator — ElMdPlay',
        meta: 'YouTube · Instagram · TikTok',
        link: { label: 'YouTube channel', href: 'https://www.youtube.com/channel/UCM-FojP-rcOkbjOgafTPUvA' },
        points: [
            'Grew the YouTube channel to 24,000+ subscribers and 39M+ views.',
            '50M+ total views across platforms.',
            'Handle scripting, filming, editing and social media growth.',
        ],
    },
    {
        date: 'Jul 2024 — Jan 2025',
        role: 'Web & Application Development Intern — RITECHCO',
        meta: 'Tiflet, Morocco',
        points: ['Designed and developed websites and applications for clients.'],
    },
    {
        date: 'Mar 2022 — Sep 2022',
        role: 'Data Administrator — SNCE',
        meta: 'Ain Johra, Morocco',
        points: ['Managed employee and equipment records and data.'],
    },
];

export const volunteering = [
    {
        role: 'Translator — student exchange association',
        meta: 'Rabat',
        points: ['Supported an association hosting American students: translation and explaining Moroccan culture.'],
    },
    {
        role: 'Drawing workshops for children',
        meta: 'School art exhibitions',
        points: ['Taught drawing to young children at art exhibitions in schools.'],
    },
];

export const education = [
    {
        date: '2025 — 2026',
        role: 'Licence in Computer Engineering',
        meta: 'High-Tech · Rabat · EQF level 6',
    },
    {
        date: '2022 — 2024',
        role: 'Specialized Technician Diploma — Full-Stack Web Development',
        meta: 'ISTA — OFPPT · Rabat/Khemisset · EQF level 5',
    },
    {
        date: '2021 — 2022',
        role: 'Undergraduate studies in Material Sciences (1 year)',
        meta: 'Ibn Tofail University · Kenitra',
    },
    {
        date: '2017 — 2021',
        role: 'Baccalaureate in Physical Sciences',
        meta: 'Lycée Idriss Benzakri · Tiflet · EQF level 4',
    },
];

// Only skills backed by the CV or by public repos.
export const skills = [
    { category: 'Front-End', icon: 'layout', items: ['React.js', 'React Router', 'Next.js', 'JavaScript (ES6+)', 'HTML5 / CSS3 / Sass', 'Tailwind CSS'] },
    { category: 'Back-End', icon: 'server', items: ['Laravel / PHP', 'Spring Boot', 'Java EE (JSP, Servlet)', 'Node.js / Express', 'REST APIs'] },
    { category: 'Data & Tools', icon: 'database', items: ['MySQL', 'Supabase', 'Git / GitHub', 'Vite'] },
    { category: 'Digital Marketing & Content', icon: 'trending', items: ['Social media management', 'Content marketing strategy', 'Meta Ads & online ad campaigns', 'Video editing & production', 'E-marketing & e-commerce'] },
];

export const projects = [
    {
        title: 'Grandeur Hotel Management System',
        description: 'Microservices app for hotel operations: room inventory, multi-step reservation flow, guest directory, billing and an occupancy/revenue dashboard. JWT auth with role-based access.',
        tags: ['Spring Boot', 'Spring Cloud Gateway', 'React', 'JWT'],
        image: hotelImg,
        codeLink: 'https://github.com/KamalElmaddini/hotel-system',
    },
    {
        title: 'Inventory Management System',
        description: 'Product and stock tracking with Admin/Employee roles, dashboard charts and one-click PDF inventory reports.',
        tags: ['React', 'Node.js', 'Express', 'Tailwind CSS'],
        image: inventoryImg,
        demoLink: 'https://inventory-system-nine-zeta.vercel.app/',
        codeLink: 'https://github.com/KamalElmaddini/inventory-system',
    },
    {
        title: 'React Chess Game',
        description: 'Playable chess with full rules — castling, en passant, promotion — legal-move highlighting and check/checkmate/stalemate detection.',
        tags: ['React', 'JavaScript', 'Vite'],
        image: chessImg,
        demoLink: 'https://chess-game-silk.vercel.app/',
        codeLink: 'https://github.com/KamalElmaddini/chess-game',
    },
    {
        title: 'Happy Safar — Travel Agency',
        description: 'Travel agency website with destinations, offers and blog sections, scroll animations and a fully responsive layout.',
        tags: ['React', 'Vite', 'CSS3'],
        image: null,
        demoLink: 'https://jovial-melomakarona-2100da.netlify.app/',
        codeLink: 'https://github.com/KamalElmaddini/happy-safar',
    },
];
