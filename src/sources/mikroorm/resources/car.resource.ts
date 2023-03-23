import { menu } from '../../../admin/index.js';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions.js';
import { ResourceFunction } from '../../../admin/types/index.js';
import { orm } from '../config.js';
import { Car } from '../models/index.js';

export const CreateCarResource: ResourceFunction<{ model: typeof Car; orm: typeof orm }> = () => ({
  resource: {
    model: Car,
    orm,
  },
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.mikroorm,
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
