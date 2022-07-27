import AdminJS, {
  createStore,
  getAssets,
  getBranding,
  getFaviconFromBranding,
  initializeAssets,
  initializeBranding,
  initializeLocale,
  ViewHelpers,
} from 'adminjs';
import { combineStyles } from '@adminjs/design-system';
import i18n from 'i18next';
import { ComponentProps, serveComponent } from './serve-component';

export const getHtml = async (admin: AdminJS, Component: React.FC, props: ComponentProps) => {
  const h = new ViewHelpers({ options: admin.options });
  const store = createStore();
  const branding = await getBranding(admin);
  const assets = await getAssets(admin);
  const faviconTag = getFaviconFromBranding(branding);

  const scripts = (assets?.scripts ?? []).map((s) => `<script src="${s}"></script>`);
  const styles = (assets?.styles ?? []).map((l) => `<link rel="stylesheet" type="text/css" href="${l}">`);
  const theme = combineStyles(branding?.theme ?? {});

  store.dispatch(initializeBranding(branding));
  store.dispatch(initializeAssets(assets));
  store.dispatch(initializeLocale(admin.locale));

  const { locale } = store.getState();
  i18n.init({
    resources: {
      [locale.language]: {
        translation: locale.translations,
      },
    },
    lng: locale.language,
    interpolation: { escapeValue: false },
  });

  const { style, html: component } = serveComponent(Component, props, {
    theme,
    i18n,
    store,
  });

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>${branding.companyName}</title>
      ${style}
      ${faviconTag}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" type="text/css">
      ${styles.join('\n')}

      <script src="${h.assetPath('global.bundle.js', assets)}"></script>
      <script src="${h.assetPath('design-system.bundle.js', assets)}"></script>
    </head>
    <body>
      <div id="app">${component}</div>
      ${scripts.join('\n')}
    </body>
    </html>
  `;
};

export default getHtml;
