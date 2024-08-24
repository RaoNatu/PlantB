import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Home/Hero/Hero'
import Section1 from '../components/Home/Banner/Banner'
import TopProduct from '../components/Home/TopProduct/TopProduct'
import Cta from '../components/Home/CTA/Cta'
import Banner2 from '../components/Home/Banner2/Banner2'
import Category from '../components/Home/Category/Category'
import Banner3 from '../components/Home/Banner3/Banner3'
import ClientSection from '../components/Home/ClientSection/ClientSection'
import Partners from '../components/Home/Partners/Partners'
import Blogs from '../components/Home/Blogs/Blogs'
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../utils/ScrollToTop'

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Section1 />
      <TopProduct />
      <Cta />
      <Banner2 />
      <Category />
      <Banner3 />
      <ClientSection />
      <Partners />
      <Blogs />
      <Footer />
    </>
  )
}

export default Home
