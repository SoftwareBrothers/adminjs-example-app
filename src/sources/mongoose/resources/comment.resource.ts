import { menu } from '../../../admin';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { ResourceFunction } from '../../../admin/types';
import { CommentModel } from '../models';

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
