import {CreateResourceResult} from "../../../admin/create-resource-result.type";
import {menu} from "../../../admin";
import {CartModel} from "../models";

export const CreateCartResource = (): CreateResourceResult<typeof CartModel> => ({
  resource: CartModel,
  options: {
    parent: menu.sequelize,
    properties: {
      createdAt: {
        isVisible: {
          show: true,
          edit: false
        }
      },
      updatedAt: {
        isVisible: {
          show: true,
          edit: false
        }
      }
    }
  }
})
