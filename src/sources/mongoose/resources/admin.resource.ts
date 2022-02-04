import {AdminModel} from "../models";
import {CreateResourceResult} from "../../../admin/create-resource-result.type";
import {menu} from "../../../admin";
import {PASSWORD_EDIT} from "../../../admin/components.bundler";
import {updatePassword} from "./hooks/update-password";
import {movePasswordErrors} from "./hooks/move-password-errors";

export const CreateAdminResource = (): CreateResourceResult<typeof AdminModel> => ({
  resource: AdminModel,
  features: [
    (options): object => ({
      ...options,
      listProperties: ['_id', 'email'],
      showProperties: ['_id', 'email'],
      editProperties: ['email', 'newPassword'],
    })
  ],
  options: {
    parent: menu.mongoose,
    sort: {
      direction: 'asc',
      sortBy: 'email',
    },
    actions: {
      new: {
        before: [
          updatePassword
        ],
        after: [
          movePasswordErrors
        ]
      },
      edit: {
        before: [
          updatePassword
        ],
        after: [
          movePasswordErrors
        ]
      }
    },
    properties: {
      password: {
        isVisible: {
          list: false,
          edit: false,
          filter: false,
          show: false
        }
      },
      newPassword: {
        components: {
          edit: PASSWORD_EDIT,
        },
        isVisible: { show: false, edit: true, list: false },
        type: 'string',
      },
    }
  }
})
