import React, { useState } from 'react'
const Cta = () => {
  const [isHover, setIsHover] = useState(false)

  const handleIsHoverIn = () => {
    setIsHover(true)
  }

  const handleIsHoverOut = () => {
    setIsHover(false)
  }

  return (
    <div className=" cta-background">
      <div className="flex flex-col gap-1 text-white items-center py-32">
        <h4 className="text-medium text-xl uppercase">Welcome to Planitous</h4>
        <h2 className="text-[90px] montez-regular hover:tracking-wider transition-all ease-in-out duration-[.4s]">
          Garden From Our Heart.
        </h2>
        <span className="flex items-center">
          <i
            onMouseEnter={handleIsHoverIn}
            onMouseLeave={handleIsHoverOut}
            className={`fa-thin fa-circle-play text-5xl cursor-pointer ${
              isHover
                ? 'cta-play-animation-show rotate-180'
                : 'cta-play-animation-hide'
            }`}
          ></i>
          <span className="uppercase ml-3  text-2xl cursor-pointer">
            Play Video
          </span>
        </span>
      </div>
    </div>
  )
}

export default Cta
