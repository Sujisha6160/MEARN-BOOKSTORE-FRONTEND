import React from 'react'
import { FaPowerOff } from "react-icons/fa";

function AdminHeader() {
    return (
        <>
            <nav className='px-5 py-3 flex items-center'>
                {/* logo */}
                <div className='flex items-center'>
                    <img width={"50px"} height={"50px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvFjQNYe6YGfgjWyO1knewZkMworG85p0HSF6CSM71SNoXvmhXWM4z6MAoouVt-86h8ds&usqp=CAU" alt="" />
                    <h1 className='font-bold text-2xl ms-4'>BOOKSTORE</h1>
                </div>
                {/* logout */}
                <div className='ms-auto'>
                    <button className='flex justify-between items-center border border-black rounded px-4 py-3 ms-3 hover:bg-black hover:text-white'><FaPowerOff className='me-3'/>Logout</button>
                </div>
            </nav>
        </>
    )
}

export default AdminHeader