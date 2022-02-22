import { ActionRequest } from 'adminjs';

export const isPOSTMethod = ({ method }: ActionRequest): boolean => method.toLowerCase() === 'post';

export const isGETMethod = ({ method }: ActionRequest): boolean => method.toLowerCase() === 'get';

export const isNewAction = ({ params: { action } }: ActionRequest): boolean => action === 'new';

export const isEditAction = ({ params: { action } }: ActionRequest): boolean => action === 'edit';
