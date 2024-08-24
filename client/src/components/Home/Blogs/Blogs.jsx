import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

import BlogCard from './BlogCard'
import { getBlogs } from '../../../services/api'

const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [blogsInfo, setBlogsInfo] = useState([])

  const handleNext = () => {
    if (currentIndex < blogsInfo.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  useEffect(() => {
    async function fetchData() {
      const blogsReturned = await getBlogs()
      setBlogsInfo(blogsReturned.blogs)
    }

    fetchData()
  }, [])

  return (
    <section className="custom-container py-16">
      <div className="flex flex-col gap-7 items-center pb-8">
        <h2 className="text-center font-medium text-3xl">Latest Blog</h2>
        <p className="text-sm text-gray-500 capitalize text-center w-1/3">
          It is a long established fact that a reader will be distracted by the
          readable is that it has a more-or-less normal dist...
        </p>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-[18.5rem] transition ease-in-out duration-[.4s]"
          style={{ transform: `translate(-${currentIndex * 50.4}%)` }}
        >
          {blogsInfo.map((data, index) => (
            <BlogCard key={index} blogInfo={data} />
          ))}
        </div>
      </div>

      <div className="flex gap-5 justify-center my-10">
        <button
          className="rounded-full shadow-lg w-12 h-12 hover:bg-themeColor hover:text-white transition ease-in-out duration-[.4s]"
          onClick={handlePrev}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="rounded-full shadow-lg w-12 h-12 hover:bg-themeColor hover:text-white transition ease-in-out duration-[.4s]"
          onClick={handleNext}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  )
}

export default Blogs
