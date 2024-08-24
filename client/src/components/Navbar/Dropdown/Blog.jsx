import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const Blog = ({ navmenu }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-x-4">
        {navmenu.map((data, index) => (
          <div key={index}>
            <div className="rounded-xl overflow-hidden">
              <div>
                <img src={data.imageURL} alt="Blog" />
              </div>
            </div>
            <Link
              to={data.link}
              className="line-clamp-1 capitalize text-sm text-center mt-1 hover:text-themeColor easeInOut"
            >
              {data.title}
            </Link>
            <p className="line-clamp-1 text-gray-500 capitalize text-sm text-center mt-1">
              <FontAwesomeIcon icon={faCalendar} className="mr-2" /> {data.date}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Blog
