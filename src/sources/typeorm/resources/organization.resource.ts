import { menu } from '../../../admin/index.js';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions.js';
import { ResourceFunction } from '../../../admin/types/index.js';
import { Organization } from '../models/index.js';

export const CreateOrganizationResource: ResourceFunction<typeof Organization> = () => ({
  resource: Organization,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.typeorm,
  },
});
