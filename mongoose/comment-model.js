const mongoose = require('mongoose')

const { Schema } = mongoose

const CommentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  flagged: Boolean,
})

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment
