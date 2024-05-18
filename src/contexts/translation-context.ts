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
