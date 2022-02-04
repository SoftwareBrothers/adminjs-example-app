import {menu} from "../../../admin";
import {Car} from "../models";
import {orm} from "../config";

export const CreateCarResource = () => ({
  resource: {
    model: Car,
    orm
  },
  options: {
    parent: menu.mikroorm,
    properties: {
      meta: { type: 'mixed' },
      'meta.title': {
        type: 'string',
      },
      'meta.description': {
        type: 'string',
      },
    },
  }
})
