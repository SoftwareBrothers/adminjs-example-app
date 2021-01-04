import { ActionRequest } from 'admin-bro';

const nullifyEmptyProperties = (request: ActionRequest) => {
  const { method, payload } = request;
  if (method === 'post') {
    request.payload = Object.entries(payload).reduce(
      (memo, [key, value]) => ({
        ...memo,
        [key]: value === '' ? null : value,
      }),
      {},
    );
  }
  return request;
};

export default {
  actions: {
    edit: {
      before: nullifyEmptyProperties,
    },
    new: {
      before: nullifyEmptyProperties,
    },
  },
};
