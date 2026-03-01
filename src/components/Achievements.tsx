import './Achievements.css';

const Achievements = () => {
    const achievements = [
        {
            year: "2023",
            title: "Top Tier Law Firm",
            desc: "Recognized as a leading firm in corporate and commercial practice by legal directories.",
        },
        {
            year: "2022",
            title: "Landmark Arbitration",
            desc: "Successfully represented international clients in a multi-million-dollar arbitration dispute.",
        },
        {
            year: "2021",
            title: "M&A Deal of the Year",
            desc: "Acted as legal advisors in one of the region's most significant cross-border acquisitions.",
        },
        {
            year: "2020",
            title: "Expansion of Practice",
            desc: "Launched our specialized Technology, Media, and Telecommunications (TMT) practice.",
        }
    ];

    return (
        <section id="achievements" className="achievements-section section-padding">
            <div className="container">
                <div className="text-center mb-xl reveal">
                    <h2 className="section-title">Our <span className="text-gradient">Achievements</span></h2>
                    <p className="section-subtitle">A legacy of excellence, milestones, and client success.</p>
                </div>

                <div className="timeline">
                    {achievements.map((item, index) => (
                        <div className="timeline-item reveal" key={index}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content glass-card">
                                <span className="timeline-year text-gradient">{item.year}</span>
                                <h3 className="timeline-title">{item.title}</h3>
                                <p className="timeline-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
