import React from 'react';
import { Github, Linkedin, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-logo">
                    <h2>Kamal.</h2>
                    <p>Building digital experiences with passion and precision.</p>
                </div>

                <div className="footer-social">
                    <a href="https://github.com/KamalElmaddini" target="_blank" rel="noopener noreferrer" aria-label="Github"><Github size={20} /></a>
                    <a href="https://www.linkedin.com/in/kamal-elmaddini/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                    <a href="https://www.instagram.com/kamal_madini/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                    <a href="https://www.facebook.com/kamal.elmaddini/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
                    <a href="https://wa.me/212638964606" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={20} /></a>
                    <a href="mailto:kamalelmaddini@gmail.com" aria-label="Email"><Mail size={20} /></a>
                </div>

                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} Kamal Elmaddini. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
