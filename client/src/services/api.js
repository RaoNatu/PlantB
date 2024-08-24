import axios from 'axios'

const url = 'http://localhost:3000'

export const getBlogs = async () => {
  try {
    const response = await axios.get(`${url}/api/blogs`)
    return response.data
  } catch (error) {
    console.log('Error while calling getBlogs API ', error)
  }
}

export const getBlog = async (id) => {
  try {
    const response = await axios.get(`${url}/api/blog/${id}`)
    return response.data
  } catch (error) {
    console.log('Error while calling getBlog API ', error)
  }
}
