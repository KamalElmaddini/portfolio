import React from 'react';
import { Briefcase, GraduationCap, HeartHandshake, ExternalLink } from 'lucide-react';
import './Experience.css';
import { useLang } from '../i18n';

const TimelineItem = ({ item }) => (
    <div className="timeline-item">
        {item.date && <div className="timeline-date">{item.date}</div>}
        <h4 className="timeline-role">{item.role}</h4>
        <span className="timeline-loc">{item.meta}</span>
        {item.link && (
            <a className="timeline-link" href={item.link.href} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={14} /> {item.link.label}
            </a>
        )}
        {item.points && (
            <ul className="timeline-points">
                {item.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
        )}
    </div>
);

const Experience = () => {
    const { t } = useLang();
    const e = t.experience;
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">{e.title}</h2>

                <div className="timeline-grid">
                    <div className="timeline-column">
                        <h3 className="column-title">
                            <Briefcase className="icon" size={24} />
                            {e.workTitle}
                        </h3>
                        {e.work.map((item) => <TimelineItem key={item.role} item={item} />)}
                    </div>

                    <div className="timeline-column">
                        <h3 className="column-title">
                            <GraduationCap className="icon" size={24} />
                            {e.educationTitle}
                        </h3>
                        {e.education.map((item) => <TimelineItem key={item.role} item={item} />)}

                        <h3 className="column-title column-title--spaced">
                            <HeartHandshake className="icon" size={24} />
                            {e.volunteeringTitle}
                        </h3>
                        {e.volunteering.map((item) => <TimelineItem key={item.role} item={item} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
