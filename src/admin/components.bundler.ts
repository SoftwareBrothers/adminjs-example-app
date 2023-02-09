import AdminJS, { OverridableComponent } from 'adminjs';
import path from 'path';

export const bundle = (url: string, componentName?: OverridableComponent): string =>
  AdminJS.bundle(path.join(__dirname, url), componentName);

/**
 * Common components
 */
export const SOME_STATS = bundle('components/some-stats');
export const PRODUCTS_LIST = bundle('components/products-list');
export const DONT_TOUCH_THIS_ACTION = bundle('components/dont-touch-this-action');
export const DETAILED_STATS = bundle('components/detailed-stats');
export const THUMB = bundle('components/thumb');

export const MODAL_PAGE = bundle('pages/modal-page');
export const BUTTONS_PAGE = bundle('pages/buttons-page');
export const TYPOGRAPHY_PAGE = bundle('pages/typography-page');
export const ILLUSTRATIONS_PAGE = bundle('pages/illustrations-page');
export const FORMS_PAGE = bundle('pages/form-page');
export const BLOG_PAGE = bundle('pages/blog-page');
export const ICONS_PAGE = bundle('pages/icons-page');
