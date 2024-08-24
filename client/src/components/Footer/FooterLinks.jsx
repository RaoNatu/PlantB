import React from 'react'
import FooterContact from './FooterContact'

const FooterLinks = ({ footerInfo }) => {
  return (
    <div className='custom-container flex'>
      <FooterContact />
      <div className="flex gap-[14rem]">
        {footerInfo.map((data, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <h2 className="uppercase text-xl font-medium">{data.name}</h2>
            </div>
            {data.links.map((link, idx) => (
              <a
                key={idx}
                href={link.link}
                className="text-gray-600 hover:text-themeColor text-sm capitalize"
              >
                {link.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FooterLinks
