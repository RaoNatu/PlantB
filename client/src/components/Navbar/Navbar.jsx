import React from 'react'
import Logo from '../../utils/Logo'
import Navmenu from './Navmenu'
import Navutil from './Navutil'

import {navmenu} from '../../constants/data'

const Navbar = () => {
  return (
    <>
      <nav className="relative py-3 z-10">
        <div className="container custom-container">
          <div className="flex justify-between items-center">
            <Logo />  
            <Navmenu navmenu={navmenu}/>
            <Navutil />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
