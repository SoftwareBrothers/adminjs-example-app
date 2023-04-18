import { faker } from '@faker-js/faker';

import { Article } from '../../models/article.model.js';

const articles = (count: number, { authorId, categoryId }): Article[] =>
  Array.from({ length: count }, () => ({
    title: faker.lorem.sentence(4),
    content: faker.lorem.paragraphs(3),
    photo: faker.image.imageUrl(80, 80),
    published: faker.datatype.boolean(),
    author: authorId,
    category: categoryId,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));

export default articles;
