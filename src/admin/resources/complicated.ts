import { sort, timestamps } from './sort';

export default {
  name: 'Complicated',
  sort,
  properties: {
    ...timestamps,
    'nestedDetails.age': {
      label: 'Person age',
    },
    'nestedDetails.nested.extremelyNested': {
      label: 'This nesting is crazy',
    },
  },
};
