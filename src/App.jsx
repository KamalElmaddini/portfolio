import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LangContext, detectInitialLang } from './i18n';
import { content } from './data/content';

const save = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // storage unavailable — the choice still applies for this visit
  }
};

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light';
    } catch {
      return 'light';
    }
  });
  const [lang, setLang] = useState(detectInitialLang);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    save('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = content[lang].meta.title;
    save('lang', lang);
  }, [lang]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  const langValue = useMemo(() => ({ lang, setLang }), [lang]);

  return (
    <LangContext.Provider value={langValue}>
      <div className="app">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LangContext.Provider>
  );
}

export default App;
