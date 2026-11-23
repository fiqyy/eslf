import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { LanguageContext, type LanguageContextValue } from './context';
import { translations, type Language } from './translations';

const STORAGE_KEY = 'eslf-lang';
const ARABIC_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

const toArabicDigits = (value: string): string =>
    value.replace(/[0-9]/g, d => ARABIC_DIGITS[Number(d)]).replace(/%/g, '٪');

// Recursively convert every string in the translation tree so Arabic copy
// always shows Arabic-Indic numerals, even for years/counts inside sentences.
const deepConvert = <T,>(node: T): T => {
    if (typeof node === 'string') return toArabicDigits(node) as T;
    if (Array.isArray(node)) return node.map(deepConvert) as T;
    if (node && typeof node === 'object') {
        return Object.fromEntries(
            Object.entries(node).map(([k, v]) => [k, deepConvert(v)])
        ) as T;
    }
    return node;
};

const arabicTranslation = deepConvert(translations.ar);

const getInitialLang = (): Language => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'en' || stored === 'ar') return stored;
    } catch {
        // localStorage unavailable (private mode etc.)
    }
    return navigator.language?.toLowerCase().startsWith('ar') ? 'ar' : 'en';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLangState] = useState<Language>(getInitialLang);
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    const t = lang === 'ar' ? arabicTranslation : translations.en;

    useEffect(() => {
        const root = document.documentElement;
        root.lang = lang;
        root.dir = dir;
        document.title = t.meta.title;
        document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch {
            // ignore
        }
    }, [lang, dir, t]);

    const setLang = useCallback((next: Language) => setLangState(next), []);
    const toggleLang = useCallback(() => setLangState(l => (l === 'ar' ? 'en' : 'ar')), []);
    const n = useCallback(
        (value: string | number) => (lang === 'ar' ? toArabicDigits(String(value)) : String(value)),
        [lang]
    );

    const value = useMemo<LanguageContextValue>(
        () => ({ lang, dir, t, setLang, toggleLang, n }),
        [lang, dir, t, setLang, toggleLang, n]
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
