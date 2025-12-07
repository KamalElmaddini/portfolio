import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    // ... (projects array remains same)
    const projects = [
        {
            id: 1,
            title: 'E-commerce Platform',
            description: 'A full-featured online store built with React and Node.js. Includes shopping cart, user authentication, and payment integration.',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            image: 'https://placehold.co/600x400/1a252f/FFF?text=E-commerce',
            demoLink: '#',
            codeLink: '#'
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A productivity application for managing daily tasks and projects. Features drag-and-drop interface and real-time updates.',
            tags: ['React', 'Firebase', 'Tailwind CSS'],
            image: 'https://placehold.co/600x400/1a252f/FFF?text=Task+App',
            demoLink: '#',
            codeLink: '#'
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: 'A weather application that displays current conditions and forecasts for cities worldwide using the OpenWeatherMap API.',
            tags: ['React', 'API Integration', 'Chart.js'],
            image: 'https://placehold.co/600x400/1a252f/FFF?text=Weather+App',
            demoLink: '#',
            codeLink: '#'
        },
        {
            id: 4,
            title: 'Social Media Dashboard',
            description: 'A dashboard for tracking social media metrics across multiple platforms. Visualizes data with interactive charts.',
            tags: ['React', 'D3.js', 'Material UI'],
            image: 'https://placehold.co/600x400/1a252f/FFF?text=Social+Dashboard',
            demoLink: '#',
            codeLink: '#'
        },
        {
            id: 5,
            title: 'Fitness Tracker',
            description: 'A mobile-first application for tracking workouts and nutrition. Syncs with external health APIs.',
            tags: ['React Native', 'Redux', 'Express'],
            image: 'https://placehold.co/600x400/1a252f/FFF?text=Fitness+Tracker',
            demoLink: '#',
            codeLink: '#'
        },
        {
            id: 6,
            title: 'Recipe Finder',
            description: 'An application to search for recipes based on ingredients. Includes dietary filters and meal planning features.',
            tags: ['React', 'Spoonacular API', 'CSS Modules'],
            image: 'https://placehold.co/600x400/1a252f/FFF?text=Recipe+Finder',
            demoLink: '#',
            codeLink: '#'
        }
    ];

    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 300; // Adjust scroll amount as needed
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-wrapper">
                    <button className="scroll-btn left" onClick={() => scroll('left')} aria-label="Scroll Left">
                        <ChevronLeft size={24} />
                    </button>
                    <div className="projects-grid" ref={scrollRef}>
                        {projects.map((project) => (
                            <div key={project.id} className="project-card">
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-links">
                                        <a href={project.demoLink} className="btn-link primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                        <a href={project.codeLink} className="btn-link secondary" target="_blank" rel="noopener noreferrer">View Code</a>
                                    </div>
                                </div>
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="scroll-btn right" onClick={() => scroll('right')} aria-label="Scroll Right">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
