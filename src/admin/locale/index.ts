import { locales as AdminJSLocales } from 'adminjs';
import de from './de';
import en from './en';

const availableLanguages = {
  ...AdminJSLocales,
  en,
  de,
};

const localeKey = process.env.LOCALE || 'en';
const locale = availableLanguages[localeKey];

console.log(`Selected locale - "%s"`, localeKey);

export default {
  ...locale,
  availableLanguages: Object.keys(availableLanguages),
};
