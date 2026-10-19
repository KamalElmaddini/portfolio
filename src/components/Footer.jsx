import React from 'react';
import './Footer.css';
import { shared } from '../data/content';
import { useLang } from '../i18n';
import SocialLinks from './SocialLinks';

const Footer = () => {
    const { t } = useLang();
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-logo">
                    <h2>Kamal.</h2>
                    <p>{t.footer.tagline}</p>
                </div>

                <SocialLinks />

                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} {shared.name}. {t.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
