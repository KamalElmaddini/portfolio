import React from 'react';
import { FileDown, Plane } from 'lucide-react';
import './Hero.css';
import profileImg from '../assets/profile.jpg';
import { shared } from '../data/content';
import { useLang } from '../i18n';
import SocialLinks from './SocialLinks';

const cvUrl = `${import.meta.env.BASE_URL}cv.pdf`;

const Hero = () => {
    const { t } = useLang();
    const h = t.hero;
    return (
        <section id='home' className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="subtitle">{h.hello}</span>
                    <h1 className="title">{shared.name}</h1>
                    <h2 className="role">
                        {h.title}
                        <span className="role-sub">{h.subtitle}</span>
                    </h2>
                    <p className="description">{h.text}</p>

                    <p className="relocation">
                        <Plane size={16} />
                        {h.badge}
                    </p>

                    <div className="hero-btns">
                        <a href="#contact" className="btn">{h.contact}</a>
                        <a href={cvUrl} download="Kamal_Elmaddini_CV.pdf" className="btn btn-outline">
                            <FileDown size={20} style={{ marginRight: '8px' }} />
                            {h.cv}
                        </a>
                    </div>
                    <SocialLinks />
                </div>
                <div className="hero-image">
                    <div className="image-wrapper">
                        <img src={profileImg} alt={shared.name} className="profile-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
