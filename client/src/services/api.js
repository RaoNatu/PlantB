import axios from 'axios'

const url = 'http://localhost:3000'

const getToken = () => {
  return localStorage.getItem('token')
}

export const getBlogs = async () => {
  try {
    const response = await axios.get(`${url}/api/blogs`)
    return response.data
  } catch (error) {
    console.log('Error while calling getBlogs API ', error)
  }
}

export const getBlog = async (blogId) => {
  try {
    const response = await axios.get(`${url}/api/blog/${blogId}`)
    return response.data
  } catch (error) {
    console.log('Error while calling getBlog API ', error)
  }
}

export const postBlogComment = async (blogId, newBlogComment) => {
  const token = getToken()

  if (!token) {
    console.error('Token is required to post a comment.')
    return
  }

  try {
    const blogComments = await axios.post(
      `${url}/api/blog/${blogId}/comments`,
      newBlogComment,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return blogComments.data
  } catch (error) {
    console.error('Error while posting comment:', error)
    return { error: error.response?.data || 'Unknown error' }
  }
}

export const getBlogComments = async (blogId) => {
  try {
    const response = await axios.get(`${url}/api/blog/${blogId}/comments`)
    return response.data
  } catch (error) {
    console.log('Error while calling getBlogComments API ', error)
  }
}
