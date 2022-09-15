import { ActionRequest, ActionContext, Before } from 'adminjs';
import { flat } from '@adminjs/common/utils';
import { PropertyErrors, ValidationError } from '@adminjs/common/errors';
import { isPOSTMethod } from '../../../admin/admin.utils';
import { PostPayload } from '../interfaces';

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
