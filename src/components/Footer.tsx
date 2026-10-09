import './Footer.css';
import eslfLogo from '../assets/eslflogo-transparent.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo-link" aria-label="ESLF Home">
                            <img src={eslfLogo} alt="Emad Soliman Law Firm" className="footer-logo-img" />
                        </a>
                        <p className="footer-desc">
                            Embracing Change with a Firm Vision. Comprehensive corporate counsel, high-stakes litigation, and arbitration tailored to protect and advance your strategic interests.
                        </p>
                        <div className="footer-hq-pill">
                            <span>📍 Cairo, Egypt &bull; Est. 1987</span>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <div className="footer-links">
                            <h4 className="footer-title">Navigation</h4>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About Firm</a></li>
                                <li><a href="#achievements">Achievements</a></li>
                                <li><a href="#fields">Practice Areas</a></li>
                                <li><a href="#contact">Contact Us</a></li>
                            </ul>
                        </div>

                        <div className="footer-links">
                            <h4 className="footer-title">Direct Contact</h4>
                            <ul className="footer-contact-list">
                                <li>
                                    <a href="tel:+20224141304" className="footer-contact-link">
                                        <span className="foot-icon">📞</span> (+202) 24141304
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:contact@eslf.com" className="footer-contact-link">
                                        <span className="foot-icon">✉️</span> contact@eslf.com
                                    </a>
                                </li>
                                <li>
                                    <span className="footer-contact-link">
                                        <span className="foot-icon">🏢</span> Nasr City, Cairo
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Emad Soliman Law Firm (ESLF). All rights reserved.</p>
                    <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top of page">
                        <span>Back to Top</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
