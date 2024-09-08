const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
  blogId: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('BlogComment', commentSchema)
