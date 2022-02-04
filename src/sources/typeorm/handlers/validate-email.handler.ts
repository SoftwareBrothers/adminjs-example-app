import {flat, PropertyErrors, ValidationError} from "adminjs";
import {isPOSTMethod} from "../../../admin/admin.utils";

export const validateEmail = async (request) => {
  if (!isPOSTMethod(request)) {
    return request;
  }

  const payload = flat.unflatten(request.payload);
  const errors: PropertyErrors = {};

  if (!payload.email?.trim()?.length) {
    errors.email = { message: 'Has to be filled' };
  }

  if (Object.keys(errors).length) {
    throw new ValidationError(errors);
  }

  return request
}
