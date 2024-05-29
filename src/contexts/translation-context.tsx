"use client";

import { english } from "./english-import/import";
import { germany } from "./germany-import/import";
import React, { ReactNode, createContext, useState } from "react";

// Define types for your locales
type LocaleType = {
  [key: string]: any;
};

// Import your JSON files
const enLocales: LocaleType = { ...english };
const deLocales: LocaleType = { ...germany };

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
const LocaleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<LocaleType>(deLocales);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export type { LocaleType };
export default LocaleProvider;
export { LocaleContext, enLocales, deLocales };
