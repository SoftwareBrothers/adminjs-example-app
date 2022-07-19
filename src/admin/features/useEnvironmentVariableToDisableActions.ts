import { buildFeature } from 'adminjs';

export const useEnvironmentVariableToDisableActions = () => {
  if (process.env.DISABLE_ADMINJS_ACTIONS === 'true') {
    return buildFeature({
      actions: {
        edit: { isAccessible: false },
        delete: { isAccessible: false },
        bulkDelete: { isAccessible: false },
        new: { isAccessible: false },
      },
    });
  }
  return buildFeature({});
};
