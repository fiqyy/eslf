import { useState, useEffect } from 'react';
import './Fields.css';

interface FieldData {
    title: string;
    icon: string;
    desc: string;
    details: string;
}

const Fields = () => {
    const [selectedField, setSelectedField] = useState<FieldData | null>(null);

    const fields: FieldData[] = [
        {
            title: "Corporate & Commercial",
            icon: "🏢",
            desc: "Comprehensive legal support for enterprises, including M&A, restructuring, and governance.",
            details: "We advise on complex domestic and cross-border mergers and acquisitions, equity offerings, joint ventures, and restructuring transactions. Our attorneys possess extensive depth in company incorporation, hosting general assemblies and board meetings, formulating internal bylaws, and navigating regulatory compliance across the Egyptian and MENA markets."
        },
        {
            title: "Litigation & Dispute Strategy",
            icon: "⚖️",
            desc: "Robust representation in commercial, civil, administrative, and appellate proceedings.",
            details: "The ESLF litigation team combines market-leading local court advocacy with a strategic approach to client business problems. We specialize in managing complex multi-party claims, shareholder disputes, asset recovery, and commercial litigation, working closely across practice areas to mitigate regulatory and judicial risks."
        },
        {
            title: "Arbitration & Mediation (ADR)",
            icon: "🤝",
            desc: "Expert handling of institutional arbitration (CRCICA, ICC) and private mediation.",
            details: "We guide clients through alternative dispute resolution mechanisms, starting with reconciliation and mediation, through to institutional and ad hoc arbitration. Our lawyers regularly appear before leading arbitration forums such as the Cairo Regional Centre for International Commercial Arbitration (CRCICA) and the International Chamber of Commerce (ICC)."
        },
        {
            title: "Intellectual Property Rights",
            icon: "💡",
            desc: "Protection for trademarks, patents, copyrights, trade secrets, and licensing agreements.",
            details: "Our IP practice provides comprehensive protection, portfolio management, and enforcement for critical intellectual property assets. We handle trademark registration, patent litigation, anti-counterfeiting enforcement programs, technology transfer agreements, and complex licensing across diverse industrial and digital sectors."
        },
        {
            title: "Strategic Legal Consultancy",
            icon: "📋",
            desc: "Tailored strategic counsel addressing regulatory landscapes, compliance, and risk management.",
            details: "ESLF provides high-level legal consultancy services to multinational corporations, governmental bodies, and regional institutions. We deliver proactive regulatory roadmaps, legislative analyses, foreign investment advisory, and compliance frameworks customized to each client's strategic objectives."
        },
        {
            title: "Contract Management & Drafting",
            icon: "📝",
            desc: "Meticulous drafting, review, negotiation, and lifecycle management of commercial agreements.",
            details: "Our contract attorneys provide rigorous contract lifecycle drafting and negotiation. From initial risk assessment and drafting tailored contractual covenants to execution and post-closing compliance, we safeguard our clients' rights and commercial value across all transactions."
        },
        {
            title: "Real Estate & Infrastructure",
            icon: "🏗️",
            desc: "Navigating major property transactions, development projects, zoning, and licensing.",
            details: "Acting for property developers, major investment funds, and industrial leaders, we advise on the entire real estate lifecycle—from site acquisition, zoning approvals, and governmental licensing to construction contracting, commercial leasing, and asset disposition."
        }
    ];

    useEffect(() => {
        if (selectedField) {
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
        } else {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedField(null);
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedField]);

    const openModal = (field: FieldData) => {
        setSelectedField(field);
    };

    const closeModal = () => {
        setSelectedField(null);
    };

    return (
        <section id="fields" className="fields-section section-padding">
            <div className="container">
                <div className="text-center mb-xl reveal">
                    <div className="section-eyebrow">Practice Expertise</div>
                    <h2 className="section-title">Our <span className="text-gradient">Practice Areas</span></h2>
                    <p className="section-subtitle">Delivering specialized legal solutions and tactical counsel across core industry sectors.</p>
                </div>

                <div className="fields-grid">
                    {fields.map((field, index) => (
                        <div
                            className="field-card glass-card reveal"
                            key={index}
                            style={{ transitionDelay: `${index * 0.08}s` }}
                            onClick={() => openModal(field)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openModal(field); }}
                        >
                            <div className="field-icon">{field.icon}</div>
                            <h3 className="field-title">{field.title}</h3>
                            <p className="field-desc">{field.desc}</p>
                            <div className="field-action">
                                <span className="learn-more">Explore Details &rarr;</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Popup */}
            {selectedField && (
                <div 
                    className="modal-overlay" 
                    onClick={closeModal} 
                    role="dialog" 
                    aria-modal="true"
                    aria-labelledby="modal-field-title"
                >
                    <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div className="modal-header">
                            <div className="modal-icon">{selectedField.icon}</div>
                            <h3 id="modal-field-title" className="modal-title text-gradient">{selectedField.title}</h3>
                        </div>
                        <div className="modal-body">
                            <p>{selectedField.details}</p>
                        </div>
                        <div className="modal-footer">
                            <a href="#contact" className="btn btn-primary modal-cta-btn" onClick={closeModal}>
                                Consult on this Practice Area
                            </a>
                            <button className="btn btn-outline modal-close-btn" onClick={closeModal} type="button">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Fields;
