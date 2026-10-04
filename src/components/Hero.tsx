import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-background"></div>
            <div className="container hero-content">
                <h1 className="hero-title reveal">
                    Excellence in <br />
                    <span className="text-gradient">Legal Advocacy</span>
                </h1>
                <p className="hero-subtitle reveal">
                    Emad Soliman Law Firm (ESLF) is one of the leading law firms in Egypt. A growing law firm based in Cairo, ESLF was established in 1987 by Mr. Emad Soliman who decided to cease his consultancy services in Egypt Air as Government Public Sector Counsellor.

                </p>
                <div className="hero-cta reveal">
                    <a href="#contact" className="btn btn-primary">Contact ESLF</a>
                    <a href="#about" className="btn btn-outline">Discover ESLF</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
