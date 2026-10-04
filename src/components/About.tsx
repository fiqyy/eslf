import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section section-padding">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content reveal">
                        <h2 className="section-title">About <span className="text-gradient">Our Firm</span></h2>
                        <h3 className="about-subtitle">Embracing Change with a Firm Vision</h3>
                        <p>
                            ESLF has achieved a record of success and growth that today makes it one of the leading firms in Egypt. With over 32 attorneys and consultants, the firm provides quality legal and consultancy services to a broad base of multinational, Egyptian and regional clients through its office in Egypt .
                            The firm provides legal advice and advanced services to many of the most dynamic, local and multinational, corporations and has the knowledge and resources to deliver high quality legal services required.
                        </p>
                        <p>
                            Guided by a commitment to integrity, excellence, and proactive problem-solving, our
                            firm consists of elite lawyers specialized in corporate, litigation, arbitration, and
                            specialized legal domains. We don't just solve problems; we prevent them.
                        </p>
                        <div className="about-stats-mini">
                            <div className="stat-mini">
                                <span className="stat-number text-gradient">40+</span>
                                <span className="stat-label">Years of Trust</span>
                            </div>
                            <div className="stat-mini">
                                <span className="stat-number text-gradient">Top</span>
                                <span className="stat-label">Tier Ranking</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-image reveal">
                        <div className="glass-card image-card">
                            {/* Using a premium placeholder abstract graphic context */}
                            <div className="image-placeholder">
                                <div className="abstract-shape shape-1"></div>
                                <div className="abstract-shape shape-2"></div>
                                <div className="image-overlay-text">ESLF Excellence</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
