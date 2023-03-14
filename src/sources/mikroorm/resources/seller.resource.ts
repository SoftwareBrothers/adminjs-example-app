import { menu } from '../../../admin';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { ResourceFunction } from '../../../admin/types';
import { orm } from '../config';
import { Seller } from '../models';

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
