import React, { useState } from 'react'

const CategoryLeftMenu = ({ leftMenuData }) => {
  const [isActive, setIsActivee] = useState(0)

  const handleActiveBtn = (index) => {
    setIsActivee(index)
  }

  return (
    <div className="w-1/4">
      <ul className="border-[1px] border-gray-200 rounded-xl overflow-hidden">
        {leftMenuData.map((data, index) => (
          <li
            key={index}
            onClick={() => handleActiveBtn(index)}
            className={`group capitalize py-3 px-8 cursor-pointer font-mediu transition-all ease-in-out duration-[.2s] ${
              isActive == index
                ? 'bg-themeColor/10 text-themeColor'
                : 'hover:bg-themeColor/10'
            } ${
              index !== leftMenuData.length - 1
                ? 'border-b-[1px] border-b-gray-200'
                : ''
            }`}
          >
            <span
              className={`inline-block transition-all ease-in-out duration-[.2s] ${
                isActive === index
                  ? 'translate-x-4'
                  : 'group-hover:translate-x-4 group-hover:text-themeColor'
              }`}
            >
              {data.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryLeftMenu
