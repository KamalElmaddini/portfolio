// Single source of truth for the portfolio content, in English and French.
// Facts follow the ESC CV + public repos. Update here, never in components.

import hotelImg from '../assets/projects/hotel-system.jpg';
import inventoryImg from '../assets/projects/inventory-system.jpg';
import chessImg from '../assets/projects/chess-game.jpg';

const YOUTUBE = 'https://www.youtube.com/channel/UCM-FojP-rcOkbjOgafTPUvA';

// ---------- Language-independent data ----------
export const shared = {
    name: 'Kamal Elmaddini',
    phone: '+212 638 964 606',
    email: 'kamalelmaddini@gmail.com',
    socials: {
        github: 'https://github.com/KamalElmaddini',
        linkedin: 'https://www.linkedin.com/in/kamal-elmaddini/',
        youtube: YOUTUBE,
        instagram: 'https://www.instagram.com/kamal_madini/',
        facebook: 'https://www.facebook.com/kamal.elmaddini/',
        x: 'https://x.com/Kamal_Elmaddini',
        whatsapp: 'https://wa.me/212638964606',
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rabat%2C+Morocco',
    stats: ['$10K+', '6,000+', '50M+', '25K+'],
    projects: [
        {
            id: 'hotel',
            tags: ['Java', 'Spring Boot', 'Spring Cloud Gateway', 'React', 'TypeScript', 'Docker'],
            image: hotelImg,
            codeLink: 'https://github.com/KamalElmaddini/hotel-system',
        },
        {
            id: 'inventory',
            tags: ['React', 'Node.js', 'Express', 'SQLite', 'Tailwind CSS'],
            image: inventoryImg,
            demoLink: 'https://inventory-system-nine-zeta.vercel.app/',
            codeLink: 'https://github.com/KamalElmaddini/inventory-system',
        },
        {
            id: 'chess',
            tags: ['React', 'JavaScript', 'Vite'],
            image: chessImg,
            demoLink: 'https://chess-game-silk.vercel.app/',
            codeLink: 'https://github.com/KamalElmaddini/chess-game',
        },
        {
            id: 'safar',
            tags: ['React', 'Vite', 'CSS3', 'AOS'],
            image: null,
            demoLink: 'https://jovial-melomakarona-2100da.netlify.app/',
            codeLink: 'https://github.com/KamalElmaddini/happy-safar',
        },
    ],
    // Skill names are proper nouns: same in both languages. Category labels are translated.
    skills: [
        { id: 'front', icon: 'layout', items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'React Router', 'Zustand', 'Tailwind CSS', 'Sass', 'HTML5 / CSS3', 'Recharts', 'Framer Motion'] },
        { id: 'back', icon: 'server', items: ['Java', 'Spring Boot', 'Spring Cloud Gateway', 'Spring Data JPA', 'Java EE (JSP, Servlet)', 'Laravel / PHP', 'Node.js', 'Express', 'REST APIs', 'JWT', 'Microservices'] },
        { id: 'data', icon: 'database', items: ['MySQL', 'Supabase', 'SQLite', 'H2', 'Sequelize', 'Docker / Compose', 'Maven', 'Git / GitHub', 'Vite', 'Vercel', 'Netlify'] },
    ],
};

// ---------- English ----------
const en = {
    meta: {
        lang: 'en',
        title: 'Kamal Elmaddini — Full-Stack Developer & Digital Content Creator',
    },
    nav: { home: 'Home', about: 'About', experience: 'Experience', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    ui: {
        themeToggle: 'Toggle theme',
        menu: 'Open menu',
        langSwitch: 'Switch language',
    },
    hero: {
        hello: "Hello, I'm",
        title: 'Full-Stack Developer',
        subtitle: 'Digital Content Creator & E-Commerce',
        text: 'I build websites and web apps with React, Next.js and Laravel, and I grow audiences. Founder of Estore.ma (6,000+ customers) and creator of ElMdPlay, with 50M+ views across platforms.',
        contact: 'Contact Me',
        cv: 'Download CV',
    },
    about: {
        title: 'About Me',
        bio: 'Full-stack web developer and digital content creator from Rabat, Morocco. I combine technical skills (React, Next.js, Laravel) with hands-on experience in content creation, social media and community building. I have supported an association hosting American students as a translator and taught drawing to children at school art exhibitions. Motivated to contribute to social projects through digital communication, intercultural exchange and work with young people.',
        stats: ['Revenue generated', 'Customers served', 'Views across platforms', 'YouTube subscribers'],
        languagesTitle: 'Languages',
        languages: [
            { name: 'Arabic', level: 'Native' },
            { name: 'English', level: 'B2 · C1 listening & reading' },
            { name: 'French', level: 'B1 · C1 listening & reading' },
            { name: 'Spanish', level: 'A2 · B1 listening & reading' },
        ],
        interestsTitle: 'Interests',
        interests: ['Video production', 'Graphics & 3D design', 'Football', 'Gaming'],
    },
    experience: {
        title: 'Experience & Education',
        workTitle: 'Professional Experience',
        educationTitle: 'Education',
        volunteeringTitle: 'Volunteering',
        work: [
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
                link: { label: 'YouTube channel', href: YOUTUBE },
                points: [
                    'Grew the YouTube channel to 25,000+ subscribers and 39M+ views.',
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
        ],
        education: [
            { date: '2025 — 2026', role: 'Licence in Computer Engineering', meta: 'High-Tech · Rabat · EQF level 6' },
            { date: '2022 — 2024', role: 'Specialized Technician Diploma — Full-Stack Web Development', meta: 'ISTA — OFPPT · Rabat/Khemisset · EQF level 5' },
            { date: '2021 — 2022', role: 'Undergraduate studies in Material Sciences (1 year)', meta: 'Ibn Tofail University · Kenitra' },
            { date: '2017 — 2021', role: 'Baccalaureate in Physical Sciences', meta: 'Lycée Idriss Benzakri · Tiflet · EQF level 4' },
        ],
        volunteering: [
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
        ],
    },
    skills: {
        title: 'Skills',
        categories: { front: 'Front-End', back: 'Back-End', data: 'Data, DevOps & Deployment', marketing: 'Digital Marketing & Growth', content: 'Content & Creative Tools' },
        marketing: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Google My Business', 'Social media management', 'Content marketing strategy', 'Short-form SEO', 'E-commerce', 'Customer acquisition & retention'],
        content: ['Video editing', 'Photo editing', 'Scripting & filming', 'Thumbnail design', 'Blender (3D)', 'WordPress', 'AI tools (Claude Code, Copilot, ElevenLabs)'],
    },
    projects: {
        title: 'Featured Projects',
        demo: 'Live demo',
        code: 'Code',
        prev: 'Previous projects',
        next: 'Next projects',
        items: {
            hotel: {
                title: 'Grandeur Hotel Management System',
                description: 'Microservices app for hotel operations: room inventory, multi-step booking flow, guest directory, billing and an occupancy/revenue dashboard. JWT auth with role-based access, containerised with Docker Compose.',
            },
            inventory: {
                title: 'Inventory Management System',
                description: 'Product and stock tracking with Admin/Employee roles, dashboard charts and one-click PDF inventory reports.',
            },
            chess: {
                title: 'React Chess Game',
                description: 'Playable chess with full rules (castling, en passant, promotion), legal-move highlighting and check/checkmate/stalemate detection.',
            },
            safar: {
                title: 'Happy Safar — Travel Agency',
                description: 'Travel agency website with destinations, offers and blog sections, scroll animations and a fully responsive layout.',
            },
        },
    },
    contact: {
        title: 'Get In Touch',
        heading: "Let's Talk",
        text: 'Have a project, a role or a collaboration in mind? Developer roles, digital communication and content projects, social projects with young people, or freelance work: send me a message.',
        phone: 'Phone · WhatsApp',
        email: 'Email',
        location: 'Location',
        locationValue: 'Rabat, Morocco',
        form: { name: 'Your name', email: 'Your email', subject: 'Subject', message: 'Message', send: 'Send message', note: 'Opens your email app with the message ready to send.' },
    },
    footer: { tagline: 'Full-Stack Developer · Digital Content Creator', rights: 'All rights reserved.' },
};

// ---------- Français ----------
const fr = {
    meta: {
        lang: 'fr',
        title: 'Kamal Elmaddini — Développeur Full-Stack & Créateur de contenu digital',
    },
    nav: { home: 'Accueil', about: 'À propos', experience: 'Parcours', skills: 'Compétences', projects: 'Projets', contact: 'Contact' },
    ui: {
        themeToggle: 'Changer de thème',
        menu: 'Ouvrir le menu',
        langSwitch: 'Changer de langue',
    },
    hero: {
        hello: 'Bonjour, je suis',
        title: 'Développeur Full-Stack',
        subtitle: 'Création de contenu digital & E-commerce',
        text: "Je développe des sites et des applications web avec React, Next.js et Laravel, et je fais grandir des audiences. Fondateur d'Estore.ma (6 000+ clients) et créateur d'ElMdPlay, avec plus de 50 M de vues sur l'ensemble des plateformes.",
        contact: 'Me contacter',
        cv: 'Télécharger le CV',
    },
    about: {
        title: 'À propos',
        bio: "Développeur web full-stack et créateur de contenu digital, basé à Rabat (Maroc). J'associe des compétences techniques (React, Next.js, Laravel) à une expérience concrète de la création de contenu, des réseaux sociaux et de l'animation de communauté. J'ai accompagné, en tant que traducteur, une association accueillant des étudiants américains, et j'ai animé des ateliers de dessin pour enfants lors d'expositions scolaires. Motivé à contribuer à des projets sociaux à travers la communication digitale, l'échange interculturel et le travail auprès des jeunes.",
        stats: ['Chiffre d’affaires généré', 'Clients servis', 'Vues toutes plateformes', 'Abonnés YouTube'],
        languagesTitle: 'Langues',
        languages: [
            { name: 'Arabe', level: 'Langue maternelle' },
            { name: 'Anglais', level: 'B2 · C1 compréhension' },
            { name: 'Français', level: 'B1 · C1 compréhension' },
            { name: 'Espagnol', level: 'A2 · B1 compréhension' },
        ],
        interestsTitle: "Centres d'intérêt",
        interests: ['Production vidéo', 'Graphisme & design 3D', 'Football', 'Jeux vidéo'],
    },
    experience: {
        title: 'Parcours',
        workTitle: 'Expérience professionnelle',
        educationTitle: 'Formation',
        volunteeringTitle: 'Bénévolat',
        work: [
            {
                date: 'Nov. 2024 — Aujourd’hui',
                role: 'Fondateur — Estore.ma',
                meta: 'Plateforme de produits digitaux & abonnements · Indépendant',
                points: [
                    "Création et gestion d'une plateforme de produits digitaux et d'abonnements, partie de zéro.",
                    "Plus de 6 000 clients servis et plus de 10 000 $ de chiffre d'affaires.",
                    'Gestion complète du parcours client : acquisition, vente, fidélisation et support.',
                ],
            },
            {
                date: 'Juil. 2023 — Aujourd’hui',
                role: 'Développeur Full-Stack Freelance',
                meta: 'Indépendant · À distance',
                points: [
                    "Conception et développement de sites et d'applications web pour des clients (React.js, Laravel).",
                    'Gestion de projet de bout en bout : besoins, développement, déploiement et relation client.',
                ],
            },
            {
                date: 'Févr. 2026 — Aujourd’hui',
                role: 'Créateur de contenu — ElMdPlay',
                meta: 'YouTube · Instagram · TikTok',
                link: { label: 'Chaîne YouTube', href: YOUTUBE },
                points: [
                    'Chaîne YouTube développée à plus de 25 000 abonnés et 39 M de vues.',
                    'Plus de 50 M de vues cumulées sur toutes les plateformes.',
                    'Écriture, tournage, montage et croissance sur les réseaux sociaux.',
                ],
            },
            {
                date: 'Juil. 2024 — Janv. 2025',
                role: "Stagiaire en développement web & d'applications — RITECHCO",
                meta: 'Tiflet, Maroc',
                points: ["Conception et développement de sites web et d'applications pour des clients."],
            },
            {
                date: 'Mars 2022 — Sept. 2022',
                role: 'Administrateur de données — SNCE',
                meta: 'Ain Johra, Maroc',
                points: ['Gestion des données du personnel et des équipements.'],
            },
        ],
        education: [
            { date: '2025 — 2026', role: 'Licence en Génie Informatique', meta: 'High-Tech · Rabat · Niveau CEC 6' },
            { date: '2022 — 2024', role: 'Diplôme de Technicien Spécialisé — Développement Web Full-Stack', meta: 'ISTA — OFPPT · Rabat/Khémisset · Niveau CEC 5' },
            { date: '2021 — 2022', role: 'Études universitaires en Sciences de la Matière (1 an)', meta: 'Université Ibn Tofail · Kénitra' },
            { date: '2017 — 2021', role: 'Baccalauréat Sciences Physiques', meta: 'Lycée Idriss Benzakri · Tiflet · Niveau CEC 4' },
        ],
        volunteering: [
            {
                role: "Traducteur — association d'échange étudiant",
                meta: 'Rabat',
                points: ["Accompagnement d'une association accueillant des étudiants américains : traduction et présentation de la culture marocaine."],
            },
            {
                role: 'Ateliers de dessin pour enfants',
                meta: 'Expositions artistiques scolaires',
                points: ["Initiation au dessin pour de jeunes enfants lors d'expositions dans des écoles."],
            },
        ],
    },
    skills: {
        title: 'Compétences',
        categories: { front: 'Front-End', back: 'Back-End', data: 'Données, DevOps & Déploiement', marketing: 'Marketing digital & Croissance', content: 'Contenu & Outils créatifs' },
        marketing: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Google My Business', 'Gestion des réseaux sociaux', 'Stratégie de contenu', 'SEO formats courts', 'E-commerce', 'Acquisition & fidélisation client'],
        content: ['Montage vidéo', 'Retouche photo', 'Écriture & tournage', 'Design de miniatures', 'Blender (3D)', 'WordPress', 'Outils IA (Claude Code, Copilot, ElevenLabs)'],
    },
    projects: {
        title: 'Projets',
        demo: 'Démo en ligne',
        code: 'Code',
        prev: 'Projets précédents',
        next: 'Projets suivants',
        items: {
            hotel: {
                title: 'Grandeur — Gestion hôtelière',
                description: "Application en microservices pour la gestion d'un hôtel : chambres, réservation en plusieurs étapes, fichier clients, facturation et tableau de bord occupation/revenus. Authentification JWT avec rôles, conteneurisée avec Docker Compose.",
            },
            inventory: {
                title: 'Gestion de stock',
                description: 'Suivi des produits et des stocks avec rôles Admin/Employé, graphiques de tableau de bord et rapports PDF générés en un clic.',
            },
            chess: {
                title: "Jeu d'échecs React",
                description: 'Jeu d’échecs complet (roque, prise en passant, promotion), mise en évidence des coups légaux et détection échec/mat/pat.',
            },
            safar: {
                title: 'Happy Safar — Agence de voyage',
                description: "Site d'agence de voyage avec destinations, offres et blog, animations au défilement et mise en page entièrement responsive.",
            },
        },
    },
    contact: {
        title: 'Contact',
        heading: 'Parlons-en',
        text: 'Un projet, un poste ou une collaboration en tête ? Postes de développeur, projets de communication digitale et de contenu, projets sociaux auprès des jeunes ou missions freelance : écrivez-moi.',
        phone: 'Téléphone · WhatsApp',
        email: 'E-mail',
        location: 'Localisation',
        locationValue: 'Rabat, Maroc',
        form: { name: 'Votre nom', email: 'Votre e-mail', subject: 'Objet', message: 'Message', send: 'Envoyer le message', note: 'Ouvre votre messagerie avec le message prêt à envoyer.' },
    },
    footer: { tagline: 'Développeur Full-Stack · Créateur de contenu digital', rights: 'Tous droits réservés.' },
};

export const content = { en, fr };
export const LANGS = ['en', 'fr'];
