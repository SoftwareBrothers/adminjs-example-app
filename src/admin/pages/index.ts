/* eslint-disable @typescript-eslint/no-unused-vars */
import { AdminJSOptions } from 'adminjs';

import { CUSTOM_PAGE, DESIGN_SYSTEM_PAGE } from '../components.bundler.js';

const pages: AdminJSOptions['pages'] = {
  customPage: {
    component: CUSTOM_PAGE,
    icon: 'File',
    handler: async (request, response, context) => {
      return {
        text: 'I am fetched from the backend',
      };
    },
  },
  designSystemExamples: {
    component: DESIGN_SYSTEM_PAGE,
    icon: 'Layout',
  },
};

export default pages;
