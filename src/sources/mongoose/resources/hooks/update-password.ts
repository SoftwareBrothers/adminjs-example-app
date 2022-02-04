// eslint-disable-next-line max-len
import { ActionContext, ActionRequest, Before } from 'adminjs';
import argon2 from 'argon2';
import {isEditAction, isNewAction, isPOSTMethod} from "../../../../admin/admin.utils";

export const updatePassword = async (
  request: ActionRequest,
  context: ActionContext,
): Promise<ActionRequest> => {
  if (isPOSTMethod(request)) {
    return hashPassword(request, context);
  }
  return request;
};

export const hashPassword: Before = async (request) => {
  if (shouldHashPassword(request) && request?.payload?.newPassword) {
    const { newPassword, ...other } = request.payload;
    request.payload = {
      ...other,
      password: await argon2.hash(newPassword),
    };
  }
  return request;
};

const shouldHashPassword = (request: ActionRequest) => {
  if (!isPOSTMethod(request)) {
    return false;
  }
  if (isNewAction(request)) {
    return true;
  }
  return isEditAction(request) && request?.payload?.newPassword;
};
