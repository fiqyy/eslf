import './About.css';
import eslfLogo from '../assets/eslflogo-transparent.png';

const About = () => {
    return (
        <section id="about" className="about-section section-padding">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content reveal">
                        <div className="section-eyebrow">Established Heritage</div>
                        <h2 className="section-title">About <span className="text-gradient">Our Firm</span></h2>
                        <h3 className="about-subtitle">Embracing Change with an Unwavering Vision</h3>

                        <p>
                            ESLF has achieved a record of success and growth that today makes it one of the leading firms in Egypt. With over 32 attorneys and consultants, the firm provides quality legal and consultancy services to a broad base of multinational, Egyptian and regional clients through its office in Egypt .
                            The firm provides legal advice and advanced services to many of the most dynamic, local and multinational, corporations and has the knowledge and resources to deliver high quality legal services required.
                        </p>
                        <p>
                            Founded in 1987 by Mr. Emad Soliman following his distinguished tenure as Government Public Sector Counsellor for EgyptAir, ESLF operates at the forefront of corporate law, commercial litigation, and high-stakes arbitration.
                        </p>

                        <div className="about-stats-grid">
                            <div className="stat-card glass-card">
                                <span className="stat-number text-gradient">40+</span>
                                <span className="stat-label">Years of Excellence</span>
                            </div>
                            <div className="stat-card glass-card">
                                <span className="stat-number text-gradient">32+</span>
                                <span className="stat-label">Attorneys & Experts</span>
                            </div>
                            <div className="stat-card glass-card">
                                <span className="stat-number text-gradient">Top</span>
                                <span className="stat-label">Tier Directory Rank</span>
                            </div>
                            <div className="stat-card glass-card">
                                <span className="stat-number text-gradient">100%</span>
                                <span className="stat-label">Client Focus</span>
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
                                        <img src={eslfLogo} alt="Emad Soliman Law Firm Emblem" className="about-brand-img" />
                                    </div>
                                    <div className="image-overlay-text">Emad Soliman Law Firm</div>
                                    <div className="about-badge-tag">Cairo Headquarters &bull; Est. 1987</div>
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
