import addFormats from 'ajv-formats';
import { AjvValidator, Model } from 'objection';

// https://github.com/Vincit/objection.js/issues/2249#issuecomment-1075898552
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
