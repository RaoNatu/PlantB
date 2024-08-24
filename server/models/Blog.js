const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
  imageURL: String,
  heading: String,
  by: String,
  data: String,
  content: String,
  link: String,
  comments: String
})

module.exports = mongoose.model('Blog', blogSchema)