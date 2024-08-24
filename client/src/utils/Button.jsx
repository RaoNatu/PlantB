import React from 'react'

const buttonStyles = {
  primary: 'bg-themeColor text-white hover:bg-black uppercase rounded-xl',
  secondary: 'bg-white text-themeColor border-[1px] border-themeColor hover:bg-themeColor hover:text-white uppercase rounded-xl',
  tertiary: 'bg-white text-black border-[1px] border-dashed border-themeColor hover:text-white hover:bg-themeColor rounded-xl',
  plantSize: 'border-[1px] border-gray-200 text-black rounded-md',
  form: 'bg-themeColor text-white hover:bg-black rounded-lg',
}

const buttonSizes = {
  small: 'text-sm px-4 py-2',
  medium: 'text-md px-5 py-2 max-w-fit',
  large: 'text-md px-10 py-3 max-w-fit',
}

const Button = ({
  variant = 'primary',
  size = 'large',
  children,
  onClick,
  className = '',
}) => {
  const classNames = `${buttonStyles[variant]} ${buttonSizes[size]} ${className} transition all ease-in-out duration-[.4s]`

  return <button className={classNames} onClick={onClick}>{children}</button>
}

export default Button
