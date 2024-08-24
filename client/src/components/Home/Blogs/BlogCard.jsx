import React from 'react'

const BlogCard = ({blogInfo}) => {
  return (
    <div className="relative flex-none">
      <div className="rounded-xl overflow-hidden w-[25rem] h-[20rem]">
        <img
          className="w-full h-full object-cover"
          src={blogInfo.imageURL}
          alt="blogImage"
        />
      </div>

      <div className="absolute flex flex-col gap-3 top-1/2 -translate-y-1/2 left-[17rem] bg-white rounded-xl px-5 py-7 w-[24.5rem] shadow-lg">
        <a
          href={blogInfo.link}
          className="hover:text-themeColor transition-all ease-in-out duration-[0.2s]"
        >
          <h2 className="capitalize text-2xl line-clamp-1">
            {blogInfo.heading}
          </h2>
        </a>
        <hr />
        <div className="flex gap-3 text-sm">
          <p>{blogInfo.by}</p>
          <p className="text-gray-500">{blogInfo.date}</p>
        </div>
        <p className="text-sm text-gray-500 line-clamp-4">
          {blogInfo.content}
        </p>
        <a
          href={blogInfo.link}
          className="uppercase font-medium text-gray-500 hover:text-themeColor c"
        >
          Read More
        </a>
      </div>
    </div>
  )
}

export default BlogCard
