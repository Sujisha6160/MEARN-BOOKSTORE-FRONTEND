import React, { useState } from 'react'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Footer'
import { FaArrowUpRightFromSquare, FaLocationDot } from 'react-icons/fa6'

function Careers() {
  const [modalStatus, setModalStatus] = useState()
  return (
    <>
      <Header />
      <div className='md:px-40 p-5'>
        <div className='text-center my-5'>
          <h1 className='text-3xl font-bold mb-5'>Careers</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aut, voluptates tenetur velit modi ea aspernatur delectus commodi excepturi consectetur nulla accusamus tempore voluptatibus adipisci temporibus autem cupiditate. Inventore facere provident hic quos sint labore, ratione voluptatum rem nemo nostrum omnis, aut debitis sequi esse quia vitae reprehenderit molestias cumque?</p>
        </div>
        <div className='my-10'>
          <h1 className='text-3xl font-bold '>Current Openings</h1>
          <div className='flex my-10 justify-center items-center'>
            <input type="text" className='p-2 border border-gray-200 text-black w-100 placeholder-gray-500 placehol ' placeholder='Search by title' />
            <button className='bg-blue-900 text-white p-2 hover:bg-white hover:text-blue-900 hover:border-blue-800'>Search</button>
          </div>
        </div>
        {/* Job Listing */}
        <div className='border border-gray-200 p-5 shadow my-5'>
          <div className='flex mb-5'>
            <div className='w-full'>
              <h1>Frontend Developer</h1>
              <hr />
            </div>
            <button onClick={() => setModalStatus(true)} className='bg-blue-900 text-white p-3 ms-5 flex items-center'>Apply <FaArrowUpRightFromSquare className='ms-3' /></button>
          </div>
          <p className='flex'><FaLocationDot className='me-2 mt-1' />Kochi</p>
          <p className='text-lg my-2'>Job Type : FULL TIME</p>
          <p className='text-lg my-2'>Salary : 20000-30000/month</p>
          <p className='text-lg my-2'>Qualification : BSC.cs</p>
          <p className='text-lg my-2'>Experience : 1-2yr</p>
          <p className='text-lg my-2 text-justify'>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus maiores, dolor laborum placeat quisquam fugiat impedit laboriosam nam vero nemo officiis expedita pariatur ab, repudiandae, cumque animi ipsum quo?</p>
        </div>
      </div>
      {modalStatus &&
        <div className='relative z-10 overflow-y-hidden'>
          <div className='bg-gray-500/75 fixed inset-0'>
            <div className='flex justify-center items-center min-h-screen scroll-auto'>
              <div className='bg-white rounded-2xl md:w-150 w-100'>
                <div className='bg-blue-950 text-white flex justify-between items-center p-3'>
                  <h3>Application Form</h3>
                  <button onClick={() => setModalStatus(false)} className=''>X</button>
                </div>
                <div className='md:grid grid-cols-2 p-5 gap-4'>
                  <div className=''>
                    <input type="text" placeholder="Full Name" className="w-full border border-gray-300 rounded px-4 py-2 " />
                    <input type="email" placeholder="Email Id" className="w-full border border-gray-300 rounded px-4 py-2 mt-2" />
                  </div>
                  <div className='md:mt-0 mt-2'>
                    <input type="text" placeholder="Qualification" className="w-full border border-gray-300 rounded px-4 py-2 " />
                    <input type="text" placeholder="Phone" className="w-full border border-gray-300 rounded px-4 py-2 mt-2" />
                  </div>
                  <div className="col-span-2">
                    <textarea placeholder="Cover Letter" rows="3" className="w-full border border-gray-300 rounded px-4 py-2 mt-2 " ></textarea>
                  </div>
                  <div className="col-span-2 ">
                    <h1 className='text-lg mb-2'> Upload Resume:</h1>
                    <label htmlFor='uploadResume' className=" text-lg font-medium mt-3 mb-1 ">
                      <input id='uploadResume' style={{ display: "none" }} type="file" className="w-full border bg-gray-400 border-gray-300 rounded px-4 py-2" />
                      <span className='bg-gray-500 text-white px-3 py-2 rounded '>Choose File</span> No File Chosen
                    </label>
                  </div>

                </div>
                <div className=" bg-gray-300 flex justify-end gap-3 mt-4 p-5">
                  <button type="button" className="bg-amber-600 text-white rounded px-4 py-2 hover:border hover:border-amber-600 hover:text-amber-600 hover:bg-white" > Reset </button>
                  <button type="submit" className="bg-green-600 text-white rounded px-4 py-2 hover:border hover:border-green-600 hover:text-green-600 hover:bg-white" >Submit</button>
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

export default Careers
