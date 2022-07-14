import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminSchema } from '../../../sources/mongoose/models/admin.model';
import { UserSchema } from '../../../sources/mongoose/models/user.model';
import { ArticleSchema } from '../../../sources/mongoose/models/article.model';
import { CategorySchema } from '../../../sources/mongoose/models/category.model';
import { CommentSchema } from '../../../sources/mongoose/models/comment.model';
import { ComplicatedSchema } from '../../../sources/mongoose/models/complicated.model';

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
