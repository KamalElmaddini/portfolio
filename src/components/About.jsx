import React from 'react';
import './About.css';
import { shared } from '../data/content';
import { useLang } from '../i18n';

const About = () => {
    const { t } = useLang();
    const a = t.about;
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">{a.title}</h2>
                <div className="about-bio-text">
                    <p>{a.bio}</p>
                </div>

                <div className="stats-strip">
                    {shared.stats.map((value, i) => (
                        <div className="stat" key={a.stats[i]}>
                            <span className="stat-value">{value}</span>
                            <span className="stat-label">{a.stats[i]}</span>
                        </div>
                    ))}
                </div>

                <div className="about-stats">
                    <div className="info-group">
                        <h3 className="info-title">{a.languagesTitle}</h3>
                        <ul className="info-list">
                            {a.languages.map((l) => (
                                <li key={l.name}><strong>{l.name}</strong><span>{l.level}</span></li>
                            ))}
                        </ul>
                    </div>
                    <div className="info-group">
                        <h3 className="info-title">{a.interestsTitle}</h3>
                        <ul className="info-list">
                            {a.interests.map((i) => <li key={i}>{i}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
