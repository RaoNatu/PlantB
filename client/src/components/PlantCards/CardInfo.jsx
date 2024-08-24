import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ProductInfo = ({ plantInfo, rating }) => {
  return (
    <div className="flex flex-col p-3 gap-1 capitalize">
      <p className="text-gray-500">{plantInfo.category}</p>
      <Link
        to={plantInfo.link}
        className="hover:text-themeColor transition ease-in-out duration-[.2s] line-clamp-1"
      >
        {plantInfo.name}
      </Link>
      {rating && (
        <div className="flex gap-1 text-xs items-center text-gray-200">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <p className="ml-2 text-gray-600 text-sm">({plantInfo.rating})</p>
        </div>
      )}
      <div className="flex gap-2 items-end">
        <p className="font-bold text-xl">
          Rs.{' '}
          {plantInfo.discountPrice
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
        </p>
        <p className="relative bottom-[2px] text-sm text-gray-500 line-through">
          Rs.{' '}
          {plantInfo.actualPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}
        </p>
      </div>
    </div>
  )
}

export default ProductInfo
