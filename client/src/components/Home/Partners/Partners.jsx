import React from 'react'

const partnerInfo = [
  {
    imageURL: '/images/partner/1.webp',
  },
  {
    imageURL: '/images/partner/2.webp',
  },
  {
    imageURL: '/images/partner/3.webp',
  },
  {
    imageURL: '/images/partner/4.webp',
  },
  {
    imageURL: '/images/partner/5.webp',
  },
  {
    imageURL: '/images/partner/1.webp',
  },
  {
    imageURL: '/images/partner/2.webp',
  },
  {
    imageURL: '/images/partner/3.webp',
  },
  {
    imageURL: '/images/partner/4.webp',
  },
  {
    imageURL: '/images/partner/5.webp',
  },
]

const Partners = () => {
  return (
    <section className="custom-container border border-gray-200 mt-56 rounded-xl overflow-hidden py-5 px-10">
      <div className="flex gap-7">
        {partnerInfo.map((data, index) => (
          <img key={index} src={data.imageURL} alt="" className='w-48' />
        ))}
      </div>
    </section>
  )
}

export default Partners
