import React, { useEffect, useState } from 'react'
import Button from '../../../utils/Button'
import PlantCards from '../../PlantCards/PlantCards'
import axios from 'axios'

const buttons = [
  { name: 'Featured', key: 'featured' },
  { name: 'Latest', key: 'latest' },
  { name: 'Bestseller', key: 'bestSeller' },
]


const TopProduct = () => {
  const [activeButton, setActiveButton] = useState('Featured')
  const [productsInfo, setProductsInfo] = useState([])
  
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:3000/api/products')
      setProductsInfo(response.data.products)
    }
    fetchData()
  }, [])

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
