const mongoose = require('mongoose')

const { Schema } = mongoose

const CommentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  flagged: Boolean,
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
})

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment
