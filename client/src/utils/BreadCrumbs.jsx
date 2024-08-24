import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumbs = ({ crumbs }) => {
  return (
    <div className="px-4 py-2 bg-gray-100 rounded-md border border-1 border-gray-200">
      {crumbs.map((crumb, index) => (
        <span key={index} className="text-sm">
          {index > 0 && <i className="fa-solid fa-chevron-right mx-2 text-[10px]"></i>}
          <Link
            className="inline-block hover:text-themeColor transition-all ease-in-out duration-[.2s]"
            to={crumb.path}
          >
            <span className='capitalize'>{crumb.name}</span>
          </Link>
        </span>
      ))}
    </div>
  )
}

export default BreadCrumbs
