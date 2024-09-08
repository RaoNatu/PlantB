import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

const CardtHover = ({ hoveredIndex, productInfo, addToCart }) => {
  const [itemNumber, setItemNumber] = useState(1)

  const handleMinus = () => {
    if (itemNumber > 1) {
      setItemNumber(itemNumber - 1)
    }
  }

  const handleAdd = () => {
    if (itemNumber < 100) {
      setItemNumber(itemNumber + 1)
    }
  }

  return (
    <div>
      <div
        className={`absolute flex items-center gap-1 bottom-9 left-1/2 -translate-x-1/2 ${
          hoveredIndex ? 'productCountBtn-show' : 'productCountBtn-hide'
        }`}
      >
        <div className="bg-themeColor rounded-full px-3 py-[1px]">
          <button
            className="text-white text-2xl font-light pr-3"
            onClick={handleMinus}
          >
            -
          </button>
          <input
            className="relative bottom-[2px] bg-themeColor outline-none w-5 text-center caret-white text-white text-sm"
            type="text"
            value={itemNumber}
          />
          <button
            className="text-white text-2xl font-light pl-3"
            onClick={handleAdd}
          >
            +
          </button>
        </div>
        <button
          onClick={() => addToCart(productInfo, itemNumber)}
          className="inline-block bg-themeColor text-white w-8 h-8 rounded-full hover:bg-black transition ease-in-out duration-[.4s]"
        >
          <FontAwesomeIcon icon={faBasketShopping} />
        </button>
      </div>
    </div>
  )
}

export default CardtHover
