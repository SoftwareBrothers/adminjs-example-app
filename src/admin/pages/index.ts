import { AdminJSOptions } from 'adminjs/types/src';
import { SOME_STATS, DESIGN_SYSTEM_PAGE } from '../components.bundler';

const pages: AdminJSOptions['pages'] = {
  'Custom Page': {
    component: SOME_STATS,
    icon: 'File',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handler: async (request, response, context) => {
      return {
        text: 'I am fetched from the backend',
      };
    },
  },
  'Design system': { component: DESIGN_SYSTEM_PAGE, icon: 'Layout' },
};

export default pages;
