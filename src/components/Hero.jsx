import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Instagram, Facebook, MessageCircle, FileDown } from 'lucide-react';
import './Hero.css';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id='home' className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="subtitle">Hello, I'm</span>
                    <h1 className="title">Kamal Elmaddini</h1>
                    <h2 className="role">Full-Stack Developer</h2>
                    <p className="description">
                        I create sophisticated websites and applications for discerning clients.
                        Based in Rabat, Morocco.
                    </p>

                    <div className="hero-btns">
                        <a href="#contact" className="btn">Contact Me</a>
                        <a href="/cv.pdf" download="Kamal_Elmaddini_CV.pdf" className="btn btn-outline">
                            <FileDown size={20} style={{ marginRight: '8px' }} />
                            Download CV
                        </a>
                    </div>
                    <div className="footer-social">
                        <a href="https://github.com/KamalElmaddini" target="_blank" rel="noopener noreferrer" aria-label="Github"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/kamal-elmaddini/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="https://www.instagram.com/kamal_madini/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="https://www.facebook.com/kamal.elmaddini/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="https://wa.me/212638964606" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={20} /></a>
                        <a href="mailto:kamalelmaddini@gmail.com" aria-label="Email"><Mail size={20} /></a>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-wrapper">
                        <img src={profileImg} alt="Kamal Elmaddini" className="profile-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
