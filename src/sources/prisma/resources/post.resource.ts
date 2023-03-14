import { menu } from '../../../admin';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { ResourceFunction } from '../../../admin/types';
import { client, dmmf } from '../config';

export const CreatePostResource: ResourceFunction<{
  model: typeof dmmf.modelMap.Post;
  client: typeof client;
}> = () => ({
  resource: {
    model: dmmf.modelMap.Post,
    client,
  },
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.prisma,
    properties: {
      content: { type: 'richtext' },
      someJson: { type: 'mixed', isArray: true },
      'someJson.number': { type: 'number' },
      'someJson.string': { type: 'string' },
      'someJson.boolean': { type: 'boolean' },
      'someJson.date': { type: 'datetime' },
    },
  },
});
