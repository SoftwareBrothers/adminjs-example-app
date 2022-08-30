import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { menu } from '../../../admin';
import { Manager } from '../models';

export const CreateManagerResource = (): CreateResourceResult<typeof Manager> => ({
  resource: Manager,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.objection,
    properties: {
      createdAt: { isVisible: { edit: false, list: true, show: true, filter: true } },
      updatedAt: { isVisible: { edit: false, list: true, show: true, filter: true } },
    },
  },
});
