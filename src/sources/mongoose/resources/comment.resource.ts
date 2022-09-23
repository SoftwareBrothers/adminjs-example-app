import { CommentModel } from '../models';
import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';

export const CreateCommentResource = (): CreateResourceResult<typeof CommentModel> => ({
  resource: CommentModel,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    actions: {
      show: {
        isAccessible: false,
      },
    },
    properties: {
      _id: {
        isTitle: true,
      },
      content: {
        type: 'textarea',
      },
    },
  },
});
