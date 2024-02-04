import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import messages from '../data/inbox'
import Navbar from './Navbar';

const Inbox = () => {
    return (
        <>
        <Navbar/>
        <div className="mt-16"></div>
            {
                messages.map((msg) => (
                    <div key={msg.id} className='flex p-3 border border-slate-500'>
                        <p className='text-5xl'><FaUserCircle /></p>
                        <div className='pl-4'>
                            <h2>{msg.name}</h2>
                            {
                                msg.message.length>30
                                ?
                                <p>{msg.message.substring(0,30)}...</p>
                                :
                                <p>{msg.message}</p>
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Inbox