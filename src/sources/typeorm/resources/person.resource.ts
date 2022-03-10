import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { menu } from '../../../admin';
import { Person } from '../models';
import { DETAILED_STATS, DONT_TOUCH_THIS_ACTION } from '../../../admin/components.bundler';
import { validateEmail } from '../handlers/validate-email.handler';

export const CreatePersonResource = (): CreateResourceResult<typeof Person> => ({
  resource: Person,
  options: {
    parent: menu.typeorm,
    actions: {
      new: {
        before: [validateEmail],
      },
      edit: {
        before: [validateEmail],
      },
      detailedStats: {
        actionType: 'resource',
        icon: 'Apps',
        name: 'Resource statistics',
        component: DETAILED_STATS,
        handler: async () => {
          return { true: 'ueas' };
        },
        showInDrawer: true,
      },
      dontTouchThis: {
        actionType: 'record',
        icon: 'Exit',
        guard: 'youCanSetupGuards',
        component: DONT_TOUCH_THIS_ACTION,
        handler: async (request, response, context) => {
          return {
            record: context.record.toJSON(),
          };
        },
      },
    },
  },
});
