import React from 'react'
import Navbar from './Navbar'
import BlogCard from './BlogCard'

const Home = () => {
  return (
    <>
        <Navbar/>
        <div className='flex flex-col justify-center items-center gap-5 mt-7'>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </div>
        <footer className='text-center py-3 bg-[#245095] text-white font-semibold mt-5'>Copyrights reserved by Harmoniq - 2024</footer>
    </>
  )
}

export default Home