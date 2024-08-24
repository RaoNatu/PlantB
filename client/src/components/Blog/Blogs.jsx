import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards'

const Blogs = ({ blogsInfo }) => {


  return (
    <div className="py-8">
      <h2 className="text-center font-medium text-3xl">Blogs</h2>
      <div className="grid grid-cols-2 gap-8 mt-8">
        {blogsInfo.map((data, index) => (
          <BlogCards key={index} blogInfo={data} />
        ))}
      </div>
    </div>
  )
}

export default Blogs
