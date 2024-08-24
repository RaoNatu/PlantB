import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Blog from './Dropdown/Blog'
import OrganicStaples from './Dropdown/OrganicStaples'

const Navmenu = ({ navmenu }) => {

  return (
    <>
      <ul className="flex gap-5 font-medium justify-center uppercase">
        {navmenu.map((data, index) => (
          <div key={index} className="group">
            <li>
              <Link
                to={data.link}
                className="py-5 hover:text-themeColor easeInOut flex items-center"
              >
                {data.name}
                {data.dropdown && (
                  <FontAwesomeIcon
                    className="ml-2 text-sm"
                    icon={faChevronDown}
                  />
                )}
              </Link>
              {data.dropdown && (
                <div className="absolute hidden group-hover:flex justify-between top-18 left-1/2 -translate-x-1/2 shadow-xl rounded-b-xl p-5 bg-white w-[1370px] z-10">
                  {data.name === 'organic staples' && (
                    <OrganicStaples navdrop={data.dropdown} />
                  )}
                  {data.name === 'blog' && <Blog navmenu={data.dropdown} />}
                </div>
              )}
            </li>
          </div>
        ))}
      </ul>
    </>
  )
}

export default Navmenu
