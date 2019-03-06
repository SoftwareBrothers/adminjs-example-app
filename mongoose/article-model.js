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
  published: Boolean,
}, { timestamps: true })

const Article = mongoose.model('Article', ArticleSchema)

module.exports = Article
