import React from 'react'
import { FaHome } from "react-icons/fa";
import { PiBooks } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Link } from 'react-router-dom';

function AdminSidebar() {
  return (
    <>
    <div className='bg-gray-200 w-full md:min-h-screen flex items-center flex-col'>
        <div className='my-10'>
            <img src="https://p7.hiclipart.com/preview/782/114/405/5bbc3519d674c.jpg" style={{width:'170px',height:'170px',borderRadius:'50%'}} alt="Profile image" />
        </div>
        <h1 className='text-2xl mb-10'>Sujisha Sureshbabu</h1>
        <div className='mb-10'>
            <div className='mb-4 flex'>
                <input type='radio' id='home' readOnly/>
                <Link to={"/admin-home"}><label htmlFor='home' className='flex ms-3'><FaHome className='mt-1 me-1'/>Home</label></Link>
            </div>
              <div className='mb-4 flex'>
                <input type='radio' id='books' readOnly/>
                <Link to={"/admin-books"}><label htmlFor='books' className='flex ms-3'><PiBooks  className='mt-1 me-1'/>Books</label></Link>
            </div>
              <div className='mb-4 flex'>
                <input type='radio' id='careers' readOnly/>
                <Link to={"/admin-careers"}><label htmlFor='careers' className='flex ms-3'><FaGraduationCap  className='mt-1 me-1'/>careers</label></Link>
            </div>
              <div className='mb-4 flex'>
                <input type='radio' id='settings' readOnly/>
                <Link to={"/admin-settings"}><label htmlFor='settings' className='flex ms-3'><IoMdSettings  className='mt-1 me-1'/>settings</label></Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default AdminSidebar