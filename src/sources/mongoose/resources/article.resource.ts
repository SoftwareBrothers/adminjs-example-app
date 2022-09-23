import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { ArticleModel } from '../models';

export const CreateArticleResource = (): CreateResourceResult<typeof ArticleModel> => ({
  resource: ArticleModel,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    properties: {
      _id: {
        isTitle: true,
      },
      content: {
        type: 'richtext',
      },
    },
  },
});
