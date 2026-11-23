import './About.css';
import eslfLogo from '../assets/eslflogo-transparent.png';
import { useLanguage } from '../i18n/context';

const About = () => {
    const { t, n } = useLanguage();
    return (
        <section id="about" className="about-section section-padding">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content reveal">
                        <div className="section-eyebrow">{t.about.eyebrow}</div>
                        <h2 className="section-title">{t.about.titlePrefix} <span className="text-gradient">{t.about.titleHighlight}</span></h2>
                        <h3 className="about-subtitle">{t.about.subtitle}</h3>

                        <p>{t.about.p1}</p>
                        <p>{t.about.p2}</p>

                        <div className="about-stats-grid">
                            <div className="stat-card glass-card">
                                <span className="stat-number text-gradient">{n('40+')}</span>
                                <span className="stat-label">{t.about.statYears}</span>
                            </div>
                            <div className="stat-card glass-card">
                                <span className="stat-number text-gradient">{n('32+')}</span>
                                <span className="stat-label">{t.about.statAttorneys}</span>
                            </div>
                            <div className="stat-card glass-card">
                                <span className="stat-number text-gradient">{t.about.statTopValue}</span>
                                <span className="stat-label">{t.about.statTop}</span>
                            </div>
                            <div className="stat-card glass-card">
                                <span className="stat-number text-gradient">{n('100%')}</span>
                                <span className="stat-label">{t.about.statFocus}</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-image reveal">
                        <div className="glass-card image-card">
                            <div className="image-placeholder">
                                <div className="abstract-shape shape-1"></div>
                                <div className="abstract-shape shape-2"></div>
                                <div className="abstract-shape shape-3"></div>

                                <div className="about-logo-container">
                                    <div className="about-logo-hero-wrap">
                                        <img src={eslfLogo} alt={t.about.logoAlt} className="about-brand-img" />
                                    </div>
                                    <div className="image-overlay-text">{t.about.firmName}</div>
                                    <div className="about-badge-tag">{t.about.badge}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
