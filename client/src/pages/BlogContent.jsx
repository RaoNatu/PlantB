import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import BlogsContent from '../components/BlogContent/BlogsContent'
import BreadCrumbs from '../utils/BreadCrumbs'
import { useParams } from 'react-router-dom'
import { getBlog } from '../services/api'
import ScrollToTop from '../utils/ScrollToTop'

const BlogContent = () => {
  const { id } = useParams()

  const [blogInfo, setBlogInfo] = useState({})
  const crumbs = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Blogs',
      path: '/blogs',
    },
    {
      name: `${blogInfo.heading}`,
      path: `/blog/${id}`,
    },
  ]

  useEffect(() => {
    async function fetchData() {
      const blog = await getBlog(id)
      setBlogInfo(blog.blog)
    }

    fetchData()
  }, [])
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <section className="custom-container py-16">
        <BreadCrumbs crumbs={crumbs} />
        <BlogsContent blogInfo={blogInfo} blogId={id}/>
      </section>
      <Footer />
    </>
  )
}

export default BlogContent
