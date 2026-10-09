import { useState, useEffect } from 'react';
import './Navbar.css';
import eslfLogo from '../assets/eslflogo.jpeg';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <div className="nav-logo">
                    <a href="#home" className="nav-logo-link" onClick={closeMenu}>
                        <img src={eslfLogo} alt="Emad Soliman Law Firm Logo" className="nav-logo-img" />
                    </a>
                </div>

                <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
                    <a href="#achievements" className="nav-link" onClick={closeMenu}>Achievements</a>
                    <a href="#fields" className="nav-link" onClick={closeMenu}>Practice Areas</a>
                    <a href="#contact" className="nav-contact-btn mobile-only" onClick={closeMenu}>Contact Us</a>
                </nav>

                <div className="nav-cta desktop-only">
                    <a href="#contact" className="nav-contact-btn">Contact Us</a>
                </div>

                <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
