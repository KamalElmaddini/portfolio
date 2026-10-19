import React from 'react';
import { Github, Linkedin, Mail, Instagram, Facebook, MessageCircle, Youtube, Twitter } from 'lucide-react';
import { contact } from '../data/profile';
import './Footer.css';

const Footer = () => {
    const { socials } = contact;
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-logo">
                    <h2>Kamal.</h2>
                    <p>Full-Stack Developer · Digital Content Creator</p>
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

                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} Kamal Elmaddini. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
