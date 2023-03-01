/* eslint-disable @typescript-eslint/no-unused-vars */
import { AdminJSOptions } from 'adminjs/types/src';
import { SOME_STATS, DESIGN_SYSTEM_PAGE } from '../components.bundler';

const pages: AdminJSOptions['pages'] = {
  'Custom Page': {
    component: SOME_STATS,
    icon: 'File',
    handler: async (request, response, context) => {
      return {
        text: 'I am fetched from the backend',
      };
    },
  },
  'Design System': {
    component: DESIGN_SYSTEM_PAGE,
    icon: 'Layout',
  },
};

export default pages;
