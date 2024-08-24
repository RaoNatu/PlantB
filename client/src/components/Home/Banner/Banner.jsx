import React, { useState } from 'react'
import Button from '../../../utils/Button'
import DeliveryInfo from './DeliveryInfo'

const section1Info = [
  {
    imageURL: 'images/plants-group/1.webp',
    topHeading: 'New collection',
    mainHeading: 'Fall/summer terrariums',
    subHeading:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Ipsum is that it has a more-or-less normal dist...',
  },
  {
    imageURL: 'images/plants-group/2.webp',
    topHeading: 'Just for you',
    mainHeading: 'Assorted snake air plant',
    subHeading:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Ipsum is that it has a more-or-less normal dist...',
  },
]

const Section1 = () => {
  return (
    <section className="custom-container py-14">
      <div>
        {/* Card */}
        {section1Info.map((data, index) => (
          <div
            key={index}
            className={`flex gap-10 items-center ${
              index % 2 == 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <div className="rounded-xl overflow-hidden flex-1">
              <div className="beffect">
                <img src={data.imageURL} alt="plants-group" />
              </div>
            </div>
            <div className="flex flex-col gap-5 items-center flex-1">
              <h3 className="text-2xl uppercase">{data.topHeading}</h3>
              <h2 className="text-themeColor text-4xl uppercase">
                {data.mainHeading}
              </h2>
              <p className="text-center text-gray-500">{data.subHeading}</p>
              <Button variant="secondary">Shop Now</Button>
            </div>
          </div>
        ))}
      </div>
      <DeliveryInfo />
    </section>
  )
}

export default Section1
