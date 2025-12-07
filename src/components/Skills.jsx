import React from 'react';
import { Code, Database, Layout, Smartphone, Server, Terminal } from 'lucide-react';
import './Skills.css';

const skillsData = [
    {
        category: "Languages",
        icon: <Code size={24} />,
        items: ["JavaScript (ES6+)", "PHP", "Java", "HTML5", "CSS3", "SQL", "Python"]
    },
    {
        category: "Front-End",
        icon: <Layout size={24} />,
        items: ["React.js", "Tailwind CSS", "Bootstrap", "Redux", "jQuery"]
    },
    {
        category: "Back-End",
        icon: <Server size={24} />,
        items: ["Node.js", "Laravel", "Express.js"]
    },
    {
        category: "Databases",
        icon: <Database size={24} />,
        items: ["MySQL", "PL/SQL", "MongoDB", "PostgreSQL"]
    },
    {
        category: "Tools & Soft Skills",
        icon: <Terminal size={24} />,
        items: ["GitHub", "Docker", "Postman", "VSCode", "Figma", "Project Management"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-icon">
                                {skill.icon}
                            </div>
                            <h3 className="skill-category">{skill.category}</h3>
                            <ul className="skill-list">
                                {skill.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
