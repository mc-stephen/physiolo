// // context/TranslationContext.js
// import { createContext, useState, useEffect, useContext } from 'react'
// import { loadTranslations } from '../utils/translation'

// const TranslationContext = createContext("")

// export const TranslationProvider = ({ children }) => {
//   const [locale, setLocale] = useState('en')
//   const [translations, setTranslations] = useState({})

//   useEffect(() => {
//     loadTranslations(locale).then(setTranslations).catch(console.error)
//   }, [locale])

//   const changeLocale = (newLocale) => {
//     setLocale(newLocale)
//   }

//   return (
//     <TranslationContext.Provider value={{ translations, changeLocale }}>
//       {children}
//     </TranslationContext.Provider>
//   )
// }

// export const useTranslation = () => useContext(TranslationContext)

import { useRouter } from "next/router";
import en from "@/languages/en/Header.json";
import de from "@/languages/de/components/header.json";

const translations = {
  en,
  de,
};

type Locale = 'en' | 'de';

interface Translations {
  [key: string]: string;
}

export default function useTranslation() {
  const { locale } = useRouter();
  const t = (key: string): string => {
    const translation = translations[locale as Locale] as Translations;
    return translation[key] || key;
  };
  return { t };
}

