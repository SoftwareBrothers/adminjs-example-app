import { ActionResponse, After } from 'adminjs';

export const movePasswordErrors: After<ActionResponse> = async (response) => {
  if (response.record.errors.password) {
    response.record.errors.newPassword = response.record.errors.password;
  }
  return response;
};
