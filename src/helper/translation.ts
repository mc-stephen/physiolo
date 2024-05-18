export const loadTranslations = async (locale:string) => {
  const response = await fetch(`/locales/${locale}/Header.json`);
  return response.json();
};
