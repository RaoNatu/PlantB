import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass,
  faBasketShopping,
} from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import Profile from './Dropdown/Profile'

const Navutil = () => {
  const [isActive, setIsActive] = useState(false)

  const handleIsActive = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <div className="relative flex gap-7 items-center text-xl ">
        <button><FontAwesomeIcon icon={faMagnifyingGlass} className='hover:text-themeColor cursor-pointer easeInOut'/></button>
        <button onClick={handleIsActive}><FontAwesomeIcon icon={faUser} className='hover:text-themeColor cursor-pointer easeInOut'/></button>
        {isActive ? <Profile /> : ''}
        <Link to='/cart' className='flex bg-themeColor rounded-xl px-4 py-2 text-sm text-white hover:bg-black'>
          <FontAwesomeIcon icon={faBasketShopping} className='mr-2 text-xl' />
          <span>0 item</span>
        </Link>
      </div>
    </>
  )
}

export default Navutil
