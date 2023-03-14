import { menu } from '../../../admin';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { ResourceFunction } from '../../../admin/types';
import { client, dmmf } from '../config';

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
