import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <div className="nav-logo">
                    <a href="#home">ESLF<span className="text-gradient">.</span></a>
                </div>

                <nav className="nav-links">
                    <a href="#about" className="nav-link">About</a>
                    <a href="#achievements" className="nav-link">Achievements</a>
                    <a href="#fields" className="nav-link">Practice Areas</a>
                </nav>

                <div className="nav-cta">
                    <a href="#contact" className="nav-contact-btn">Contact Us</a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
