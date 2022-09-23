import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { ComplicatedModel } from '../models';

export const CreateComplicatedResource = (): CreateResourceResult<typeof ComplicatedModel> => ({
  resource: ComplicatedModel,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    properties: {
      _id: {
        isTitle: true,
      },
    },
  },
});
