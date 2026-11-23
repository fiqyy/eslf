import { useState, useEffect, useRef, type CSSProperties } from 'react';
import './Fields.css';
import { useLanguage } from '../i18n/context';

interface FieldData {
    title: string;
    icon: string;
    desc: string;
    details: string;
}

const FIELD_ICONS = ['🏢', '⚖️', '🤝', '💡', '📋', '📝', '🏗️'];

const Fields = () => {
    const { t } = useLanguage();
    // Store the index so an open modal re-renders in the new language on toggle
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const closeBtnRef = useRef<HTMLButtonElement>(null);
    const lastTriggerRef = useRef<HTMLElement | null>(null);

    const fields: FieldData[] = t.fields.items.map((item, i) => ({ ...item, icon: FIELD_ICONS[i] }));

    const selectedField = selectedIndex === null ? null : fields[selectedIndex];
    const isOpen = selectedIndex !== null;

    useEffect(() => {
        if (!isOpen) return;

        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
        closeBtnRef.current?.focus();

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedIndex(null);
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
            window.removeEventListener('keydown', handleKeyDown);
            // Return focus to the card that opened the modal
            lastTriggerRef.current?.focus({ preventScroll: true });
        };
    }, [isOpen]);

    const openModal = (index: number, trigger: HTMLElement) => {
        lastTriggerRef.current = trigger;
        setSelectedIndex(index);
    };

    const closeModal = () => {
        setSelectedIndex(null);
    };

    return (
        <section id="fields" className="fields-section section-padding">
            <div className="container">
                <div className="text-center mb-xl reveal">
                    <div className="section-eyebrow">{t.fields.eyebrow}</div>
                    <h2 className="section-title">{t.fields.titlePrefix} <span className="text-gradient">{t.fields.titleHighlight}</span></h2>
                    <p className="section-subtitle">{t.fields.subtitle}</p>
                </div>

                <div className="fields-grid">
                    {fields.map((field, index) => (
                        <div
                            className="field-card glass-card reveal"
                            key={index}
                            style={{ '--reveal-delay': `${index * 0.08}s` } as CSSProperties}
                            onClick={(e) => openModal(index, e.currentTarget)}
                            role="button"
                            tabIndex={0}
                            aria-haspopup="dialog"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault(); // stop Space from scrolling the page
                                    openModal(index, e.currentTarget);
                                }
                            }}
                        >
                            <div className="field-icon">{field.icon}</div>
                            <h3 className="field-title">{field.title}</h3>
                            <p className="field-desc">{field.desc}</p>
                            <div className="field-action">
                                <span className="learn-more">{t.fields.explore} <span className="dir-arrow" aria-hidden="true">&rarr;</span></span>
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
                >
                    <div
                        className="modal-content glass-card"
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-field-title"
                    >
                        <button ref={closeBtnRef} className="modal-close" onClick={closeModal} aria-label={t.fields.closeAria} type="button">
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
                                {t.fields.consultCta}
                            </a>
                            <button className="btn btn-outline modal-close-btn" onClick={closeModal} type="button">
                                {t.fields.close}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Fields;
