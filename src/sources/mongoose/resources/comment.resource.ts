import { CommentModel } from '../models';
import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { menu } from '../../../admin';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';

export const CreateCommentResource = (): CreateResourceResult<typeof CommentModel> => ({
  resource: CommentModel,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    parent: menu.mongoose,
    actions: {
      show: {
        isAccessible: false,
      },
      edit: {
        showInDrawer: true,
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
