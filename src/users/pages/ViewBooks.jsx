import React, { useState } from 'react'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Footer'
import { FaRegEye } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";

function ViewBook() {
  const [modalStatus,setModalStatus] = useState()
  return (
    <>
      <Header />
      <div className='md:p-20 p-5'>
        <div className='shadow w-full md:p-10 p-5'>
          <div className='flex justify-end'>
            <FaRegEye onClick={()=>setModalStatus(true)}/>
          </div>
          <div className='md:grid grid-cols-[1fr_3fr] w-full'>
            <div>
              <img src="https://imgv2-1-f.scribdassets.com/img/document/822059583/original/80844d095d/1?v=1" alt="" className='w-full h-100' />
            </div>
            <div className='px-4'>
              <h1 className='text-center font-medium text-2xl'>Can We be Strangers Again?</h1>
              <p className='text-center text-blue-500'>Shrijeet Shandilya
                (Author)</p>
              <div className='md:flex justify-between mt-10'>
                <p>Publisher:</p>
                <p>Language:</p>
                <p>No.of pages:</p>
              </div>
              <div className='md:flex justify-between mt-10'>
                <p>Seller Mail:</p>
                <p>Real Price:</p>
                <p>ISBN:</p>
              </div>
              <p className='text-justify mt-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem possimus veniam ducimus necessitatibus, accusantium reiciendis illo impedit praesentium eos blanditiis debitis vel, numquam pariatur quae dignissimos ipsum natus! Earum, hic.
                Quidem, quae ex sed, laborum suscipit modi cumque, aut labore natus odit magni cupiditate eligendi. Laboriosam earum maxime, porro dolores natus magnam maiores odio eligendi a quis voluptas odit commodi!
                Dolorum repellendus esse enim laudantium molestiae cum ad pariatur quasi nostrum voluptatibus porro commodi blanditiis molestias veniam fugiat autem iure, eligendi suscipit. Corrupti ipsum molestias quidem laboriosam tempora eaque mollitia.</p>
              <div className='mt-10 flex justify-end'>
                <button className='flex px-4 py-3 bg-blue-800 rounded text-white hover:bg-white hover:text-blue-800 hover:border hover:border-blue-800 '><FaBackward className='mt-1 me-2' />Back</button>
                <button className='px-4 py-3 bg-green-800 rounded text-white hover:bg-white hover:text-green-800 hover:border hover:border-green-800 ms-5'>Buy ₹</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        modalStatus &&
        <div  className='relative z-10 overflow-y-hidden'>
        <div className='bg-gray-600/75 fixed inset-0'>
        <div className='flex justify-center items-center min-h-screen scroll-auto'>
          <div className='bg-white rounded-2xl md:w-250 w-100'>
            <div className='bg-black text-white flex justify-between items-center p-3'>
              <h3>Book Images</h3>
              <button onClick={()=>setModalStatus(false)} className=''>X</button>
            </div>
            <div className='relative p-5'>
              <p className='text-blue-600'>Camera click of the book in the hand of seller</p>
            </div>
            <div className='md:flex flex-wrap my-4 overflow-y-hidden'>
              <img height={"250px"} width={"250px"} src="https://img.buzzfeed.com/buzzfeed-static/static/2022-07/8/19/asset/ba105dde0389/sub-buzz-9966-1657309034-1.png?downsize=700%3A%2A&output-quality=auto&output-format=auto" alt="" className='mx-2 md:mb-0 mb-2'/>
              <p className='font-bold text-red-700 ms-5'>User uploaded book images are available...</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      }
      <Footer />
    </>
  )
}

export default ViewBook