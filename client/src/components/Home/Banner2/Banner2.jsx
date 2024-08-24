import React from 'react'
import BannerContent from './BannerContent'

const bannerContents = [
  {
    imageURL: 'images/banner/1.webp',
    sale: 'hot sale 30%',
    heading: 'hanging pots & plants',
  },
  {
    imageURL: 'images/banner/1.webp',
    sale: 'hot sale 30%',
    heading: 'hanging pots & plants',
  },
]

const Banner2 = () => {
  return (
    <section className="custom-container py-14">
      <div className="flex gap-8">
        {bannerContents.map((data, index) => (
          <BannerContent key={index} bannerContent={data} />
        ))}
      </div>
    </section>
  )
}

export default Banner2
