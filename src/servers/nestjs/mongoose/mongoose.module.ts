import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AdminSchema } from '../../../sources/mongoose/models/admin.model.js';
import { UserSchema } from '../../../sources/mongoose/models/user.model.js';
import { ArticleSchema } from '../../../sources/mongoose/models/article.model.js';
import { CategorySchema } from '../../../sources/mongoose/models/category.model.js';
import { CommentSchema } from '../../../sources/mongoose/models/comment.model.js';
import { ComplicatedSchema } from '../../../sources/mongoose/models/complicated.model.js';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_DATABASE_URL),
    MongooseModule.forFeature([
      { name: 'Admin', schema: AdminSchema },
      { name: 'User', schema: UserSchema },
      { name: 'Article', schema: ArticleSchema },
      { name: 'Category', schema: CategorySchema },
      { name: 'Comment', schema: CommentSchema },
      { name: 'Complicated', schema: ComplicatedSchema },
    ]),
  ],
  exports: [MongooseModule],
})
export class MongooseSchemasModule {}
