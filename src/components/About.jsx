import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-stats">
                    <div className="info-group">
                        <h3 className="info-title">Languages</h3>
                        <ul className="info-list">
                            <li><strong>Arabic:</strong> Native</li>
                            <li><strong>English:</strong> Advanced</li>
                            <li><strong>French:</strong> Intermediate</li>
                        </ul>
                    </div>
                    <div className="info-group">
                        <h3 className="info-title">Interests</h3>
                        <ul className="info-list">
                            <li>Graphics and 3D Design</li>
                            <li>Video production</li>
                            <li>Football</li>
                            <li>Gaming</li>
                        </ul>
                    </div>
                </div>
                <div className="about-bio-text">
                    <p>
                        Innovative and motivated Full Stack Developer with a strong foundation in digital development
                        and project management. Experienced in building responsive web applications and optimizing
                        user experiences through freelance projects and internships. Adept at problem-solving and
                        passionate about combining clean code with modern design aesthetics.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
