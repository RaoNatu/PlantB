import React from 'react'
import BlinkingButton from '../../../utils/BlinkingButton'

const Banner3 = () => {
  return (
    <section className='overflow-hidden'>
      <div className='flex'>
        <div className='relative'>
          <img src="/images/banner/2.webp" alt="banner3_1" />
          <BlinkingButton className={`top-[420px] left-44`} />
        </div>
        <div className='relative'>
          <img src="/images/banner/3.jpg" alt="banner3_2" />
          <BlinkingButton className={`top-[560px] left-48`} />
          <BlinkingButton className={`top-[230px] left-96`} />
        </div>
        <div className='relative'>
          <img src="/images/banner/4.webp" alt="banner3_3" />
          <BlinkingButton className={`top-[700px] left-96`} />
        </div>
      </div>
    </section>
  )
}

export default Banner3