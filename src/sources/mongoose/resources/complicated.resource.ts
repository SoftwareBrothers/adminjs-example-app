import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { menu } from '../../../admin';
import { ComplicatedModel } from '../models';

export const CreateComplicatedResource = (): CreateResourceResult<typeof ComplicatedModel> => ({
  resource: ComplicatedModel,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    parent: menu.mongoose,
    properties: {
      _id: {
        isTitle: true,
      },
    },
  },
});
