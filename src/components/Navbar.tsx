import { useState, useEffect } from 'react';
import './Navbar.css';
import eslfLogo from '../assets/eslflogo-transparent.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
        } else {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        };
    }, [menuOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <div className="nav-logo">
                    <a href="#home" className="nav-logo-link" onClick={closeMenu} aria-label="ESLF Home">
                        <img src={eslfLogo} alt="Emad Soliman Law Firm" className="nav-logo-img" />
                    </a>
                </div>

                {/* Mobile Backdrop */}
                {menuOpen && <div className="nav-backdrop" onClick={closeMenu} />}

                <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <div className="mobile-menu-header">
                        <img src={eslfLogo} alt="ESLF" className="mobile-drawer-logo" />
                        <span className="mobile-tagline">Excellence in Legal Advocacy</span>
                    </div>

                    <a href="#about" className="nav-link" onClick={closeMenu}>About Firm</a>
                    <a href="#achievements" className="nav-link" onClick={closeMenu}>Achievements</a>
                    <a href="#fields" className="nav-link" onClick={closeMenu}>Practice Areas</a>

                    <div className="mobile-nav-cta">
                        <a href="#contact" className="btn btn-primary mobile-cta-btn" onClick={closeMenu}>
                            Consult ESLF
                        </a>
                        <div className="mobile-contact-quick">
                            <a href="tel:+20224141304" className="quick-contact-item">
                                <span className="quick-icon">📞</span> (+202) 24141304
                            </a>
                            <a href="mailto:contact@eslf.com" className="quick-contact-item">
                                <span className="quick-icon">✉️</span> contact@eslf.com
                            </a>
                        </div>
                    </div>
                </nav>

                <div className="nav-cta desktop-only">
                    <a href="#contact" className="nav-contact-btn">Consult ESLF</a>
                </div>

                <button
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </header>
    );
};

export default Navbar;
