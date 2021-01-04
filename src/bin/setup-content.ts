/* eslint-disable no-console */
import faker from 'faker';
import mongoose from 'mongoose';

import sequelizeDb from '../adapters/sequelize/models';
import {
  Category,
  Comment,
  User,
  Page,
  Article,
} from '../adapters/mongoose/models';

const categories = Object.keys(
  [...Array(100).keys()].reduce(
    (m) => ({ [faker.commerce.department()]: 1, ...m }),
    {},
  ),
);

const emails = Object.keys(
  [...Array(100).keys()].reduce(
    (m) => ({ [faker.internet.email()]: 1, ...m }),
    {},
  ),
);

const pages = Object.keys(
  [...Array(100).keys()].reduce(
    (m) => ({ [faker.commerce.productName()]: 1, ...m }),
    {},
  ),
);

const articles = Object.keys(
  [...Array(10).keys()].reduce((m) => ({ [faker.lorem.word()]: 1, ...m }), {}),
);

const places = Object.keys(
  [...Array(10).keys()].reduce(
    (m) => ({ [faker.company.companyName()]: 1, ...m }),
    {},
  ),
);

const run = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  try {
    await Category.deleteMany({});
    await Comment.deleteMany({});
    await User.deleteMany({});
    await Page.deleteMany({});
    await Article.deleteMany({});
    await sequelizeDb.sequelize.models.User.destroy({
      where: {},
    });
    await sequelizeDb.sequelize.models.FavouritePlace.destroy({
      where: {},
    });

    await Promise.all(
      categories.map(async (title) => {
        const category = await Category.create({
          title,
          owner: faker.name.findName(),
          'nested.field': faker.random.uuid(),
          createdAt: new Date(),
        });

        const comments = Object.keys(
          [...Array(30).keys()].reduce(
            (m) => ({ [faker.lorem.paragraph()]: 1, ...m }),
            {},
          ),
        );

        return Promise.all(
          comments.map((content) =>
            Comment.create({
              content,
              category: category._id,
            }),
          ),
        );
      }),
    );
    const users = [];
    const sqlUsers = [];
    await Promise.all(
      emails.map(async (email) => {
        const user = await User.create({
          email,
          'auth.password': faker.random.uuid(),
        });
        const userSql = await sequelizeDb.sequelize.models.User.create({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          gender: faker.random.boolean() ? 'male' : 'female',
          email,
        });
        users.push(user);
        sqlUsers.push(userSql);
      }),
    );

    await Promise.all(
      emails.map(async (email) =>
        User.create({
          email,
          'auth.password': faker.random.uuid(),
        }),
      ),
    );

    await Promise.all(
      articles.map(async (title) => {
        const content = `
        <h3>${title}</h3>
        <p>${faker.lorem.paragraphs(5, '</p><p>')}</p>
      `;
        return Article.create({
          title,
          content,
          published: faker.random.boolean(),
          author: users[Math.floor(Math.random() * users.length)]._id,
        });
      }),
    );

    await Promise.all(
      pages.map(async (title) => {
        const content = `
        <h3>${title}</h3>
        <p>${faker.lorem.paragraphs(5, '</p><p>')}</p>
      `;
        return Page.create({
          title,
          content,
          createdAt: new Date(),
        });
      }),
    );

    await Promise.all(
      places.map(async (place) =>
        sequelizeDb.sequelize.models.FavouritePlace.create({
          name: place,
          description: faker.lorem.words(2),
          userId: sqlUsers[Math.floor(Math.random() * sqlUsers.length)].id,
        }),
      ),
    );
  } catch (error) {
    console.log(error);
  }
  await mongoose.connection.close();
};

run()
  .then(() => {
    console.log('end');
  })
  .catch((e) => {
    console.log(e);
  });
