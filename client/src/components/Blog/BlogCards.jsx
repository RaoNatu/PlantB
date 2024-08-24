import React from 'react'
import { Link } from 'react-router-dom'

const BlogCards = ({ blogInfo }) => {
  return (
    <div>
      <Link to={`/blog/${blogInfo._id}`}>
        <div className="rounded-xl overflow-hidden">
          <img src={blogInfo.imageURL} alt="blog-image" />
        </div>
      </Link>
      <div className="flex flex-col gap-3 items-center mt-3">
        <Link to={`/blog/${blogInfo._id}`}>
          <h3 className="text-xl font-medium hover:text-themeColor transition ease-in-out duration-[.4s]">{blogInfo.heading}</h3>
        </Link>
        <p className="line-clamp-3 text-center text-sm text-gray-500">
          {blogInfo.content}
        </p>
        <div className="flex gap-5 text-sm">
          <p>
            <i className="fa-solid fa-user mr-2 text-[0.9rem]"></i>
            {blogInfo.by}
          </p>
          <p>
            <i className="fa-solid fa-calendar-days mr-2 text-[0.9rem]"></i>
            {blogInfo.date}
          </p>
          <p>
            <i className="fa-solid fa-comments mr-2 text-[0.9rem]"></i>
            {blogInfo.comments}
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogCards
