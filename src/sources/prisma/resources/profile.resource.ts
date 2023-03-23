import { menu } from '../../../admin/index.js';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions.js';
import { ResourceFunction } from '../../../admin/types/index.js';
import { client, dmmf } from '../config.js';

export const CreateProfileResource: ResourceFunction<{
  model: typeof dmmf.modelMap.Profile;
  client: typeof client;
}> = () => ({
  resource: {
    model: dmmf.modelMap.Profile,
    client,
  },
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.prisma,
  },
});
