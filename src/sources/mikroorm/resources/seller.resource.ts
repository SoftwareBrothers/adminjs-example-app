import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { Seller } from '../models';
import { orm } from '../config';

export const CreateSellerResource = () => ({
  resource: {
    model: Seller,
    orm,
  },
  features: [useEnvironmentVariableToDisableActions()],
  options: {},
});
