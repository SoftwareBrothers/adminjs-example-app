import { menu } from '../../../admin';
import { Seller } from '../models';
import { orm } from '../config';

export const CreateSellerResource = () => ({
  resource: {
    model: Seller,
    orm,
  },
  options: {
    parent: menu.mikroorm,
  },
});
