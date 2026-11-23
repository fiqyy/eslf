import './Hero.css';
import { useLanguage } from '../i18n/context';

const Hero = () => {
    const { t, n } = useLanguage();
    return (
        <section id="home" className="hero-section">
            <div className="hero-background"></div>
            <div className="hero-ambient-glow"></div>

            <div className="container hero-content">
                <div className="hero-badge">
                    <span className="badge-pulse"></span>
                    <span>{t.hero.badge}</span>
                </div>

                <h1 className="hero-title">
                    {t.hero.titleLine1} <br />
                    <span className="text-gradient">{t.hero.titleHighlight}</span>
                </h1>

                <p className="hero-subtitle">
                    {t.hero.subtitle}
                </p>

                <div className="hero-cta">
                    <a href="#contact" className="btn btn-primary hero-btn-main">
                        <span>{t.hero.ctaMain}</span>
                        <svg className="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                    <a href="#about" className="btn btn-outline hero-btn-sec">
                        {t.hero.ctaSecondary}
                    </a>
                </div>

                <div className="hero-trust-bar">
                    <div className="trust-item">
                        <span className="trust-val">{n('40+')}</span>
                        <span className="trust-txt">{t.hero.trustYears}</span>
                    </div>
                    <div className="trust-sep"></div>
                    <div className="trust-item">
                        <span className="trust-val">{n('32+')}</span>
                        <span className="trust-txt">{t.hero.trustAttorneys}</span>
                    </div>
                    <div className="trust-sep"></div>
                    <div className="trust-item">
                        <span className="trust-val">{n('100%')}</span>
                        <span className="trust-txt">{t.hero.trustDedication}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
