import { OverridableComponent, ComponentLoader } from 'adminjs';
import path from 'path';

export const componentLoader = new ComponentLoader();

export const add = (url: string, componentName: string): string =>
  componentLoader.add(componentName, path.join(__dirname, url));

export const override = (url: string, componentName: OverridableComponent): string =>
  componentLoader.override(componentName, path.join(__dirname, url));

/**
 * Overridable components
 */
override('components/top-bar', 'Version');

/**
 * Common components
 */
export const SOME_STATS = add('components/some-stats', 'CustomPage');
export const PRODUCTS_LIST = add('components/products-list', 'ProductList');
export const DONT_TOUCH_THIS_ACTION = add('components/dont-touch-this-action', 'CustomAction');
export const DETAILED_STATS = add('components/detailed-stats', 'DetailedStats');
export const THUMB = add('components/thumb', 'Thumb');

/**
 * Pages
 */
export const DESIGN_SYSTEM_PAGE = add('./pages/design-system-examples/index', 'DesignSystemPage');
