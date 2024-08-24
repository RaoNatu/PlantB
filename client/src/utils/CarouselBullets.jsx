import React from 'react'

const CarouselBullets = ({ times, currentIndex, onClick, className }) => {
  const bulletArray = Array.from({ length: times })

  return (
    <div className={`absolute left-1/2 -translate-x-1/2 bottom-5 z-10 flex gap-3 ${className}`}>
      {bulletArray.map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={`w-[10px] h-[10px] rounded-full bg-themeColor ${
            index === currentIndex
              ? 'opacity-80'
              : 'opacity-30 hover:bg-black hover:opacity-100'
          } `}
        ></button>
      ))}
    </div>
  )
}

export default CarouselBullets
