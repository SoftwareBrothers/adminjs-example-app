import { menu } from '../../../admin/index.js';
import { THUMB } from '../../../admin/components.bundler.js';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions.js';
import { ResourceFunction } from '../../../admin/types/index.js';
import { ArticleModel } from '../models/index.js';

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
