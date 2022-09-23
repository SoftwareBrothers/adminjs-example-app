import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { Person } from '../models';
import { validateEmail } from '../handlers/validate-email.handler';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';

export const CreatePersonResource = (): CreateResourceResult<typeof Person> => ({
  resource: Person,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
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
        name: 'Resource statistics',
        handler: async () => {
          return { true: 'ueas' };
        },
      },
      dontTouchThis: {
        actionType: 'record',
        handler: async (request, response, context) => {
          return {
            record: context.record.toJSON(),
          };
        },
      },
    },
  },
});
