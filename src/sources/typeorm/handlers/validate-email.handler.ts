import { flat, PropertyErrors, ValidationError, ActionRequest, ActionContext, Before } from 'adminjs';

import { isPOSTMethod } from '../../../admin/admin.utils.js';
import { PostPayload } from '../interfaces.js';

export const validateEmail: Before = async (request: ActionRequest, context: ActionContext): Promise<ActionRequest> => {
  if (!isPOSTMethod(request)) {
    return request;
  }

  const payload = flat.unflatten<any, PostPayload>(request.payload);
  const errors: PropertyErrors = {};

  if (!payload.email?.trim()?.length) {
    errors.email = { message: context.translateMessage('Has to be filled') };
  }

  if (Object.keys(errors).length) {
    throw new ValidationError(errors);
  }

  return request;
};
