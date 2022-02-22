import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { menu } from '../../../admin';
import { Organization } from '../models';

export const CreateOrganizationResource = (): CreateResourceResult<typeof Organization> => ({
  resource: Organization,
  options: {
    parent: menu.typeorm,
  },
});
