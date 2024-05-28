"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  useEffect(() => {
    if (!locale) {
      router.push(router.pathname, router.asPath, { locale: defaultLocale });
    }
  }, [locale, router, defaultLocale]);

  return (
    <select onChange={changeLanguage} defaultValue={locale}>
      {locales?.map((loc) => (
        <option key={loc} value={loc}>
          {loc}
        </option>
      ))}
    </select>
  );
}
