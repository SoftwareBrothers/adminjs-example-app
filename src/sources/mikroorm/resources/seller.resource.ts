import { menu } from '../../../admin/index.js';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions.js';
import { ResourceFunction } from '../../../admin/types/index.js';
import { orm } from '../config.js';
import { Seller } from '../models/index.js';

export const CreateSellerResource: ResourceFunction<{ model: typeof Seller; orm: typeof orm }> = () => ({
  resource: {
    model: Seller,
    orm,
  },
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.mikroorm,
  },
});
