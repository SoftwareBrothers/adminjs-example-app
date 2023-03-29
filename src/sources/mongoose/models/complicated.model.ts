import { model, Schema, Types } from 'mongoose';

export interface Complicated {
  name: string;
  stringArray: string[];
  authors: Types.ObjectId[];
  nestedDetails: {
    age: number;
    height: number;
    placeOfBirth: string;
    nested: {
      extremelyNested: string;
    };
  };
  parents: Types.ObjectId[];
  items: {
    imageVariants: {
      imageUrl: string;
      isApproved: boolean;
      dateCreated: Date;
      isDeleted: boolean;
    }[];
  }[];
}

export const ComplicatedSchema = new Schema<Complicated>({
  name: { type: 'String', required: true },
  stringArray: { type: ['String'] },
  authors: [{ type: Types.ObjectId, ref: 'User' }],
  nestedDetails: new Schema(
    {
      age: { type: 'Number', required: true },
      height: { type: 'Number', required: true },
      placeOfBirth: { type: 'String', required: true },
      nested: new Schema(
        {
          extremelyNested: { type: 'String', required: true },
        },
        { _id: false },
      ),
    },
    { _id: false },
  ),
  parents: [
    new Schema(
      {
        firstName: { type: 'String', required: true },
        lastName: { type: 'String', required: true },
      },
      { _id: false },
    ),
  ],
  items: [
    new Schema(
      {
        imageVariants: [
          new Schema(
            {
              imageUrl: { type: 'String', required: true },
              isApproved: { type: 'Boolean' },
              isDeleted: { type: 'Boolean' },
              dateCreated: { type: 'Date', default: Date.now },
            },
            { _id: false },
          ),
        ],
      },
      { _id: false },
    ),
  ],
});

export const ComplicatedModel = model<Complicated>('Complicated', ComplicatedSchema);
