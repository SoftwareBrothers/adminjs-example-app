import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { menu } from '../../../admin';
import { ArticleModel } from '../models';
import { THUMB } from '../../../admin/components.bundler';

export const CreateArticleResource = (): CreateResourceResult<typeof ArticleModel> => ({
  resource: ArticleModel,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    parent: menu.mongoose,
    properties: {
      _id: {
        isTitle: true,
      },
      content: {
        type: 'richtext',
      },
      published: {
        components: {
          list: THUMB,
        },
      },
    },
  },
});
