import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Blogs from '../components/Blog/Blogs'
import BreadCrumbs from '../utils/BreadCrumbs'

import { getBlogs } from '../services/api'
import ScrollToTop from '../utils/ScrollToTop'

const crumbs = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Blogs',
    path: '#',
  },
]

const Blog = () => {
  const [blogsInfo, setBlogsInfo] = useState([])
  useEffect(() => {
    async function fetchData() {
      const blogsReturned = await getBlogs()
      setBlogsInfo(blogsReturned.blogs)
    }

    fetchData()
  }, [])

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <section className="custom-container py-16">
        <BreadCrumbs crumbs={crumbs} />
        <Blogs blogsInfo={blogsInfo} />
      </section>
      <Footer />
    </>
  )
}

export default Blog
