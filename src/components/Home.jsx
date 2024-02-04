import React from 'react'
import Navbar from './Navbar'
import BlogCard from './BlogCard'
import BottomNav from './BottomNav'
import blogs from '../data/blogs'

const Home = () => {
  return (
    <>
        <Navbar/>
        <div className='flex flex-col justify-center items-center gap-5 my-20'>
          {
            blogs.map((blog) => (
              <BlogCard key={blog.id} title={blog.title} content={blog.content.substring(0, 250)}/>
            ))
          }
        </div>
        {/* <footer className='text-center py-3 bg-[#245095] text-white font-semibold mt-5'>Copyrights reserved by Harmoniq - 2024</footer> */}
        <BottomNav/>
    </>
  )
}

export default Home