import { model, Schema, Types } from 'mongoose';

export interface Article {
  title: string;
  content: string;
  photo: string;
  author: Types.ObjectId;
  category: Types.ObjectId;
  published: boolean;
}

const schema = new Schema<Article>({
  title: { type: 'String', required: true },
  content: { type: 'String', required: true },
  photo: { type: 'String' },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  published: { type: 'Boolean' },
});

export const ArticleModel = model<Article>('Article', schema);
