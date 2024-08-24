import React from 'react'
import Button from '../../../utils/Button'

const BannerContent = ({ bannerContent }) => {
  return (
    <div className="relative overflow-hidden rounded-xl beffect">
      <img src={bannerContent.imageURL} alt="banner" />
      <div className="absolute flex flex-col gap-5 justify-center h-full w-[40%] top-0 ml-10">
        <p className="uppercase text-gray-500">{bannerContent.sale}</p>
        <h2 className="uppercase font-bold text-4xl">{bannerContent.heading}</h2>
        <Button>Shop now</Button>
      </div>
    </div>
  )
}

export default BannerContent
