import path from 'path';
import url from 'url';

import type { ThemeConfig } from 'adminjs';
import { themeConfig } from './custom-theme/index.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const customTheme: ThemeConfig = {
  ...themeConfig,
  bundlePath: path.join(__dirname, `./${themeConfig.id}`, '/theme.bundle.js'),
  stylePath: path.join(__dirname, `./${themeConfig.id}`, '/style.css'),
};
