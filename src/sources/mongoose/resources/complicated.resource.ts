import {CreateResourceResult} from "../../../admin/create-resource-result.type";
import {menu} from "../../../admin";
import {ComplicatedModel} from "../models";

export const CreateComplicatedResource = (): CreateResourceResult<typeof ComplicatedModel> => ({
  resource: ComplicatedModel,
  options: {
    parent: menu.mongoose,
    properties: {
      _id: {
        isTitle: true
      },
    }
  }
})
