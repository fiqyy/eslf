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
            title: "Corporate",
            icon: "🏢",
            desc: "Comprehensive legal support for businesses, including M&A and corporate governance.",
            details: "We advise on some of the world's largest and most complex mergers and acquisitions transactions, equity offerings and share swapping.Our cross-border expertise and substantial breadth and depth of legal resources in key financial and business centres across the Middle East, Europe and the Americas, offers an unrivalled expertise and ability to deliver M&A transactions at both the local and international level.ESLF lawyers and consultants are experts at company incorporation, arranging and hosting the general assembly and board of directors� meetings as well as formulating internal resolutions and by laws."
        },
        {
            title: "Litigation",
            icon: "⚖️",
            desc: "Robust representation in commercial, civil, and administrative disputes.",
            details: "The litigation team combines market leading local capability in each of our regions with a unique ability to work efficiently with ESLF colleagues across our global network. We have expertise in litigation (including a strong trial capability), international and local arbitration. Our approach emphasises practical understanding of our clients' business problems and we have experience across every segment of the corporate and financial world. We specialise in managing complex cases involving multiple claims and parties. We also work closely with other ESLF practice areas to develop compliance initiatives and other techniques to help our clients reduce litigation risk."
        },
        {
            title: "Alternative Dispute Resolution",
            icon: "🤝",
            desc: "Expert handling of arbitration and mediation proceedings to resolve conflicts efficiently.",
            details: "The firm begins advising the client about the alternative dispute resolution firstly through reconciliation efforts, then mediation and finally, as a last resort, litigation. This is carried out through specialized entities such as the International Chamber of Commerce (ICC) and the Cairo Regional Centre for International Commercial Arbitration (CRCICA). Alternatively, these solutions can be carried out through the offices of ESLF who can administer the dispute resolution through a fair and impartial process on an ad hoc basis. In this way, ESLF is careful to limit the exorbitant costs of using other arbitration authorities or entering into litigation cost as well as providing a fast service"
        },
        {
            title: "Intellectual Property Rights protection & licensing",
            icon: "💡",
            desc: "Protecting innovations, trademarks, and managing complex licensing agreements.",
            details: "Our intellectual property specialists provide a flexible, one-stop service that can manage and protect your critical IP assets globally. The team of dedicated IP legal professionals has the resources and expertise you need to help protect and further your business interests.Advising on a full range of counselling and dispute resolution matters, including multi- jurisdictional IP litigation and arbitration, regional enforcement programmes and licensing programmes, our IP team is experienced in all the major financial and industrial centres across the Middle East, US and Europe.Local or cross - border, we can help you manage and resolve patents, trademarks, copyrights, designs and trade secret disputes.Our technical expertise and industry insight ensures we always focus on your commercial goals and objectives.Our industry experience includes financial services, computer hardware and software, computer systems and networks, biotechnology and pharmaceuticals, chemicals, automotive and aerospace, media and entertainment, telecom and consumer electronics.The firm's practice involves representation of clients in court and administrative proceedings. It has substantial experience in litigation of patents, trademarks, trade secrets and copyrights."
        },
        {
            title: "Consultancy",
            icon: "📋",
            desc: "Strategic legal advice tailored to your specific industry challenges and goals.",
            details: "The firm provides its clients with the highest level of consultancy services through its global network of law firms and consultants across the Middle East, Europe and the US."
        },
        {
            title: "Contract management & drafting",
            icon: "📝",
            desc: "Meticulous drafting, review, and negotiation of all commercial agreements.",
            details: "The team offers efficient contract management and drafting in a manner that the contract is tailor made for the client�s needs and requirements. The lawyers get involved from the stage of drafting, amending ending up with the signature of the contract and then the follow up on the contract implementation with its various clauses and stages."
        },
        {
            title: "Real Estate",
            icon: "🏗️",
            desc: "Navigating complex property transactions, development projects, and zoning laws.",
            details: "Acting for the real estate industry's leading players, we advise on the full range of real estate-related transactions.With an integrated network of leading companies, we have the commitment, resources and know-how to get the deals done, whatever and wherever they are.Forward thinking and commercial in our approach, with a recognised ability to deliver complex deals, we handle the entire property 'life-cycle' from the initial acquisition, development, leasing, joint venturing and financing through to the final exit.These services are over and above the firm's commitment to represent the client governmental and administrative authorities in obtaining the necessary permits and licences while maintaining impartiality in relation to the existing laws and regulations."
        }
    ];

    useEffect(() => {
        if (selectedField) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
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
                    <h2 className="section-title">Our <span className="text-gradient">Practice Areas</span></h2>
                    <p className="section-subtitle">Delivering specialized legal solutions across diverse sectors.</p>
                </div>

                <div className="fields-grid">
                    {fields.map((field, index) => (
                        <div
                            className="field-card glass-card reveal"
                            key={index}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                            onClick={() => openModal(field)}
                        >
                            <div className="field-icon">{field.icon}</div>
                            <h3 className="field-title">{field.title}</h3>
                            <p className="field-desc">{field.desc}</p>
                            <div className="field-action">
                                <span className="learn-more">Learn more &rarr;</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Popup */}
            {selectedField && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal} aria-label="Close modal">
                            &times;
                        </button>
                        <div className="modal-header">
                            <div className="modal-icon">{selectedField.icon}</div>
                            <h3 className="modal-title text-gradient">{selectedField.title}</h3>
                        </div>
                        <div className="modal-body">
                            <p>{selectedField.details}</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-outline" onClick={closeModal}>Close Details</button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Fields;
