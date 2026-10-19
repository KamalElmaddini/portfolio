import React from 'react';
import { Github, Linkedin, Mail, Instagram, Facebook, MessageCircle, FileDown, Plane, Youtube, Twitter } from 'lucide-react';
import './Hero.css';
import profileImg from '../assets/profile.jpg';
import { contact, heroText } from '../data/profile';

const cvUrl = `${import.meta.env.BASE_URL}cv.pdf`;

const Hero = () => {
    const { socials } = contact;
    return (
        <section id='home' className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="subtitle">Hello, I'm</span>
                    <h1 className="title">{contact.name}</h1>
                    <h2 className="role">
                        {contact.title}
                        <span className="role-sub">{contact.subtitle}</span>
                    </h2>
                    <p className="description">{heroText}</p>

                    <p className="relocation">
                        <Plane size={16} />
                        {contact.relocation}
                    </p>

                    <div className="hero-btns">
                        <a href="#contact" className="btn">Contact Me</a>
                        <a href={cvUrl} download="Kamal_Elmaddini_CV.pdf" className="btn btn-outline">
                            <FileDown size={20} style={{ marginRight: '8px' }} />
                            Download CV
                        </a>
                    </div>
                    <div className="footer-social">
                        <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
                        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href={socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={20} /></a>
                        <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href={socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href={socials.x} target="_blank" rel="noopener noreferrer" aria-label="X"><Twitter size={20} /></a>
                        <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={20} /></a>
                        <a href={`mailto:${contact.email}`} aria-label="Email"><Mail size={20} /></a>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-wrapper">
                        <img src={profileImg} alt={contact.name} className="profile-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
