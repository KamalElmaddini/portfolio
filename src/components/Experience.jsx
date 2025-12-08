import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">Experience & Education</h2>

                <div className="timeline-grid">
                    {/* Experience Column */}
                    <div className="timeline-column">
                        <h3 className="column-title">
                            <Briefcase className="icon" size={24} />
                            Professional Experience
                        </h3>

                        <div className="timeline-item">
                            <div className="timeline-date">2024 - Present</div>
                            <h4 className="timeline-role">Freelance Full Stack Developer</h4>
                            <span className="timeline-loc">Remote</span>
                            <p className="timeline-desc">
                                Designed and developed custom websites using React, Tailwind CSS, and Laravel,
                                ensuring 100% client satisfaction.
                            </p>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-date">2024 (6 Months)</div>
                            <h4 className="timeline-role">Full Stack Developer Intern - RITECHCO</h4>
                            <span className="timeline-loc">Tiflet</span>
                            <p className="timeline-desc">
                                Collaborated with the development team to design and build dynamic web applications
                                using PHP and MySQL, reducing manual data entry by 30%.
                            </p>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-date">2022 (6 Months)</div>
                            <h4 className="timeline-role">Data Management Employee - SNCE</h4>
                            <span className="timeline-loc">Ain Johra</span>
                            <p className="timeline-desc">
                                Managed sensitive employee and equipment data with high accuracy and confidentiality.
                            </p>
                        </div>
                    </div>

                    {/* Education Column */}
                    <div className="timeline-column">
                        <h3 className="column-title">
                            <GraduationCap className="icon" size={24} />
                            Formation
                        </h3>

                        <div className="timeline-item">
                            <div className="timeline-date">2025 - Present</div>
                            <h4 className="timeline-role">Bachelor's Degree in Computer Engineering</h4>
                            <span className="timeline-loc">High-Tech - Rabat</span>
                            <p>
                                Currently pursuing a Bachelor's degree in Computer Engineering (Génie Informatique). My studies focus on software development, algorithms, and system architecture.
                            </p>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-date">2022 - 2024</div>
                            <h4 className="timeline-role">Specialized Technician in Digital Development</h4>
                            <span className="timeline-loc">Specialized Institute of Applied Technology (ISTA) - Rabat/Khemisset</span>
                            <p className="timeline-desc">
                                Focus: Web Application Development, Database Administration, Mobile Development.
                            </p>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-date">2021 - 2022</div>
                            <h4 className="timeline-role">1st Year : Physical Science of Matter</h4>
                            <span className="timeline-loc">Faculty of Sciences, Ibn Tofail University - Kenitra</span>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-date">2021</div>
                            <h4 className="timeline-role">Baccalauréat in Physical Sciences</h4>
                            <span className="timeline-loc">Lycée Idriss Benzakri</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
