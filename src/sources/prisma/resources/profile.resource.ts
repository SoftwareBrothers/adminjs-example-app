import { menu } from '../../../admin';
import { client, dmmf } from '../config';

export const CreateProfileResource = () => ({
  resource: {
    model: dmmf.modelMap.Profile,
    client,
  },
  options: {
    parent: menu.prisma,
  },
});
