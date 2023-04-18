import dotenv from 'dotenv';
dotenv.config({
  path: `${process.cwd()}/.env`,
});

import flatten from 'lodash/flatten.js';
import mongoose from 'mongoose';
import { ArticleModel, CategoryModel, CommentModel, UserModel } from '../models/index.js';
import { articles, categories, comments, users } from './data/index.js';

const usersCount = 3;
const categoriesPerUserCount = 1;
const articlesPerCategoryCount = 1;
const commentsPerArticleCount = 5;

const run = async () => {
  await mongoose.connect(process.env.MONGO_DATABASE_URL);

  const createdUsers = await Promise.all(users(usersCount).map((u) => new UserModel(u).save()));
  const createdCategories: Record<string, any>[] = flatten(
    await Promise.all(
      createdUsers.map((u) =>
        Promise.all(categories(categoriesPerUserCount, { userId: u._id }).map((c) => new CategoryModel(c).save())),
      ),
    ),
  );
  const createdArticles: Record<string, any>[] = flatten(
    await Promise.all(
      createdUsers.map((u, idx) =>
        Promise.all(
          articles(articlesPerCategoryCount, { authorId: u._id, categoryId: createdCategories[idx]._id }).map((a) =>
            new ArticleModel(a).save(),
          ),
        ),
      ),
    ),
  );
  await Promise.all(
    createdArticles.map((a) =>
      Promise.all(comments(commentsPerArticleCount, { articleId: a._id }).map((c) => new CommentModel(c).save())),
    ),
  );
  // TODO: Add ComplicatedModel seeds
};

run()
  .then(() => process.exit(0))
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
