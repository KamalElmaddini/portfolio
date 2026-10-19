import React from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import './Projects.css';
import { projects } from '../data/profile';

const Projects = () => {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
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
                            <div key={project.title} className="project-card">
                                <div className="project-image">
                                    {project.image ? (
                                        <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
                                    ) : (
                                        <div className="project-fallback">{project.title}</div>
                                    )}
                                </div>
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="project-actions">
                                        {project.demoLink && (
                                            <a href={project.demoLink} className="project-action" target="_blank" rel="noopener noreferrer">
                                                <ExternalLink size={16} /> Live demo
                                            </a>
                                        )}
                                        <a href={project.codeLink} className="project-action" target="_blank" rel="noopener noreferrer">
                                            <Github size={16} /> Code
                                        </a>
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
