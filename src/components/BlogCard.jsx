import React from 'react'

const BlogCard = ({title, content}) => {
    return (
        <div className='bg-gradient-to-tr from-[#aacbff] to-[#437edc] w-11/12 p-5 rounded-lg flex flex-col gap-3'>
            <h1 className='text-2xl font-semibold'>{title}</h1>
            <p className=''>{content}...</p>
            <div className='flex justify-end'>
                <button className='bg-[#245095] text-white text-xl font-semibold px-5 py-2 rounded-full'>Read more</button>
            </div>
        </div>
    )
}

export default BlogCard