import { menu } from '../../../admin';
import { client, dmmf } from '../config';

export const CreatePublisherResource = () => ({
  resource: {
    model: dmmf.modelMap.Publisher,
    client,
  },
  options: {
    parent: menu.prisma,
  },
});
