import React from 'react'
import FooterForm from './FooterForm'
import FooterLinks from './FooterLinks'
import FooterCategoryLinks from './FooterCategoryLinks'
import FooterCopyright from './FooterCopyright'

import { footerInfo } from '../../constants/data'

import { categoryLinks } from '../../constants/data'

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
