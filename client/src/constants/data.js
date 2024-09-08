// *********************************************** NAVBAR ***********************************************
// Navbar
export const navmenu = [
  {
    name: 'Home',
    link: '/',
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
// *********************************************** HERO ***********************************************
// Home - Hero
export const heroInfo = [
  {
    heading: 'Organic fresh fruits for your health',
    subHeading:
      'Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris eleifend sagittis mollis. Nulla finibus arcu eu tortor gravida aliquet',
    imageURL: 'images/hero/slider-1.webp',
  },
  {
    heading: 'Organic fresh fruits for your health',
    subHeading:
      'Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris eleifend sagittis mollis. Nulla finibus arcu eu tortor gravida aliquet',
    imageURL: 'images/hero/slider-2.webp',
  },
]
// Home - Banner
export const section1Info = [
  {
    imageURL: 'images/plants-group/1.webp',
    topHeading: 'New collection',
    mainHeading: 'Fall/summer terrariums',
    subHeading:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Ipsum is that it has a more-or-less normal dist...',
  },
  {
    imageURL: 'images/plants-group/2.webp',
    topHeading: 'Just for you',
    mainHeading: 'Assorted snake air plant',
    subHeading:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Ipsum is that it has a more-or-less normal dist...',
  },
]
// Hero - Banner 2
export const bannerContents = [
  {
    imageURL: 'images/banner/1.webp',
    sale: 'hot sale 30%',
    heading: 'hanging pots & plants',
  },
  {
    imageURL: 'images/banner/1.webp',
    sale: 'hot sale 30%',
    heading: 'hanging pots & plants',
  },
]
// Hero - Category
export const leftMenu = [
  { name: 'fresh fruits' },
  { name: 'bonsail plant' },
  { name: 'botanical' },
  { name: 'office plant' },
  { name: 'organic' },
  { name: 'seasonal plants' },
  { name: 'spacial plants' },
  { name: 'vegetable' },
  { name: 'latest' },
]
// Hero - Client
export const clientInfo = [
  {
    imageURL: '/images/client/1.webp',
    feedback:
      'Sed elit quam, iaculis sed semper sit amet udin vitae nibh. at magna akal akalsemorpe elit akalsemo the semper iaculis...',
    name: 'Mr. John Deo',
    designation: 'Designer',
  },
  {
    imageURL: '/images/client/2.webp',
    feedback:
      'Sed elit quam, iaculis sed semper sit amet udin vitae nibh. at magna akal akalsemorpe elit akalsemo the semper iaculis...',
    name: 'Mr. Onsequat',
    designation: 'Developer',
  },
  {
    imageURL: '/images/client/3.avif',
    feedback:
      'Sed elit quam, iaculis sed semper sit amet udin vitae nibh. at magna akal akalsemorpe elit akalsemo the semper iaculis...',
    name: 'Mr. John Deo',
    designation: 'Designer',
  },
  {
    imageURL: '/images/client/1.webp',
    feedback:
      'Sed elit quam, iaculis sed semper sit amet udin vitae nibh. at magna akal akalsemorpe elit akalsemo the semper iaculis...',
    name: 'Mr. John Deo',
    designation: 'Designer',
  },
  {
    imageURL: '/images/client/2.webp',
    feedback:
      'Sed elit quam, iaculis sed semper sit amet udin vitae nibh. at magna akal akalsemorpe elit akalsemo the semper iaculis...',
    name: 'Mr. John Deo',
    designation: 'Devloper',
  },
]
// Hero - Partner
export const partnerInfo = [
  {
    imageURL: '/images/partner/1.webp',
  },
  {
    imageURL: '/images/partner/2.webp',
  },
  {
    imageURL: '/images/partner/3.webp',
  },
  {
    imageURL: '/images/partner/4.webp',
  },
  {
    imageURL: '/images/partner/5.webp',
  },
  {
    imageURL: '/images/partner/1.webp',
  },
  {
    imageURL: '/images/partner/2.webp',
  },
  {
    imageURL: '/images/partner/3.webp',
  },
  {
    imageURL: '/images/partner/4.webp',
  },
  {
    imageURL: '/images/partner/5.webp',
  },
]

// *********************************************** FOOTER ***********************************************
// Footer
export const footerInfo = [
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

export const categoryLinks = [
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

export const productsInfo = [
  // 1st cardd
  {
    category: {
      featured: true,
      latest: false,
      bestSeller: false,
    },
    imageURL: '/images/plants/1.webp',
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
    imageURL: '/images/plants/2.webp',
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
    imageURL: '/images/plants/3.webp',
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
    imageURL: '/images/plants/4.webp',
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
    imageURL: '/images/plants/5.webp',
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
    imageURL: '/images/plants/6.webp',
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
    imageURL: '/images/plants/7.webp',
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
    imageURL: '/images/plants/8.webp',
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
    imageURL: '/images/plants/9.webp',
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
    imageURL: '/images/plants/10.webp',
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