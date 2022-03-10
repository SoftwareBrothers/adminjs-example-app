import { ResourceOptions } from 'adminjs';

export type CreateResourceResult<T> = {
  resource: T;
  options: ResourceOptions;
  features?: Array<(options: object) => object>;
};
