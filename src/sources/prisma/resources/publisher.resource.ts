import { menu } from '../../../admin';
import { client, dmmf } from '../config';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';

export const CreatePublisherResource = () => ({
  resource: {
    model: dmmf.modelMap.Publisher,
    client,
  },
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    parent: menu.prisma,
  },
});
