import addFormatsPlugin from 'ajv-formats';
import { AjvValidator, Model } from 'objection';

const addFormats = addFormatsPlugin.default;

// https://github.com/Vincit/objection.js/issues/2249#issuecomment-1075898552
// There is no support for Date type in JSONSchema, so this class does two things for us:
// 1. It adds support to formats such as `format: "date-format"` in your "jsonSchema"
// 2. It adds $beforeInsert and $beforeUpdate hooks to update your timestamps
// AdminJS can not load your models properly without it.
export abstract class BaseModel extends Model {
  createdAt: string;

  updatedAt: string;

  static createValidator(): AjvValidator {
    return new AjvValidator({
      onCreateAjv: (ajv) => {
        addFormats(ajv);
      },
      options: {
        allErrors: true,
        validateSchema: false,
        ownProperties: true,
      },
    });
  }

  $beforeInsert(): void {
    this.createdAt = new Date().toISOString();
  }

  $beforeUpdate(): void {
    this.updatedAt = new Date().toISOString();
  }
}
