import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { Theme } from '@adminjs/design-system';
import i18n from 'i18next';
import { LoginProps } from './components/login';
import { Store } from 'redux';
import { ReduxState } from 'adminjs';

export interface ServeComponentOptions {
  theme: Theme;
  i18n: typeof i18n;
  store: Store<ReduxState>;
}

export type ComponentProps = LoginProps | Record<string, any>;

export const serveComponent = (
  Component: React.FC<any>,
  props: ComponentProps = {},
  { theme, i18n, store }: ServeComponentOptions
) => {
  const sheet = new ServerStyleSheet();

  const html = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider theme={theme}>
            <Component {...props} />
          </ThemeProvider>
        </I18nextProvider>
      </Provider>
    </StyleSheetManager>
  );

  sheet.collectStyles(<Component {...props} />);
  const style = sheet.getStyleTags();
  sheet.seal();

  return { style, html };
};

export default serveComponent;
