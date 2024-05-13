import { LANGUAGES } from "@/config";
import { dictionary } from "../content";
import { defaultLocale } from "@/middleware";

export const getLanguagesStaticParams = () => LANGUAGES.map((lang) => ({ lang }));

export const addLanguagesToStaticParams = (items: any[]) => {
  return items.flatMap((item) => LANGUAGES.map((lang) => ({ ...item, lang })));
};

export const i18n = (lang: string = defaultLocale) => dictionary[lang];
