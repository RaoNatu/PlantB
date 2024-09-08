const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
  featured: Boolean,
  latest: Boolean,
  bestSeller: Boolean
})

const plantInfoSchema = mongoose.Schema({
  link: String,
  category: String,
  name: String,
  rating: Number,
  discountPrice: Number,
  actualPrice: Number
})

const productSchema = mongoose.Schema({
  category: categorySchema,
  iamgeURL: String,
  plantInfo: plantInfoSchema
})

module.exports = mongoose.model('Product', productSchema)
