import { menu } from '../../../admin';
import { DETAILED_STATS, DONT_TOUCH_THIS_ACTION } from '../../../admin/components.bundler';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { ResourceFunction } from '../../../admin/types';
import { validateEmail } from '../handlers/validate-email.handler';
import { Person } from '../models';

export const CreatePersonResource: ResourceFunction<typeof Person> = () => ({
  resource: Person,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.typeorm,
    properties: {
      phone: {
        type: 'phone',
      },
    },
    actions: {
      new: {
        before: [validateEmail],
      },
      edit: {
        before: [validateEmail],
      },
      detailedStats: {
        actionType: 'resource',
        icon: 'BarChart2',
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
