import { menu } from '../../../admin';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { ResourceFunction } from '../../../admin/types';
import { Office } from '../models';

export const CreateOfficeResource: ResourceFunction<typeof Office> = () => ({
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
