import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CardHover from './CardHover'
import CardInfo from './CardInfo'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'


const PlantCards = ({productsInfo, products, rating}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const carouselSlideLimit = products ? 8 : 1;

  const handleNext = () => {
    if (currentIndex < (productsInfo.length / carouselSlideLimit) - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className="overflow-hidden">
      <div
        className={`grid grid-flow-col gap-8 transition all ease-in-out duration-[0.5s] ${products ? 'grid-rows-2 auto-cols-[23.2%]'  : 'grid-rows-1 auto-cols-[31%]'}`}
        style={{
          transform: products ? `translateX(-${currentIndex * 25.5}%)` : `translateX(-${currentIndex * 34}%)`,
        }}
      >
        {/* card */}
        {productsInfo.map((_, index) => (
          <div
            key={index}
            className="group border border-gray-200 rounded-lg hover:border-themeColor transition ease-in-out duration-[.4s] overflow-hidden"
          >
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link to={_.plantInfo.link}>
                <img src={_.imageURL} alt="product-img" />
              </Link>
              <CardHover hoveredIndex={hoveredIndex === index} />
            </div>
            <CardInfo plantInfo={_.plantInfo} rating={rating} />
          </div>
        ))}
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
    </div>
  )
}

export default PlantCards
