import React, { createContext, useContext, useState } from 'react';
import translations from './translation.json';

const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const translateContent = () => {
    // Implement your translation logic here
  };

  const contextValue = {
    language,
    toggleLanguage,
    translateContent,
    translations,
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  return useContext(TranslationContext);
}