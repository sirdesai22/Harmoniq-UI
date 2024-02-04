import React from 'react'
import { BiSolidMessage } from 'react-icons/bi'
import { FaHandsHelping, FaUserCircle } from 'react-icons/fa'
import { GoHomeFill } from "react-icons/go";

const BottomNav = () => {
    return (
        <>
            <ul className='flex justify-evenly items-center text-3xl rounded-t-3xl font-semibold text-white bg-[#245095] cursor-pointer py-5 fixed bottom-0 w-full'>
                <a href="/"><li><GoHomeFill /></li></a>
                <a href="/inbox"><li><BiSolidMessage /></li></a>
                <a href="/"><li><FaHandsHelping /></li></a>
                <a href="/"><li><FaUserCircle /></li></a>
            </ul>

        </>
    )
}

export default BottomNav