import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeadset,
  faTruckFast,
  faCoins,
  faGift,
} from '@fortawesome/free-solid-svg-icons'

const deliveryInfo = [
  {
    icon: 'faHeadset',
    heading: '24 X 7 Free Support',
    subHeading: 'Passage of Lorem Ipsum, you need to be amet embarrassing',
  },
  {
    icon: 'faTruckFast',
    heading: 'Free Worldwide Shipping',
    subHeading: 'Passage of Lorem Ipsum, you need to be amet embarrassing',
  },
  {
    icon: 'faCoins',
    heading: 'Money Back Guarantee',
    subHeading: 'Passage of Lorem Ipsum, you need to be amet embarrassing',
  },
  {
    icon: 'faGift',
    heading: 'Win $100 To Shop',
    subHeading: 'Passage of Lorem Ipsum, you need to be amet embarrassing',
  },
]

const iconsObj = {
  faHeadset: faHeadset,
  faTruckFast: faTruckFast,
  faCoins: faCoins,
  faGift: faGift,
}

const DeliveryInfo = () => {
  return (
    <div className="mt-20 flex justify-between gap-10">
      {/* card */}
      {deliveryInfo.map((data, index) => (
        <div key={index} className="group flex flex-col items-center gap-2 flex-1">
        <span className="flex items-center justify-center bg-gray-100 w-16 h-16 rounded-full group-hover:bg-themeColor transition ease-in-out duration-[.2s]">
          <FontAwesomeIcon
            icon={iconsObj[data.icon]}
            className="text-themeColor text-2xl group-hover:text-white"
          />
        </span>
        <h4 className="font-medium text-lg capitalize">{data.heading}</h4>
        <p className="text-sm text-gray-500 capitalize text-center">
          {data.subHeading}
        </p>
      </div>
      ))}
    </div>
  )
}

export default DeliveryInfo
