import React, { useState } from 'react'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Footer'
import { MdVerified } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'

function Profile() {
  const [sellBook, setSellBook] = useState()
  const [BookStatus, setBookStatus] = useState()
  const [purchaseHistory, setPurchaseHistory] = useState()
  return (
    <>
      <Header />
      <div style={{ height: "200px" }} className='bg-black'></div>
      <div className='bg-white p-3' style={{ width: "230px", height: "230px", borderRadius: "50%", marginLeft: "70px", marginTop: "-130px" }}>
        <img style={{ width: "200px", height: "200px", borderRadius: "50%" }} src="https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2205.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
      </div>
      <div className='md:flex justify-between px-20 mt-5'>
        <div className='flex items-center'>
          <h1 className='font-bold md:text-3xl text-2xl'>Sujisha Sureshbabu</h1>
          <MdVerified className='text-blue-500 ms-3 txt-xl' />
        </div>
        <div>
          <button className='flex px-4 font-bold border border-blue-200 text-blue-600'> <FaRegEdit className='mt-1 me-2' />Edit</button>
        </div>
      </div>
      <p className='md:px-20 px-5 my-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste pariatur, amet, laudantium molestias corrupti odio modi quaerat possimus officia consequuntur maiores harum culpa inventore perspiciatis magni, dicta quas quae?</p>
      <div className='flex justify-center items-center my-8 font-medium text-lg'>
        <p onClick={() => { setSellBook(true), setBookStatus(false), setPurchaseHistory(false) }} className={sellBook ? "text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer" : 'p-4 border-b border-gray-200 cursor-pointer'} >Sell Book</p>
        <p onClick={() => { setSellBook(false), setBookStatus(true), setPurchaseHistory(false) }} className={BookStatus ? "text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer" : 'p-4 border-b border-gray-200 cursor-pointer'}>Book Status</p>
        <p onClick={() => { setSellBook(false), setBookStatus(false), setPurchaseHistory(true) }} className={purchaseHistory ? "text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer" : 'p-4 border-b border-gray-200 cursor-pointer'}>Purchase History</p>
      </div>
      {
        sellBook &&
        <div className='md:p-20 p-5'>
          <div className="bg-gray-100 md:p-10 p-5 ">
            <h1 className="text-center text-3xl font-medium ">Book Details</h1>
            <div className="md:grid grid-cols-2">
              <div className='md:my-10 mt-5 px-2'>
                <div className='mb-3'>
                  <input type="text" placeholder="Title" className=" bg-white rounded p-2 w-full " />
                </div>
                <div className='mb-3'>
                  <input type="text" placeholder="Author" className=" bg-white rounded p-2 w-full " />
                </div>
                <div className='mb-3'
                ><input type="text" placeholder="No. of Pages" className=" bg-white rounded p-2 w-full " />
                </div>
                <div className='mb-3'>
                  <input type="text" placeholder="image Url" className=" bg-white rounded p-2 w-full " />
                </div>
                <div className='mb-3'>
                  <input type="text" placeholder="Price" className=" bg-white rounded p-2 w-full " />
                </div>
                <div className='mb-3'>
                  <input type="text" placeholder="Discount Price" className=" bg-white rounded p-2 w-full " />
                </div>
                <div className='mb-3'>
                  <textarea type="text" rows={'8'} placeholder="Abstract" className=" bg-white rounded p-2 w-full " />
                </div>
              </div>

              <div className='md:my-10 mt-5 px-2'>
                <div className='mb-3'>
                  <input type="text" placeholder="Publisher" className=" bg-white rounded p-2 w-full " />
                </div>
                <div className='mb-3'>
                  <input type="text" placeholder="Language" className=" bg-white rounded p-2 w-full " />
                </div>
                <div className='mb-3'
                ><input type="text" placeholder="ISBN" className=" bg-white rounded p-2 w-full " />
                </div>
                <div className='mb-3'>
                  <input type="text" placeholder="Category" className=" bg-white rounded p-2 w-full " />
                </div>
                <div>
                  <div className='flex justify-center items-center mt-10 flex-col'>
                    <label htmlFor='uploadBooking'>
                      <input type='file' style={{ display: "none" }} alt='No image' />
                      <img src='https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_640.png' alt='' style={{ width: "200px", height: "200px" }} />
                    </label>
                  </div>

                  <div className='flex md:justify-end justify-center mt-5 gap-6'>
                    <button className='bg-red-700 text-white px-5 py-3 rounded hover:border hover:text-red-700 hover:bg-white hover:border-red-700'>Reset</button>
                    <button className='bg-green-700 text-white px-5 py-3 rounded hover:border hover:text-green-700 hover:bg-white hover:border-green-700'>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {
        BookStatus &&
       <div className='p-10 my-20 rounded shadow'>
          <div className='bg-gray-200 rounded p-5 mt-4'>
            <div className='md:grid grid-cols-[3fr_1fr]'>
              <div className='px-4'>
                <h1 className='text-2xl'>Book Tilte</h1>
                <h2>Author Name </h2>
                <h3 className='text-blue-600'>₹ 599</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni commodi itaque ad consectetur eos, ullam a expedita voluptatum error reiciendis, doloremque facere non fugit accusantium dolor obcaecati nihil? Eligendi, et?</p>
                <div className='flex mt-5'>
                  <img src="https://www.psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="" style={{ width: "70px", height: "70px" }} />
                  <img src="https://juststickers.in/wp-content/uploads/2017/08/seal-of-approval.png" alt="" style={{ width: "70px", height: "70px" }} />
                  <img src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" alt="" style={{ width: "70px", height: "70px" }} />
                </div>
              </div>
              <div className='px-4 mt-4 md:mt-4'>
                <img src="https://m.media-amazon.com/images/M/MV5BMTI3YmIzNzYtOTcwNy00ZTZiLTg5NmQtMTUyNGY1ZWVmZDJiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="" style={{ height: "300px" }} className='w-full' />
                <div className='flex justify-end mt-4'>
                  <button className='p-2 rounded bg-red-600 text-white hover:bg-gray-200 hover:text-red-600 hover:border hover:border-red-600'>Delete</button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center flex-col'>
            <img src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif" alt="" style={{ width: "200px", height: "200px" }} />
            <p className='text-red-600 text-2xl'>No Book Added Yet</p>
          </div>
        </div>
      }
      {
        purchaseHistory &&
        <div className='p-10 my-20 rounded shadow'>
          <div className='bg-gray-200 rounded p-5 mt-4'>
            <div className='md:grid grid-cols-[3fr_1fr]'>
              <div className='px-4'>
                <h1 className='text-2xl'>Book Tilte</h1>
                <h2>Author Name </h2>
                <h3 className='text-blue-600'>₹ 599</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni commodi itaque ad consectetur eos, ullam a expedita voluptatum error reiciendis, doloremque facere non fugit accusantium dolor obcaecati nihil? Eligendi, et?</p>
              </div>
              <div className='px-4 mt-4 md:mt-4'>
                <img src="https://m.media-amazon.com/images/M/MV5BMTI3YmIzNzYtOTcwNy00ZTZiLTg5NmQtMTUyNGY1ZWVmZDJiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="" style={{ height: "300px" }} className='w-full' />
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center flex-col'>
            <img src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif" alt="" style={{ width: "200px", height: "200px" }} />
            <p className='text-red-600 text-2xl'>No Book Added Yet</p>
          </div>
        </div>
      }


      <Footer />
    </>
  )
}

export default Profile
