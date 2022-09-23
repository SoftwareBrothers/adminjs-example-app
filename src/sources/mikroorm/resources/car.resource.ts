import { Car } from '../models';
import { orm } from '../config';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';

export const CreateCarResource = () => ({
  resource: {
    model: Car,
    orm,
  },
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    properties: {
      meta: { type: 'mixed' },
      'meta.title': {
        type: 'string',
      },
      'meta.description': {
        type: 'string',
      },
    },
  },
});
