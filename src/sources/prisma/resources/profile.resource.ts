import { menu } from '../../../admin';
import { client, dmmf } from '../config';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';

export const CreateProfileResource = () => ({
  resource: {
    model: dmmf.modelMap.Profile,
    client,
  },
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    parent: menu.prisma,
  },
});
