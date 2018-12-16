const mongoose = require('mongoose')

const { Schema } = mongoose

const BlogPostSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  createdAt: Date,
  createdBy: String,
  tags: String,
})

const BlogPost = mongoose.model('BlogPost', BlogPostSchema)

module.exports = BlogPost
