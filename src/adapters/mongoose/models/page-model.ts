import mongoose from 'mongoose';

const { Schema } = mongoose;

const PageSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Page = mongoose.model('Page', PageSchema);

export default Page;
