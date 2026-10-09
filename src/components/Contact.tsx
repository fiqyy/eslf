import './Contact.css';

const Contact = () => {
    const email = "contact@eslf.com";
    const phone = "(+202) 24141304";
    const address = "38HQ+RJW Nasr City, Cairo, Egypt";
    const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

    return (
        <section id="contact" className="contact-section section-padding">
            <div className="container">
                <div className="contact-header text-center mb-xl reveal">
                    <div className="section-eyebrow">Direct Engagement</div>
                    <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
                    <p className="section-subtitle">Reach out directly for top-tier legal consultation, strategic advocacy, and corporate counsel.</p>
                </div>

                <div className="contact-grid">
                    {/* Location / Map Card */}
                    <div className="contact-card glass-card map-card reveal">
                        <div className="card-header-flex">
                            <span className="card-icon-badge">📍</span>
                            <div>
                                <h3 className="card-title">Cairo Office</h3>
                                <p className="card-desc">Visit our office in Nasr City, Cairo.</p>
                            </div>
                        </div>

                        <a
                            href={mapDirectionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="map-container block-link"
                            aria-label="Open directions in Google Maps"
                        >
                            <div className="map-placeholder">
                                <div className="map-marker-anim">
                                    <div className="marker">📍</div>
                                    <div className="pulse"></div>
                                </div>
                                <div className="map-overlay-text">
                                    <span className="route-btn">
                                        <span>Navigate via Maps</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </span>
                                </div>
                            </div>
                        </a>
                        <div className="address-text">
                            <strong>Emad Soliman Law Firm (ESLF)</strong><br />
                            38HQ+RJW Nasr City, Cairo Governorate, Egypt
                        </div>
                    </div>

                    {/* Contact Details Card */}
                    <div className="contact-card glass-card details-card reveal" style={{ transitionDelay: '0.15s' }}>
                        <div className="card-header-flex">
                            <span className="card-icon-badge">⚖️</span>
                            <div>
                                <h3 className="card-title">Direct Communications</h3>
                                <p className="card-desc">Our senior partners and legal team are at your service.</p>
                            </div>
                        </div>

                        <div className="contact-methods">
                            <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="contact-method-btn phone-btn" aria-label="Call ESLF directly">
                                <div className="method-icon">📞</div>
                                <div className="method-info">
                                    <span className="method-label">Direct Hotline</span>
                                    <span className="method-value">{phone}</span>
                                </div>
                                <span className="method-action-tag">Call Now</span>
                            </a>

                            <a href={`mailto:${email}`} className="contact-method-btn email-btn" aria-label="Email ESLF">
                                <div className="method-icon">✉️</div>
                                <div className="method-info">
                                    <span className="method-label">Official Inquiries</span>
                                    <span className="method-value">{email}</span>
                                </div>
                                <span className="method-action-tag">Send Email</span>
                            </a>
                        </div>

                        <div className="social-links-container">
                            <h4 className="social-title">Professional Networks</h4>
                            <div className="social-icons">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                                    <span>In</span>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                                    <span>Tw</span>
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                                    <span>Fb</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
