import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { postBlogComment, getBlogComments } from '../../services/api'
import BlogContentCommentForm from './BlogContentCommentForm'
import BlogContentComments from './BlogContentComments'

const BlogsContent = ({ blogInfo, blogId }) => {

  const navigate = useNavigate()

  const [newBlogComment, setNewBlogComment] = useState({
    content: '',
  })
  const [comments, setComments] = useState([])

  useEffect(() => {
    async function fetchCommentsData() {
      const allComments = await getBlogComments(blogId)
      setComments(allComments.comments)
    }
    fetchCommentsData()
  }, [blogId])

  const handleInputChange = (e) => {
    setNewBlogComment({ content: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await postBlogComment(blogId, newBlogComment)
    console.log(response)
    console.log(blogId)
    navigate(0)
  }

  return (
    <div className="py-8">
      <h2 className="text-center text-2xl capitalize">{blogInfo.heading}</h2>
      <div className="flex flex-col gap-3 items-center w-3/4 mx-auto">
        <div className="flex gap-5 text-sm text-gray-500 mt-3">
          <p>{blogInfo.date}</p>
          <span>•</span>
          <p>{blogInfo.by}</p>
        </div>
        <div className="overflow-hidden rounded-xl w-full">
          <img className="w-full object-cover" src={blogInfo.imageURL} alt="" />
        </div>
        <p className="text-sm text-gray-500 text-justify">{blogInfo.content}</p>
        <button className="place-self-start text-sm mt-3">
          <i className="fa-light fa-arrow-up-from-bracket font-medium mr-1"></i>
          <span className="hover:underline underline-offset-4">Share</span>
        </button>
        <button className="group text-lg flex items-center mt-10">
          <Link to="/blogs">
            <i className="fa-light fa-arrow-left font-medium mr-2 group-hover:-translate-x-1 transition-all ease-in-out duration-[0.3s] group-hover:text-themeColor"></i>
            <span className="group-hover:text-themeColor transition-all ease-in-out duration-[0.2s]">
              Back to blogs
            </span>
          </Link>
        </button>
        <BlogContentComments comments={comments} />
        <BlogContentCommentForm
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}

export default BlogsContent
