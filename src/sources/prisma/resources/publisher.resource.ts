import { menu } from '../../../admin';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { ResourceFunction } from '../../../admin/types';
import { client, dmmf } from '../config';

export const CreatePublisherResource: ResourceFunction<{
  model: typeof dmmf.modelMap.Publisher;
  client: typeof client;
}> = () => ({
  resource: {
    model: dmmf.modelMap.Publisher,
    client,
  },
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.prisma,
  },
});
