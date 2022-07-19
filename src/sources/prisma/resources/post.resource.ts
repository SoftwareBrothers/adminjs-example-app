import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { menu } from '../../../admin';
import { client, dmmf } from '../config';

export const CreatePostResource = () => ({
  resource: {
    model: dmmf.modelMap.Post,
    client,
  },
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    parent: menu.prisma,
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
