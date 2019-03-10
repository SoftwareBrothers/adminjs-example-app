const mongoose = require('mongoose')

const { Schema } = mongoose

const BlogPostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  createdAt: Date,
  createdBy: String,
})

const BlogPost = mongoose.model('BlogPost', BlogPostSchema)

module.exports = BlogPost
