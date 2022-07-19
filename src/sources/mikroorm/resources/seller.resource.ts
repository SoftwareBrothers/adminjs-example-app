import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { menu } from '../../../admin';
import { Seller } from '../models';
import { orm } from '../config';

export const CreateSellerResource = () => ({
  resource: {
    model: Seller,
    orm,
  },
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    parent: menu.mikroorm,
  },
});
