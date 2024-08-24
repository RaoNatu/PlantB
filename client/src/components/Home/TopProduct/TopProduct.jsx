import React, { useState } from 'react'
import Button from '../../../utils/Button'
import PlantCards from '../../PlantCards/PlantCards'

const buttons = [
  { name: 'Featured', key: 'featured' },
  { name: 'Latest', key: 'latest' },
  { name: 'Bestseller', key: 'bestSeller' },
]

const productsInfo = [
  // 1st cardd
  {
    category: {
      featured: true,
      latest: false,
      bestSeller: false,
    },
    imageURL: 'images/plants/1.webp',
    plantInfo: {
      link: '#',
      category: 'Plant',
      name: 'House Parlor Palm Plant',
      rating: 0,
      discountPrice: 400,
      actualPrice: 800,
    },
  },

  // 2nd card
  {
    category: {
      featured: true,
      latest: true,
      bestSeller: false,
    },
    imageURL: 'images/plants/2.webp',
    plantInfo: {
      link: '#',
      category: 'Plant',
      name: 'designer living room European Pan Palm plant',
      rating: 0,
      discountPrice: 600,
      actualPrice: 900,
    },
  },
  {
    category: {
      featured: true,
      latest: false,
      bestSeller: true,
    },
    imageURL: 'images/plants/3.webp',
    plantInfo: {
      link: '#',
      category: 'Plant',
      name: 'house Shape Sago Palm Plant',
      rating: 0,
      discountPrice: 1600,
      actualPrice: 900,
    },
  },
  {
    category: {
      featured: true,
      latest: false,
      bestSeller: true,
    },
    imageURL: 'images/plants/4.webp',
    plantInfo: {
      link: '#',
      category: 'Plant',
      name: 'designer small Barberton Daisy plant',
      rating: 0,
      discountPrice: 1800,
      actualPrice: 900,
    },
  },
  {
    category: {
      featured: true,
      latest: false,
      bestSeller: true,
    },
    imageURL: 'images/plants/5.webp',
    plantInfo: {
      link: '#',
      category: 'Plant',
      name: 'designer modern Pygmy Date Palm plant',
      rating: 0,
      discountPrice: 900,
      actualPrice: 1200,
    },
  },
  {
    category: {
      featured: true,
      latest: true,
      bestSeller: false,
    },
    imageURL: 'images/plants/6.webp',
    plantInfo: {
      link: '#',
      category: 'Plant',
      name: 'indoor house Broadleaf Lady Palm plant',
      rating: 0,
      discountPrice: 1100,
      actualPrice: 900,
    },
  },
  {
    category: {
      featured: true,
      latest: false,
      bestSeller: false,
    },
    imageURL: 'images/plants/7.webp',
    plantInfo: {
      link: '#',
      category: 'Plant',
      name: 'house hanging Golden Pothos plant',
      rating: 0,
      discountPrice: 700,
      actualPrice: 900,
    },
  },
  {
    category: {
      featured: true,
      latest: true,
      bestSeller: false,
    },
    imageURL: 'images/plants/8.webp',
    plantInfo: {
      link: '#',
      category: 'Plant',
      name: 'designer modern Pin Stripe Calathea plant',
      rating: 0,
      discountPrice: 400,
      actualPrice: 900,
    },
  },
  {
    category: {
      featured: true,
      latest: true,
      bestSeller: false,
    },
    imageURL: 'images/plants/9.webp',
    plantInfo: {
      link: '#',
      category: 'Plant',
      name: 'designer indoor Cast Iron Plant',
      rating: 0,
      discountPrice: 500,
      actualPrice: 900,
    },
  },
  {
    category: {
      featured: true,
      latest: false,
      bestSeller: true,
    },
    imageURL: 'images/plants/10.webp',
    plantInfo: {
      link: '#',
      category: 'Plant',
      name: 'balcony designer hanging Creeping Fig plant',
      rating: 0,
      discountPrice: 800,
      actualPrice: 900,
    },
  },
]

const TopProduct = () => {
  const [activeButton, setActiveButton] = useState('Featured')

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName)
  }

  const filteredProducts = productsInfo.filter(
    (product) =>
      product.category[
        buttons.find((button) => button.name === activeButton).key
      ]
  )

  return (
    <section className="custom-container py-14 border-t-[2px] border-gray-100">
      <div className="flex flex-col gap-8">
        <h2 className="text-center font-medium text-3xl">Top Products</h2>
        <div className="flex gap-16 justify-center">
          {buttons.map((data, index) => (
            <Button
              key={index}
              className={
                activeButton === `${data.name}` ? 'activeProductBtn' : ''
              }
              variant="tertiary"
              size="medium"
              onClick={() => handleButtonClick(`${data.name}`)}
            >
              {data.name}
            </Button>
          ))}
        </div>
        <PlantCards productsInfo={filteredProducts} products={true} rating={true}/>
      </div>
    </section>
  )
}

export default TopProduct
