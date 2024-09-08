import React, { useState } from 'react'
import Button from '../../../utils/Button'
import DeliveryInfo from './DeliveryInfo'

import { section1Info  } from '../../../constants/data'

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
