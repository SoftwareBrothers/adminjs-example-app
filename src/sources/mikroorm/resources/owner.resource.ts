import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { Owner } from '../models';
import { orm } from '../config';

export const CreateOwnerResource = () => ({
  resource: {
    model: Owner,
    orm,
  },
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    properties: {
      lastName: { isTitle: true },
    },
  },
});
