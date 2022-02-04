import AdminJS, { OverridableComponent } from 'adminjs';
import path from 'path';

export const bundle = (
  url: string,
  componentName?: OverridableComponent,
): string => AdminJS.bundle(
  path.join(__dirname, url),
  componentName,
);

/**
 * Common components
 */
export const PASSWORD_EDIT = bundle('components/password-edit');
export const SOME_STATS = bundle('components/some-stats');
export const PRODUCTS_LIST = bundle('components/products-list');
export const DONT_TOUCH_THIS_ACTION = bundle('components/dont-touch-this-action');
export const DETAILED_STATS = bundle('components/detailed-stats');
export const THUMB = bundle('components/thumb');
