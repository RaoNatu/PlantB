import React from 'react'

const FooterCopyright = () => {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <p className='text-sm text-gray-500'>© 2024, Plantb-theme Powered by Shopify</p>
      <div className='flex gap-1 text-2xl'>
        <i className="fa-brands fa-cc-visa"></i>
        <i className="fa-brands fa-cc-mastercard"></i>
        <i className="fa-brands fa-cc-paypal"></i>
        <i className="fa-brands fa-cc-diners-club"></i>
      </div>
    </div>
  )
}

export default FooterCopyright