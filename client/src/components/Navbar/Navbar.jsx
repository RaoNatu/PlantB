import React from 'react'
import Logo from '../../utils/Logo'
import Navmenu from './Navmenu'
import Navutil from './Navutil'

const navmenu = [
  {
    name: 'fresh fruits',
    link: '/fruits',
  },
  {
    name: 'seasonal fruits',
    link: '/seasonalfruits',
  },
  {
    name: 'organic staples',
    link: '#',
    dropdown: [
      // Left dropdown links
      [
        {
          headingLink: 'Flowers',
          subLinks: [
            { name: 'Aloe', link: '#' },
            { name: 'Anthurium', link: '#' },
            { name: 'Asparagus Fern', link: '#' },
            { name: 'Peace Lily', link: '#' },
          ],
        },
        {
          headingLink: 'Hanging Plants',
          subLinks: [
            { name: 'Chinese Evergreen', link: '#' },
            { name: 'English Ivy', link: '#' },
            { name: 'Parlor Palm', link: '#' },
          ],
        },
        {
          headingLink: 'Indoor Plants',
          subLinks: [
            { name: 'Peace Lily', link: '#' },
            { name: 'Aloe', link: '#' },
            { name: 'Anthurium', link: '#' },
            { name: 'Hoya', link: '#' },
          ],
        },
        {
          headingLink: 'Plant Port',
          subLinks: [
            { name: 'Gerber Daisy', link: '#' },
            { name: 'Philodendrons', link: '#' },
            { name: 'Canna & Alocasia', link: '#' },
            { name: 'Agapanthus', link: '#' },
          ],
        },
      ],

      // Middle dropdown plants
      [
        {
          imageURL: '/images/plants/1.webp',
          title: 'Designer Small Barberton Daisy Plant',
          shownPrice: '800.00',
          price: '900.00',
          link: '#',
        },
        {
          imageURL: '/images/plants/2.webp',
          title: 'Designer Modern Pin Stripe Calathea Plant',
          shownPrice: '200.00',
          price: null,
          link: '#',
        },
      ],

      // Right dropdown ad
      [
        {
          imageURL: '/images/ads/1.webp',
          link: '#',
        },
      ],
    ],
  },
  {
    name: 'vegetable',
    link: '/vegetable',
  },
  {
    name: 'blog',
    link: '/blogs',
    dropdown: [
      {
        imageURL: '/images/blogs/1.webp',
        title: 'Vivamus fringilla scelerisque justo quis egestas.',
        date: '20 Aug 24',
      },
      {
        imageURL: '/images/blogs/2.webp',
        title: 'Vestibulum ante ipsum primis in faucibus orci luctus et u...',
        date: '20 Aug 24',
      },
      {
        imageURL: '/images/blogs/3.webp',
        title: 'Etiam imperdiet, turpis vel malesuada ullamcorper.',
        date: '20 Aug 24',
      },
      {
        imageURL: '/images/blogs/4.webp',
        title: 'Fusce dignissim metus ipsum, vitae porttitor lacus.',
        date: '20 Aug 24',
      },
    ],
  },
]

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
