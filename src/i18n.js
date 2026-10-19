import { createContext, useContext } from 'react';
import { content, LANGS } from './data/content';

export const LangContext = createContext({ lang: 'en', setLang: () => {} });

// Returns { lang, setLang, t } where t is the content for the active language.
export const useLang = () => {
    const { lang, setLang } = useContext(LangContext);
    return { lang, setLang, t: content[lang] };
};

export const detectInitialLang = () => {
    try {
        const saved = localStorage.getItem('lang');
        if (LANGS.includes(saved)) return saved;
    } catch {
        // storage unavailable
    }
    const nav = (typeof navigator !== 'undefined' && navigator.language) || 'en';
    return nav.toLowerCase().startsWith('fr') ? 'fr' : 'en';
};
