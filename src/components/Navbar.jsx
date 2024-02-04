import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { BiSolidMessage } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
            <div className='flex justify-center items-center bg-[#245095] py-4 px-2 fixed w-full top-0'>
                <h1 className='text-3xl font-bold text-white'>HARMONIQ</h1>
                {/* <input type="text" name="" id="" placeholder='Search' className='w-3/6 p-2 px-3 rounded-lg'/> */}
                {/* <div className="">
                    <ul className='flex justify-center items-center gap-5 text-3xl font-semibold text-white cursor-pointer'>
                        <a href="/"><li><FaHandsHelping /></li></a>
                        <a href="/inbox"><li><BiSolidMessage/></li></a>
                        <a href="/"><li><FaUserCircle/></li></a>
                    </ul>
                </div> */}
            </div>
        </>
    )
}

export default Navbar