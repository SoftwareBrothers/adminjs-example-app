import { ActionRequest, ActionResponse, After, flat } from 'adminjs';

import { isGETMethod } from '../../../admin/admin.utils.js';
import { getSum } from '../functions/get-sum.function.js';
import { ProductSumInterface } from '../interfaces.js';

export const getSumForOrder =
  (): After<ActionResponse> =>
  async (response: ActionResponse, request: ActionRequest): Promise<ActionResponse> => {
    if (!isGETMethod(request)) {
      return response;
    }

    if (response.records) {
      await Promise.all(
        response.records.map(async (record) => {
          const params = flat.unflatten<any, ProductSumInterface>(record.params);
          params.sum = await getSum(params.id);
          record.params = flat.flatten(params);
        }),
      );
    } else {
      const params = flat.unflatten<any, ProductSumInterface>(response.record.params);
      params.sum = await getSum(params.id);
      response.record.params = flat.flatten(params);
    }

    return response;
  };
