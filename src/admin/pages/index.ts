/* eslint-disable @typescript-eslint/no-unused-vars */
import { AdminJSOptions } from 'adminjs/types/src';
import { CUSTOM_PAGE, DESIGN_SYSTEM_PAGE } from '../components.bundler';

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
