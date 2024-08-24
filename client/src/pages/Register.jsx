import React from 'react'
import BreadCrumbs from '../utils/BreadCrumbs'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import RegisterMain from '../components/Register/RegisterMain'
import ScrollToTop from '../utils/ScrollToTop'

const Register = () => {
  const crumbs = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Create Account',
      path: '#',
    },
  ]

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <section className="custom-container py-16">
        <BreadCrumbs crumbs={crumbs} />
        <RegisterMain />
      </section>
      <Footer />
    </>
  )
}

export default Register
