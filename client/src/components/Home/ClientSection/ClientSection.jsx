import React, { useState } from 'react'
import ClientCard from './ClientCard'
import CarouselBullets from '../../../utils/CarouselBullets'

import { clientInfo } from '../../../constants/data' 

const ClientSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleBulletClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="relative pt-16 pb-48 bg-themeColor/10">
      <div className="flex flex-col gap-7 items-center">
        <h2 className="text-center font-medium text-3xl">What Say Client</h2>
        <p className="text-sm text-gray-500 capitalize text-center w-1/4">
          It is a long established fact that a reader will be distracted by the
          readable is that it has a more-or-less normal dist...
        </p>
      </div>

      <div
        className="absolute custom-container overflow-hidden top-52 left-1/2 -translate-x-1/2 py-5
      "
      >
        <div
          className="flex gap-8 transition-all ease-in-out duration-[0.4s] pl-2"
          style={{ transform: `translate(-${currentIndex * 33.4}%)` }}
        >
          {clientInfo.map((data, index) => (
            <ClientCard key={index} clientInfo={data} />
          ))}
        </div>
      </div>

      <CarouselBullets
        className="top-[515px]"
        times={clientInfo.length - 2}
        currentIndex={currentIndex}
        onClick={handleBulletClick}
      />
    </section>
  )
}

export default ClientSection
