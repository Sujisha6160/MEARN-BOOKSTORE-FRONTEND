import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaArrowRight, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <>
      <div className="md:grid grid-cols-3 md:gap-9 bg-gray-900 text-white p-10">
        <div>
            <h3 className='font-bold'>About Us</h3>
            <p className='text-justify mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, est eius numquam eligendi enim odit nisi, minima provident adipisci maxime impedit a! Magnam doloribus laboriosam obcaecati earum? Dolores, incidunt saepe!</p>
        </div>
        <div>
            <h3 className='font-bold'>NEWSLETTER</h3>
            <p className='my-5'>Stay Updated with out latest Trends</p>
            <div className='flex'>
                <input type="text" placeholder='Email Id' className='p-2 bg-white placeholder-gray-500' />
                <button className='bg-yellow-400 p-3'><FaArrowRight/></button>
            </div>
        </div>
        <div>
            <h3 className='font-bold'>Follow Us</h3>
            <p className='my-5'>Let us be social</p>
            <div className='flex mt-4'>
                <FaInstagramSquare className='me-3 text-2xl'/>
                <FaXTwitter className='me-3 text-2xl'/>
                <FaFacebookSquare className='me-3 text-2xl'/>
                <BsLinkedin className='text-2xl'/>
            </div>
        </div>
      </div>

      <div className='bg-black p-3 text-center text-white'>
        <p>Copyright © 2023 All rights reserved | This website is made with &#10084; by Sujisha | Luminar Technolab</p>
      </div>
    </>
  )
}

export default Footer
