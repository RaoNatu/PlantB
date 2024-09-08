import React from 'react'
import CategoryLeftMenu from './CategoryLeftMenu'
import CategoryRightMenu from './CategoryRightMenu'

import { leftMenu } from '../../../constants/data'

const Category = () => {
  return (
    <section className="custom-container py-2">
      <div className='flex flex-col gap-7 items-center'>
        <h2 className="text-center font-medium text-3xl">Categories Product</h2>
        <p className="text-sm text-gray-500 capitalize text-center w-1/3">
          It is a long established fact that a reader will be distracted by the
          readable is that it has a more-or-less normal dist...
        </p>
      </div>

      {/* Left Size */}
      <div className='flex gap-8 py-10'>
        <CategoryLeftMenu leftMenuData={leftMenu} />
        <CategoryRightMenu />
      </div>
    </section>
  )
}

export default Category
