import type { LocaleTranslations } from 'adminjs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const common = require('./common.json') as typeof import('./common.json');
const components = require('./components.json') as typeof import('./components.json');
const pages = require('./pages.json') as typeof import('./pages.json');

const deLocale: LocaleTranslations = {
  ...common,
  ...components,
  ...pages,
};

export default deLocale;
