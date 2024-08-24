import React from 'react'

const socialLinks = [
  {
    icon: 'fa-x-twitter',
    link: '#',
  },
  {
    icon: 'fa-square-facebook',
    link: '#',
  },
  {
    icon: 'fa-pinterest',
    link: '#',
  },
  {
    icon: 'fa-instagram',
    link: '#',
  },
  {
    icon: 'fa-tumblr',
    link: '#',
  },
]

const FooterContact = () => {
  return (
    <div className="flex flex-col gap-5 mr-[10rem]">
      <div className="flex flex-col gap-1">
        <h2 className="uppercase text-xl font-medium">Contact Us</h2>
        <span>
          <i className="fa-light fa-location-dot text-themeColor mr-1"></i> demo
          store United States.
        </span>
        <span>
          <i className="fa-light fa-phone-volume text-themeColor mr-1"></i>{' '}
          0123-456-789
        </span>
        <span>
          <i className="fa-light fa-envelope text-themeColor mr-1"></i>{' '}
          demo@demo.com
        </span>
      </div>
      <div className="flex gap-1">
        {socialLinks.map((data, index) => (
          <a
            key={index}
            href={data.link}
            className="relative w-9 h-9 bg-gray-200 rounded-lg hover:bg-themeColor hover:text-white transition-all ease-in-out duration-[0.2s]"
          >
            <i
              className={`fa-brands ${data.icon} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
            ></i>
          </a>
        ))}
      </div>
    </div>
  )
}

export default FooterContact
