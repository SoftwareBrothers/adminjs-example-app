import { menu } from '../../../admin';
import { THUMB } from '../../../admin/components.bundler';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { ResourceFunction } from '../../../admin/types';
import { ArticleModel } from '../models';

export const CreateArticleResource: ResourceFunction<typeof ArticleModel> = () => ({
  resource: ArticleModel,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.mongoose,
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
