import React from 'react'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Footer'
import { Link } from 'react-router-dom'

function AllBooks() {
  return (
    <>
      <Header />
      <div className=' flex justify-center items-center flex-col my-5'>
        <h1 className='text-3xl font-bold my-5'>Collections</h1>
        <div className='flex my-5'>
          <input type="text" className='p-2 border border-gray-200 text-black w-100 placeholder-gray-500 placehol ' placeholder='Search by title' />
          <button className='bg-blue-900 text-white p-2 hover:bg-white hover:text-blue-900 hover:border-blue-800'>Search</button>
        </div>
      </div>
      <div className='md:grid grid-cols-4 md:px-20 p-5 mb-10'>
        {/* Filter */}
        <div className='col-span-1'>
          <h1>Filters</h1>
          <div className='mt-5'>
            <input type="radio" id="Literary Fiction" />
            <label htmlFor="Literary Fiction" className='ms-2'>Literary Fiction</label>
          </div>
        </div>
        <div className='col-span-3'>
          <div className='md:grid grid-cols-4 mt-5 md:mt-0'>
            <div className='shadow rounded p-3 mx-4 my-3'>
              <img width={"100%"} height={"300px"} src="https://0.academia-photos.com/attachment_thumbnails/92690744/mini_magick20221019-1-rrdxwh.png?1666169459" alt="book" />
              <div className=' flex flex-col justify-center items-center mt-4'>
                <p>Book title</p>
                <p>Author</p>
                <Link to={"/view-books/1"} className='bg-blue-800 p-2 text-white hover:text-blue-900 hover:border hover:border-blue-800 w-full text-center'>View Book</Link>
              </div>
            </div>
          </div>
        </div>
        <p className=''></p>
      </div>

      <div className='my-10 flex justify-center items-center flex-col'>
        <img src="https://cdn-icons-gif.flaticon.com/11255/11255957.gif" alt="" />
        <p className='font-semibold text-xl mt-5'>Please <Link to={"/login"} className='text-blue-700 font-bold'>Login</Link> to explore more...</p>
      </div>
      <Footer />
    </>
  )
}

export default AllBooks
