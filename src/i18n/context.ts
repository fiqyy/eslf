import { createContext, useContext } from 'react';
import type { Language, Translation } from './translations';

export interface LanguageContextValue {
    lang: Language;
    dir: 'ltr' | 'rtl';
    t: Translation;
    setLang: (lang: Language) => void;
    toggleLang: () => void;
    /** Formats digits for display: Arabic-Indic numerals (٠١٢٣…) in Arabic mode. */
    n: (value: string | number) => string;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export const useLanguage = (): LanguageContextValue => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
    return ctx;
};
