import { menu } from '../../../admin/index.js';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions.js';
import { ResourceFunction } from '../../../admin/types/index.js';
import { client, dmmf } from '../config.js';

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
