import React from 'react'
import FooterForm from './FooterForm'
import FooterLinks from './FooterLinks'
import FooterCategoryLinks from './FooterCategoryLinks'
import FooterCopyright from './FooterCopyright'

const footerInfo = [
  {
    name: 'products',
    links: [
      {
        name: 'Chinese Evergreen',
        link: '#',
      },
      {
        name: 'English Ivy',
        link: '#',
      },
      {
        name: 'Parlor Palm',
        link: '#',
      },
    ],
  },

  {
    name: 'service',
    links: [
      {
        name: 'About Us',
        link: '#',
      },
      {
        name: 'Contact',
        link: '#',
      },
      {
        name: 'Privacy Policy',
        link: '#',
      },
      {
        name: 'delivery information',
        link: '#',
      },
    ],
  },

  {
    name: 'extra',
    links: [
      {
        name: 'search',
        link: '#',
      },
      {
        name: 'wishlist',
        link: '#',
      },
      {
        name: 'all collectibles',
        link: '#',
      },
      {
        name: 'all products',
        link: '#',
      },
    ],
  },
]

const categoryLinks = [
  {
    name: 'fresh vegetable',
    link: '#',
  },
  {
    name: 'fruits',
    link: '#',
  },
  {
    name: 'snacks and foods',
    link: '#',
  },
  {
    name: 'exotic fruits',
    link: '#',
  },
  {
    name: 'organic staples',
    link: '#',
  },
  {
    name: 'rhoncus efficitur',
    link: '#',
  },
  {
    name: 'turpis nec tristique',
    link: '#',
  },
  {
    name: 'elementum turpis',
    link: '#',
  },
  {
    name: 'Duis sed tincidunt',
    link: '#',
  },
  {
    name: 'organic staples',
    link: '#',
  },
  {
    name: 'rhoncus efficitur',
    link: '#',
  },
  {
    name: 'turpis nec tristique',
    link: '#',
  },
  {
    name: 'elementum turpis',
    link: '#',
  },
  {
    name: 'Duis sed tincidunt',
    link: '#',
  },
]


const Footer = () => {
  return (
    <footer className="pt-16 pb-5 footer-bg">
      <FooterForm />
      <hr className="my-10 border-gray-200" />
      <FooterLinks footerInfo={footerInfo} />
      <hr className="custom-container my-10 border-gray-200" />
      <FooterCategoryLinks categoryLink={categoryLinks} />
      <hr className="my-5 border-gray-200" />
      <FooterCopyright />
    </footer>
  )
}

export default Footer
