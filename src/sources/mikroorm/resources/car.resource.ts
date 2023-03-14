import { menu } from '../../../admin';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { ResourceFunction } from '../../../admin/types';
import { orm } from '../config';
import { Car } from '../models';

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
