import type { ResourceOptions, FeatureType } from 'adminjs';

export type CreateResourceResult<T> = {
  resource: T;
  options: ResourceOptions;
  features?: Array<FeatureType>;
};

export type ResourceFunction<T = unknown> = () => CreateResourceResult<T>;
