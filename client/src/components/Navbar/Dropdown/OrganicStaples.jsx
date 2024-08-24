import React from 'react'
import { Link } from 'react-router-dom'

const OrganicStaples = ({ navdrop }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-x-20">
        {navdrop[0].map((data, index) => (
          <ul key={index} className="flex flex-col gap-[1px]">
            <li className="font-bold mb-2">{data.headingLink}</li>
            {data.subLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.link}
                  className="text-gray-600 text-sm hover:text-themeColor easeInOut"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>

      <div className="flex gap-5">
        {navdrop[1].map((data, index) => (
          <div key={index} className="flex flex-col border border-1 border-gray-200 px-3 py-2 rounded-xl">
            <img
              key={index}
              src={data.imageURL}
              alt="image"
              className="max-w-[250px]"
            />
            <Link to={data.link}>
              <div className="group/img-text flex flex-col gap-1 place-self-end">
                <h3 className="font-medium line-clamp-1 capitalize easeInOut group-hover/img-text:text-themeColor">
                  {data.title}
                </h3>
                <div className="flex gap-2 items-center">
                  <p className="font-bold ">Rs. {data.shownPrice}</p>
                  <p className="text-sm text-gray-400 line-through">
                    {data.price ? `Rs. ${data.price}` : ''}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
        <Link to={navdrop[2][0].link}>
          <img
            src={navdrop[2][0].imageURL}
            alt="image"
            className="rounded-xl "
          />
        </Link>
      </div>
    </>
  )
}

export default OrganicStaples
