import './Contact.css';

const Contact = () => {
    // Placeholder data as requested
    const email = "contact@eslf.com";
    const phone = "(+202) 24141304";
    const address = "38HQ+RJW Nasr City"; // Placeholder destination for maps
    const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

    return (
        <section id="contact" className="contact-section section-padding">
            <div className="container">
                <div className="contact-header text-center mb-xl reveal">
                    <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
                    <p className="section-subtitle">Reach out for world-class legal representation and strategic counsel.</p>
                </div>

                <div className="contact-grid">
                    {/* Location / Map Card */}
                    <div className="contact-card glass-card map-card reveal">
                        <h3 className="card-title">Our Location</h3>
                        <p className="card-desc">Visit our headquarters. Click below to start your trip.</p>

                        <a href={mapDirectionsUrl} target="_blank" rel="noopener noreferrer" className="map-container block-link">
                            <div className="map-placeholder">
                                <div className="map-marker-anim">
                                    <div className="marker">📍</div>
                                    <div className="pulse"></div>
                                </div>
                                <div className="map-overlay-text">
                                    <span className="route-btn">Get Directions</span>
                                </div>
                            </div>
                        </a>
                        <div className="address-text">
                            <strong>Emad Soliman Law Firm</strong><br />
                            {address}
                        </div>
                    </div>

                    {/* Contact Details Card */}
                    <div className="contact-card glass-card details-card reveal" style={{ transitionDelay: '0.2s' }}>
                        <h3 className="card-title">Contact Information</h3>
                        <p className="card-desc">We are available around the clock to assist you.</p>

                        <div className="contact-methods">
                            <a href={`tel:${phone.replace(/\s/g, '')}`} className="contact-method-btn phone-btn">
                                <div className="method-icon">📞</div>
                                <div className="method-info">
                                    <span className="method-label">Call Us Directly</span>
                                    <span className="method-value">{phone}</span>
                                </div>
                            </a>

                            <a href={`mailto:${email}`} className="contact-method-btn email-btn">
                                <div className="method-icon">✉️</div>
                                <div className="method-info">
                                    <span className="method-label">Send an Email</span>
                                    <span className="method-value">{email}</span>
                                </div>
                            </a>
                        </div>

                        <div className="social-links">
                            <h4 className="social-title">Follow Us</h4>
                            <div className="social-icons">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">In</a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">Tw</a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">Fb</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
