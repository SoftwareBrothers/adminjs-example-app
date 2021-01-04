import AdminBro, {
  ValidationError,
  ActionRequest,
  ActionResponse,
  ActionContext,
} from 'admin-bro';

import { sort, timestamps } from './sort';

export default {
  name: 'User (custom actions example)',
  sort,
  properties: {
    ...timestamps,
    'auth.password': {
      type: 'password',
    },
  },
  actions: {
    detailedStats: {
      actionType: 'resource',
      icon: 'Apps',
      label: 'Resource statistics',
      component: AdminBro.bundle('../components/detailed-stats'),
      handler: async () => ({
        true: 'ueas',
      }),
      showInDrawer: true,
    },
    edit: {
      before: async (request: ActionRequest) => {
        if (request.method === 'post') {
          throw new ValidationError({
            email: {
              message: 'Has to be filled',
            },
          });
        }
        return request;
      },
    },
    dontTouchThis: {
      actionType: 'record',
      label: "don't touch this!!!",
      icon: 'Exit',
      guard: 'You can setup guards before an action - just in case.',
      component: AdminBro.bundle('../components/dont-touch-this-action'),
      handler: async (
        _request: ActionRequest,
        _response: ActionResponse,
        data: ActionContext,
      ) => ({
        record: data.record.toJSON(),
      }),
    },
  },
};
