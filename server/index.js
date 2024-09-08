const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const cors = require('cors')
const User = require('./models/User')
const Blog = require('./models/Blog')
const BlogComment = require('./models/BlogComment')
const Product = require('./models/Product')
const Cart = require('./models/CartSchema')
const authenticationToken = require('./middlewares/authenticationToken')
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET
const PORT = process.env.PORT
const DB_URL = process.env.DB_URL

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(DB_URL).then(() => console.log('Mongo Connected'))

app.post('/register', async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body

    // Check if all required fields are provided
    if (!first_name || !last_name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    // Create a new user
    const user = new User({
      first_name,
      last_name,
      email,
      password: hashedPassword,
    })

    // Save the user to the database
    await user.save()

    res.status(200).json({ message: 'User created successfully' })
  } catch (error) {
    console.error('Error during user registration:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    // Check if the user exists
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'Invalid Credentials' })
    }

    // Comparing the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Credentials' })
    }

    // Generate JWT token
    const token = jwt.sign({ userID: user._id }, JWT_SECRET, {
      expiresIn: '1h',
    })

    res.status(200).json({ token })
  } catch (error) {
    console.error('Error during login:', error)
    res.status(500).json({ message: 'Server Error' })
  }
})

app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find({})
    if (!blogs) {
      res.status(404).send('Blogs not found!')
    }
    res.status(200).json({ blogs })
  } catch (error) {
    console.log(error)
    res.status(500).send('Server Error')
  }
})

app.get('/api/blog/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id)

    if (!blog) {
      res.status(404).send('Blog not found!')
    }

    res.status(200).json({ blog })
  } catch (error) {
    console.log(error)
    res.status(500).send('Server Error')
  }
})

app.post('/api/blog/:id/comments', authenticationToken, async (req, res) => {
  try {
    console.log(req.body)
    const blogId = req.params.id
    const { content } = req.body

    const user = await User.findOne({ _id: req.user.userID })
    const name = user.first_name
    const email = user.email

    const newBlogComment = new BlogComment({
      blogId,
      name,
      email,
      content,
    })

    await newBlogComment.save()
    res.status(200).json(newBlogComment)
  } catch (error) {
    console.error('Error Occured!', error)
  }
})

app.get('/api/blog/:id/comments', async (req, res) => {
  const blogId = req.params.id
  const comments = await BlogComment.find({ blogId })
  if (!comments) {
    res.status(404).send('Comments not found!')
  }

  res.status(200).json({ comments })
})

app.get('/api/products', async (req, res) => {
  const products = await Product.find({})
  res.status(200).json({ products })
})

app.post('/api/cart', authenticationToken, async (req, res) => {
  const { productId, quantity } = req.body
  const userId = req.user.userID
  console.log(productId, quantity)

  try {
    let cart = await Cart.findOne({ userId })
    if (cart) {
      const itemIndex = cart.items.findIndex(
        (item) => item.productId.toString() === productId
      )

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity
      } else {
        cart.items.push({ productId, quantity })
      }
    } else {
      cart = new Cart({
        userId,
        items: [{ productId, quantity }],
      })
    }
    await cart.save()
    res.json(cart)
  } catch (error) {
    console.error(error)
  }
})

app.listen(PORT, () => {
  console.log('Server started at port 3000')
})

// app.get('/api/profile', authenticationToken, async (req, res) => {
//   const user = await User.findOne({_id: req.user.userID})
//   console.log(user._id)
//   if(!user) {
//     res.status(404).send('User not found!')
//   }

//   res.status(200).json({
//     first_name: user.first_name,
//     last_name: user.last_name
//   })
// })
