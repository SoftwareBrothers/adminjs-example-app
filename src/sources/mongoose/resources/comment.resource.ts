import { menu } from '../../../admin/index.js';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions.js';
import { ResourceFunction } from '../../../admin/types/index.js';
import { CommentModel } from '../models/index.js';

export const CreateCommentResource: ResourceFunction<typeof CommentModel> = () => ({
  resource: CommentModel,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.mongoose,
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
