import { model, Schema, Types } from 'mongoose';

export interface Category {
  title: string;
  owner: Types.ObjectId;
  nested: {
    field: string;
    value: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export const CategorySchema = new Schema<Category>(
  {
    title: { type: 'String', required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    nested: new Schema({ field: 'String', value: 'String' }),
  },
  { timestamps: true },
);

export const CategoryModel = model<Category>('Category', CategorySchema);
