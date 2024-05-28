"use server";

import { useContext, useEffect } from "react";
import selectedLocales, {
  LocaleContext,
  deLocales,
  enLocales,
} from "@/contexts/translation-context";

export default function LocaleSwitcher() {
  const { locale, setLocale } = useContext(LocaleContext);

  const changeToEnglish = () => {
    setLocale(enLocales);
  };

  return (
    <select onChange={() => changeToEnglish} defaultValue="">
      <option hidden>Select Langs</option>
      <option value="en">English</option>
      <option value="de">Germany</option>
      <option value="es">Spanish</option>
    </select>
  );
}
