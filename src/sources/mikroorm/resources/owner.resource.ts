import { menu } from '../../../admin';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { ResourceFunction } from '../../../admin/types';
import { orm } from '../config';
import { Owner } from '../models';

export const CreateOwnerResource: ResourceFunction<{ model: typeof Owner; orm: typeof orm }> = () => ({
  resource: {
    model: Owner,
    orm,
  },
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.mikroorm,
    properties: {
      lastName: { isTitle: true },
    },
  },
});
