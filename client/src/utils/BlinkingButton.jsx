import React from 'react'

const BlinkingButton = ({ className }) => {
  return (
    <button className={`absolute w-9 h-9 rounded-full bg-red-500 blinkingRedBtn ${className}`}>
      <span className='inline-block text-white font-extrabold text-xl mb-[1px]'>+</span>
    </button>
  )
}

export default BlinkingButton