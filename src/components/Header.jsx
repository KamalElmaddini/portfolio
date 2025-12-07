import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <a href="#" className="logo">Kamal.</a>

                <div className="nav-wrapper">
                    <nav className={`nav ${isOpen ? 'open' : ''}`}>
                        <ul className="nav-list">
                            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                            <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
                            <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
                            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                        </ul>
                    </nav>

                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
