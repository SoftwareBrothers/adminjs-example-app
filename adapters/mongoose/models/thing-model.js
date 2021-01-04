const mongoose = require('mongoose')

module.exports = mongoose.model('Thing', {
  name: String,
  users: [{
    role: String,
    userId: {
      type: mongoose.ObjectId,
      ref: 'User',
    },
  }],
  details: {
    description: { type: String, required: true },
    isAvailable: Boolean
  }
})
