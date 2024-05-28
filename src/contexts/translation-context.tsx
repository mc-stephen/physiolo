import React, { ReactNode, createContext, useState } from "react";
import en from "@/languages/en/Header.json";
import de from "@/languages/de/components/header.json";

// Define types for your locales
type LocaleType = {
  [key: string]: any;
};

// Import your JSON files
const enLocales: LocaleType = { ...en };
const deLocales: LocaleType = { ...de };

// Define the context type
type LocaleContextType = {
  locale: LocaleType;
  setLocale: React.Dispatch<React.SetStateAction<LocaleType>>;
};

// Create the context
const LocaleContext = createContext<LocaleContextType>({
  locale: {},
  setLocale: () => {},
});

// Provider component
const SidebarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<LocaleType>(deLocales);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default SidebarProvider;
export { LocaleContext, enLocales, deLocales };
