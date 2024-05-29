"use client";

import Styles from './styles.module.css';
import { useContext, useState, ChangeEvent } from "react";
import {
  LocaleContext,
  deLocales,
  enLocales,
} from "@/contexts/translation-context";

export default function LocaleSwitcher() {
  const { setLocale } = useContext(LocaleContext);
  const [translate, setTranslate] = useState<string>("de");

  const changeLocale = (event: ChangeEvent<HTMLSelectElement>) => {
    setTranslate(event.target.value);
    setLocale(event.target.value === "en" ? enLocales : deLocales);
  };

  return (
    <select className={Styles.styledDropdown} onChange={changeLocale} defaultValue={translate}>
      <option hidden>Select Langs</option>
      <option value="en">English</option>
      <option value="de">Germany</option>
    </select>
  );
}
