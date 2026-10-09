import './Footer.css';
import eslfLogo from '../assets/eslflogo.jpeg';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo-link">
                            <img src={eslfLogo} alt="Emad Soliman Law Firm Logo" className="footer-logo-img" />
                        </a>
                        <p>Embracing Change with a Firm Vision. Comprehensive legal services tailored to your strategic goals.</p>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Firm</a></li>
                            <li><a href="#achievements">Achievements</a></li>
                            <li><a href="#fields">Practice Areas</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Emad Soliman Law Firm. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
