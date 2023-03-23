import { menu } from '../../../admin/index.js';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions.js';
import { ResourceFunction } from '../../../admin/types/index.js';
import { Office } from '../models/index.js';

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
