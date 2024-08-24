import React from 'react'

const FooterCategoryLinks = ({ categoryLink }) => {
  return (
    <div className="flex footer-category-links text-gray-500 text-sm justify-center items-center flex-wrap w-1/2 mx-auto">
      {categoryLink.map((data, index) => (
        <a key={index} href={data.link} className="capitalize">
          {data.name}
        </a>
      ))}
    </div>
  )
}

export default FooterCategoryLinks
