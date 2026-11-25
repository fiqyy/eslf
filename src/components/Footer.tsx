import './Footer.css';
import eslfLogo from '../assets/eslf-logo-horizontal.png';
import { useLanguage } from '../i18n/context';

const Footer = () => {
    const { t, n } = useLanguage();
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo-link" aria-label={t.nav.home}>
                            <img src={eslfLogo} alt={t.footer.logoAlt} className="footer-logo-img" />
                        </a>
                        <p className="footer-desc">
                            {t.footer.desc}
                        </p>
                        <div className="footer-hq-pill">
                            <span>{t.footer.hq}</span>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <div className="footer-links">
                            <h4 className="footer-title">{t.footer.navigation}</h4>
                            <ul>
                                <li><a href="#home">{t.footer.home}</a></li>
                                <li><a href="#about">{t.footer.about}</a></li>
                                <li><a href="#fields">{t.footer.fields}</a></li>
                                <li><a href="#contact">{t.footer.contact}</a></li>
                            </ul>
                        </div>

                        <div className="footer-links">
                            <h4 className="footer-title">{t.footer.directContact}</h4>
                            <ul className="footer-contact-list">
                                <li>
                                    <a href="tel:+20224141304" className="footer-contact-link">
                                        <span className="foot-icon">📞</span> <bdi dir="ltr">{n('(+202) 24141304')}</bdi>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:contact@eslf.com" className="footer-contact-link">
                                        <span className="foot-icon">✉️</span> contact@eslf.com
                                    </a>
                                </li>
                                <li>
                                    <span className="footer-contact-link">
                                        <span className="foot-icon">🏢</span> {t.footer.location}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {n(currentYear)} {t.footer.rights}</p>
                    <button className="back-to-top-btn" onClick={scrollToTop} aria-label={t.footer.backToTopAria}>
                        <span>{t.footer.backToTop}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
