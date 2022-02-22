import { menu } from '../../../admin';
import { Owner } from '../models';
import { orm } from '../config';

export const CreateOwnerResource = () => ({
  resource: {
    model: Owner,
    orm,
  },
  options: {
    parent: menu.mikroorm,
    properties: {
      lastName: { isTitle: true },
    },
  },
});
