import path from 'path';
import url from 'url';

import type { ThemeConfig } from 'adminjs';
import { themeConfig } from './custom-theme/index.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const getThemeDir = (theme: string) => path.join(__dirname, `./${theme}`);

export const customTheme: ThemeConfig = {
  ...themeConfig,
  bundlePath: `${getThemeDir(themeConfig.id)}/theme.bundle.js`,
  stylePath: `${getThemeDir(themeConfig.id)}/style.css`,
};
