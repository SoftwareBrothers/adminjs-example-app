import dotenv from 'dotenv';
dotenv.config({
  path: `${process.cwd()}/.env`,
});

import { PrismaClient } from '@prisma/client';
import { publishers, posts, profiles } from './data/index.js';

const publishersCount = 5;
const postsCount = 20;

const run = async () => {
  const prisma = new PrismaClient();
  await prisma.$connect();

  const createdPublishers = await prisma.$transaction(
    publishers(publishersCount).map((publisher) => prisma.publisher.create({ data: publisher })),
  );
  await prisma.$transaction(
    createdPublishers.map((publisher) =>
      prisma.profile.create({ data: profiles(1, { publisherId: publisher.id })[0] }),
    ),
  );
  await prisma.post.createMany({ data: posts(postsCount, { publishers: createdPublishers }) });
};

run()
  .then(() => process.exit(0))
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
