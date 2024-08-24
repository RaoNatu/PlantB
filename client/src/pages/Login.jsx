import React from 'react'
import BreadCrumbs from '../utils/BreadCrumbs'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import LoginMain from '../components/Login/LoginMain'
import ScrollToTop from '../utils/ScrollToTop'

const Login = () => {
  const crumbs = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Account',
      path: '#',
    },
  ]

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <section className="custom-container py-16">
        <BreadCrumbs crumbs={crumbs} />
        <LoginMain />
      </section>
      <Footer />
    </>
  )
}

export default Login
