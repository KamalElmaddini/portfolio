import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import './Header.css';
import { useLang } from '../i18n';
import { LANGS } from '../data/content';

const SECTIONS = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];

const Header = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { lang, setLang, t } = useLang();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <a href="#home" className="logo">Kamal.</a>

                <div className="nav-wrapper">
                    <nav className={`nav ${isOpen ? 'open' : ''}`}>
                        <ul className="nav-list">
                            {SECTIONS.map((id) => (
                                <li key={id}>
                                    <a href={`#${id}`} onClick={() => setIsOpen(false)}>{t.nav[id]}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="lang-switch" role="group" aria-label={t.ui.langSwitch}>
                        {LANGS.map((code) => (
                            <button
                                key={code}
                                type="button"
                                className={`lang-option ${lang === code ? 'active' : ''}`}
                                aria-pressed={lang === code}
                                onClick={() => setLang(code)}
                            >
                                {code.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    <button className="theme-toggle" onClick={toggleTheme} aria-label={t.ui.themeToggle}>
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    <button className="menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label={t.ui.menu} aria-expanded={isOpen}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
