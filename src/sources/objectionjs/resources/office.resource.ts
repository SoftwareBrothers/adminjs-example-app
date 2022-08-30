import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { menu } from '../../../admin';
import { Office } from '../models';

export const CreateOfficeResource = (): CreateResourceResult<typeof Office> => ({
  resource: Office,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.objection,
    properties: {
      createdAt: { isVisible: { edit: false, list: true, show: true, filter: true } },
      updatedAt: { isVisible: { edit: false, list: true, show: true, filter: true } },
    },
  },
});
