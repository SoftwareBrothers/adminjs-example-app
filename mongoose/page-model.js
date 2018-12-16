const mongoose = require('mongoose')

const { Schema } = mongoose

const PageSchema = new Schema({
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
  seo: {
    title: String,
    keywords: String,
  },
  sections: String,
})

const Page = mongoose.model('Page', PageSchema)

module.exports = Page
