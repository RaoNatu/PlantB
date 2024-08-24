import React from 'react'
import Button from '../../utils/Button'

const BlogsContent = ({ blogInfo }) => {

  return (
    <div className="py-8">
      <h2 className="text-center text-2xl capitalize">
        {blogInfo.heading}
      </h2>
      <div className="flex flex-col gap-3 items-center w-3/4 mx-auto">
        <div className="flex gap-5 text-sm text-gray-500 mt-3">
          <p>{blogInfo.date}</p>
          <span>•</span>
          <p>{blogInfo.by}</p>
        </div>
        <div className="overflow-hidden rounded-xl w-full">
          <img
            className="w-full object-cover"
            src={blogInfo.imageURL}
            alt=""
          />
        </div>
        <p className="text-sm text-gray-500 text-justify">
          {blogInfo.content}
        </p>
        <button className="place-self-start text-sm mt-3">
          <i className="fa-light fa-arrow-up-from-bracket font-medium mr-1"></i>
          <span className="hover:underline underline-offset-4">Share</span>
        </button>
        <button className="group text-lg flex items-center mt-10">
          <i className="fa-light fa-arrow-left font-medium mr-2 group-hover:-translate-x-1 transition-all ease-in-out duration-[0.3s] group-hover:text-themeColor"></i>
          <span className="group-hover:text-themeColor transition-all ease-in-out duration-[0.2s]">
            Back to blog
          </span>
        </button>
        <h2 className="capitalize text-2xl font-medium place-self-start mt-10">
          Leave a comment
        </h2>
        <form action="#" className="text-sm w-full">
          <div className='flex flex-col gap-7'>
            <div className="flex justify-between gap-7">
              <input
                placeholder="Name *"
                className="pl-4 py-3 rounded-xl flex-1 outline-none border border-1 border-gray-200"
              />
              <input
                placeholder="Email *"
                className="pl-4 py-3 rounded-xl flex-1 outline-none border border-1 border-gray-200"
              />
            </div>
            <textarea
              placeholder="Comment *"
              className="pl-4 py-3 rounded-xl w-full outline-none border border-1 border-gray-200"
              rows="4"
            />
            <Button
              variant="form"
              size="small"
              className="w-fit self-start"
            >
              Post Comment
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BlogsContent
