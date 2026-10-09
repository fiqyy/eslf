import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-background"></div>
            <div className="hero-ambient-glow"></div>

            <div className="container hero-content">
                <div className="hero-badge">
                    <span className="badge-pulse"></span>
                    <span>Cairo &bull; Est. 1987 &bull; Top Tier Legal Firm</span>
                </div>

                <h1 className="hero-title">
                    Excellence in <br />
                    <span className="text-gradient">Legal Advocacy</span>
                </h1>

                <p className="hero-subtitle">
                    Emad Soliman Law Firm (ESLF) is one of the leading law firms in Egypt. A growing law firm based in Cairo, ESLF was established in 1987 by Mr. Emad Soliman who decided to cease his consultancy services in Egypt Air as Government Public Sector Counsellor.
                </p>

                <div className="hero-cta">
                    <a href="#contact" className="btn btn-primary hero-btn-main">
                        <span>Get Legal Counsel</span>
                        <svg className="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                    <a href="#about" className="btn btn-outline hero-btn-sec">
                        Discover ESLF
                    </a>
                </div>

                <div className="hero-trust-bar">
                    <div className="trust-item">
                        <span className="trust-val">40+</span>
                        <span className="trust-txt">Years of Trust</span>
                    </div>
                    <div className="trust-sep"></div>
                    <div className="trust-item">
                        <span className="trust-val">32+</span>
                        <span className="trust-txt">Senior Attorneys</span>
                    </div>
                    <div className="trust-sep"></div>
                    <div className="trust-item">
                        <span className="trust-val">100%</span>
                        <span className="trust-txt">Client Dedication</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
