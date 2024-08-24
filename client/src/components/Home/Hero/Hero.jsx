import { React, useState } from 'react'
import CarouselBullets from '../../../utils/CarouselBullets'
import Button from '../../../utils/Button'

const heroInfo = [
  {
    heading: 'Organic fresh fruits for your health',
    subHeading:
      'Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris eleifend sagittis mollis. Nulla finibus arcu eu tortor gravida aliquet',
    imageURL: 'images/hero/slider-1.webp',
  },
  {
    heading: 'Organic fresh fruits for your health',
    subHeading:
      'Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris eleifend sagittis mollis. Nulla finibus arcu eu tortor gravida aliquet',
    imageURL: 'images/hero/slider-2.webp',
  },
]

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isClassAdded, setIsClassAdded] = useState(false);

  const handleBulletClick = (index) => {
    setCurrentIndex(index);
    setIsClassAdded(true);
  }

  return (
    <>
      <div className="flex items-center overflow-hidden relative">
        <div
          className="flex w-full transition all ease-in-out duration-[.8s]"
          style={{ transform: `translate(-${currentIndex * 100}%)` }}
        >
          {heroInfo.map((data, index) => (
            <div key={index} className="flex-none w-full relative">
              <img src={data.imageURL} alt="image" />
              <div className={`absolute inset-0 flex flex-col gap-5 justify-center w-[480px] ml-[17rem] ${isClassAdded && currentIndex === index ? 'animate__hero-content' : ''}`}>
                <h2 className="font-bold text-[55px] capitalize leading-normal">
                  {data.heading}
                </h2>
                <p className="text-gray-500 mb-10">{data.subHeading}</p>
                <Button>Shop Now</Button>
              </div>
            </div>
          ))}
        </div>
        <CarouselBullets
          times={heroInfo.length}
          currentIndex={currentIndex}
          onClick={handleBulletClick}
        />
      </div>
    </>
  )
}

export default Hero
