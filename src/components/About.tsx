import './About.css';
import founderPhoto from '../assets/emad-soliman.jpeg';
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
                            <figure className="founder-photo">
                                <img
                                    src={founderPhoto}
                                    alt={t.about.photoAlt}
                                    className="founder-photo-img"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <figcaption className="founder-caption">
                                    <span className="founder-name">{t.about.founderName}</span>
                                    <span className="founder-role">{t.about.founderRole}</span>
                                    <span className="about-badge-tag">{t.about.badge}</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
