require('dotenv').config({
  path: `${process.cwd()}/.env`,
});
import mongoose from 'mongoose';
import {
  AdminModel,
  UserModel,
  ArticleModel,
  CommentModel,
  CategoryModel,
  ComplicatedModel,
} from '../sources/mongoose/models';

async function truncateMongodb() {
  await mongoose.connect(process.env.MONGO_DATABASE_URL);
  await UserModel.deleteMany({});
  await ArticleModel.deleteMany({});
  await CommentModel.deleteMany({});
  await CategoryModel.deleteMany({});
  await ComplicatedModel.deleteMany({});
  await AdminModel.deleteMany({
    email: {
      $ne: 'admin@example.com',
    },
  });
}

truncateMongodb()
  .then(() => process.exit(0))
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
