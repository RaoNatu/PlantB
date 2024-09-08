import React from 'react'
import BannerContent from './BannerContent'

import { bannerContents } from '../../../constants/data'

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
