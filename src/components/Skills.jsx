import React from 'react';
import { Database, Layout, Server, TrendingUp, Clapperboard } from 'lucide-react';
import './Skills.css';
import { shared } from '../data/content';
import { useLang } from '../i18n';

const icons = { layout: Layout, server: Server, database: Database, trending: TrendingUp, content: Clapperboard };

const Skills = () => {
    const { t } = useLang();
    const s = t.skills;
    const groups = [
        ...shared.skills,
        { id: 'marketing', icon: 'trending', items: s.marketing },
        { id: 'content', icon: 'content', items: s.content },
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">{s.title}</h2>
                <div className="skills-grid">
                    {groups.map((group) => {
                        const Icon = icons[group.icon];
                        return (
                            <div className={`skill-card skill-card--${group.id}`} key={group.id}>
                                <div className="skill-head">
                                    <div className="skill-icon">
                                        <Icon size={22} />
                                    </div>
                                    <h3 className="skill-category">{s.categories[group.id]}</h3>
                                </div>
                                <ul className="skill-chips">
                                    {group.items.map((item) => <li key={item} className="skill-chip">{item}</li>)}
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
