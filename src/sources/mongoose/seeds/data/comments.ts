import { faker } from '@faker-js/faker';

import { Comment } from '../../models/comment.model';

const comments = (count: number, { articleId }): Comment[] =>
  Array.from({ length: count }, () => ({
    content: faker.lorem.paragraph(3),
    flagged: faker.datatype.boolean(),
    article: articleId,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));

export default comments;
