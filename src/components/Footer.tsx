import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2>ESLF<span className="text-gradient">.</span></h2>
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
