import mongoose from 'mongoose';

const { Schema } = mongoose;

const CategorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    createdAt: Date,
    owner: String,
    nested: {
      field: String,
      value: Number,
    },
  },
  { timestamps: true },
);

const Category = mongoose.model('Category', CategorySchema);

export default Category;
