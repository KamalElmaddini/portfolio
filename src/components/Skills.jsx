import React from 'react';
import { Database, Layout, Server, TrendingUp } from 'lucide-react';
import './Skills.css';
import { skills } from '../data/profile';

const icons = {
    layout: Layout,
    server: Server,
    database: Database,
    trending: TrendingUp,
};

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill) => {
                        const Icon = icons[skill.icon];
                        return (
                            <div className="skill-card" key={skill.category}>
                                <div className="skill-icon">
                                    <Icon size={24} />
                                </div>
                                <h3 className="skill-category">{skill.category}</h3>
                                <ul className="skill-list">
                                    {skill.items.map((item) => <li key={item}>{item}</li>)}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
