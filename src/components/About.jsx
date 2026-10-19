import React from 'react';
import './About.css';
import { bio, stats, languages, interests } from '../data/profile';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-bio-text">
                    <p>{bio}</p>
                </div>

                <div className="stats-strip">
                    {stats.map((s) => (
                        <div className="stat" key={s.label}>
                            <span className="stat-value">{s.value}</span>
                            <span className="stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>

                <div className="about-stats">
                    <div className="info-group">
                        <h3 className="info-title">Languages</h3>
                        <ul className="info-list">
                            {languages.map((l) => (
                                <li key={l.name}><strong>{l.name}</strong><span>{l.level}</span></li>
                            ))}
                        </ul>
                    </div>
                    <div className="info-group">
                        <h3 className="info-title">Interests</h3>
                        <ul className="info-list">
                            {interests.map((i) => <li key={i}>{i}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
