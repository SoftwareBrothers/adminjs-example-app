import { menu } from '../../../admin/index.js';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions.js';
import { ResourceFunction } from '../../../admin/types/index.js';
import { orm } from '../config.js';
import { Owner } from '../models/index.js';

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
