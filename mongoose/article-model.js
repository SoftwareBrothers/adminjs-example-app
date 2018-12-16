const mongoose = require('mongoose')

const { Schema } = mongoose

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: Date,
  published: Boolean,
})

const Article = mongoose.model('Article', ArticleSchema)

module.exports = Article
