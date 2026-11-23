import { useState, useEffect } from 'react';
import './Navbar.css';
import eslfLogo from '../assets/eslflogo-transparent.png';
import { useLanguage } from '../i18n/context';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { t, n, lang, toggleLang } = useLanguage();

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

    // Close the drawer when resizing/rotating to the desktop layout, otherwise
    // the body scroll lock stays on with no visible way to release it.
    useEffect(() => {
        const desktop = window.matchMedia('(min-width: 993px)');
        const handleChange = (e: MediaQueryListEvent) => {
            if (e.matches) setMenuOpen(false);
        };
        desktop.addEventListener('change', handleChange);
        return () => desktop.removeEventListener('change', handleChange);
    }, []);

    const toggleMenu = () => setMenuOpen(open => !open);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <div className="nav-logo">
                    <a href="#home" className="nav-logo-link" onClick={closeMenu} aria-label={t.nav.home}>
                        <img src={eslfLogo} alt="Emad Soliman Law Firm" className="nav-logo-img" />
                    </a>
                </div>

                {/* Mobile Backdrop */}
                {menuOpen && <div className="nav-backdrop" onClick={closeMenu} />}

                <nav id="primary-navigation" className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <div className="mobile-menu-header">
                        <img src={eslfLogo} alt="ESLF" className="mobile-drawer-logo" />
                        <span className="mobile-tagline">{t.nav.tagline}</span>
                    </div>

                    <a href="#about" className="nav-link" onClick={closeMenu}>{t.nav.about}</a>
                    <a href="#fields" className="nav-link" onClick={closeMenu}>{t.nav.fields}</a>

                    <div className="mobile-nav-cta">
                        <a href="#contact" className="btn btn-primary mobile-cta-btn" onClick={closeMenu}>
                            {t.nav.consult}
                        </a>
                        <div className="mobile-contact-quick">
                            <a href="tel:+20224141304" className="quick-contact-item">
                                <span className="quick-icon">📞</span> <bdi dir="ltr">{n('(+202) 24141304')}</bdi>
                            </a>
                            <a href="mailto:contact@eslf.com" className="quick-contact-item">
                                <span className="quick-icon">✉️</span> contact@eslf.com
                            </a>
                        </div>
                    </div>
                </nav>

                <div className="nav-actions">
                    <button
                        type="button"
                        className="lang-toggle"
                        onClick={toggleLang}
                        aria-label={t.langToggle.aria}
                        lang={lang === 'ar' ? 'en' : 'ar'}
                    >
                        {t.langToggle.label}
                    </button>
                    <div className="nav-cta desktop-only">
                        <a href="#contact" className="nav-contact-btn">{t.nav.consult}</a>
                    </div>
                    <button
                        className={`hamburger ${menuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
                        aria-expanded={menuOpen}
                        aria-controls="primary-navigation"
                        type="button"
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
