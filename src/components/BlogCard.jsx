import React from 'react'

const BlogCard = () => {
    return (
        <div className='bg-gradient-to-tr from-[#aacbff] to-[#437edc] w-11/12 p-5 rounded-lg flex flex-col gap-3'>
            <h1 className='text-2xl font-semibold'>Aniexty Attack</h1>
            <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, repudiandae voluptate accusamus illum optio consectetur fugit dignissimos? Et ratione nostrum vitae nihil eligendi veniam? Est? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla voluptatem veniam vero. Laudantium eos dicta id fugiat! Error, eveniet sed.</p>
            <div className='flex justify-end'>
                <button className='bg-[#245095] text-white text-xl font-semibold px-5 py-2 rounded-full'>Read more</button>
            </div>
        </div>
    )
}

export default BlogCard