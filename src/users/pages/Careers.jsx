import React, { useState } from 'react'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Footer'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

function Careers() {
  const [careerModalStatus, setCareerModalStatus] = useState(false)
  return (
    <>
      <Header />
      <div className='md:px-40 p-5'>
        <div className='text-center my-5'>
          <h1 className='text-3xl font-bold mb-5'>Careers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa qui sapiente, fugiat ex aperiam porro id necessitatibus perspiciatis, voluptates nihil totam inventore magnam. Recusandae vel enim saepe obcaecati neque voluptate?
            Autem quod ipsa sit quas fugiat incidunt numquam nam deserunt illum, totam dolorem quibusdam nesciunt. Suscipit quidem quas quia facere. Necessitatibus officiis inventore quo esse ipsum officia ipsam quaerat assumenda?
            Voluptas ad atque id ullam quo mollitia assumenda sit repellat error soluta? Officiis molestiae non dolorum molestias, eius voluptates veniam odio nam iure minus accusamus, quis, ipsa quos quae nemo.
          </p>
        </div>
        <div className='my-10'>
          <h1 className='text-2xl font-bold'>Current Openings</h1>
          <div className='flex my-10 justify-center items-center'>
            <input type='text' className='p-2 border  border-gray-200 text-black w-100 placeholder-gray-500' placeholder='Search by Title' />
            <button className='bg-blue-900 text-white p-2 hover:bg-white hover:text-blue-900 hover:border hover:border-blue-900'>Search</button>
          </div>
        </div>

        {/* job Listing */}
        <div className='border border-gray-200 p-5 shadow my-5'>
          <div className='flex mb-5'>
            <div className='w-full'>
              <h1 className='text-xl pb-3 font-bold'>Frontend Developer</h1>
              <hr />
            </div>
            <button onClick={() => setCareerModalStatus(true)} className='bg-blue-900 text-white p-3 ms-5 flex items-center'>Apply<FaArrowUpRightFromSquare className='ms-2' /></button>
          </div>
          <p className='flex'><FaLocationDot className='me-2 mt-1' />Kochi</p>
          <p className='text-lg my-2'>Job Type : FULL TIME</p>
          <p className='text-lg my-2'>Salary : 20000-30000/month</p>
          <p className='text-lg my-2'>Qualification : BSC.CS</p>
          <p className='text-lg my-2'>Experience : 1-2yr</p>
          <p className='text-lg my-2'></p>
          <p className='text-lg my-2 text-justify'>Description : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, consectetur aspernatur eaque quia, recusandae delectus quos quasi deleniti voluptatum fugit harum ullam est exercitationem tenetur quidem quam minus ea! Tempore.</p>
        </div>
      </div>

      {careerModalStatus &&
        <div className='relative z-10 overflow-y-hidden'>
          <div className='bg-gray-500/75 fixed inset-0'>
            <div className='flex justify-center items-center min-h-screen scroll-auto'>
              <div className='bg-white rounded-2xl md:w-250 w-100'>
                <div className='bg-black text-white flex justify-between items-center p-3'>
                  <h3>Application Form</h3>
                  <button onClick={() => setCareerModalStatus(false)}>X</button>
                </div>
                <div className='relative p-5'>
                  <form className='space-y-4'>
                    <div className='grid md:grid-cols-2 gap-4'>
                      <input type='text' placeholder='Full Name' className='border border-gray-300 rounded w-full p-2 ' />
                      <input type='text' placeholder='Qualification' className='border border-gray-300 rounded w-full p-2 ' />
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                      <input type='email' placeholder='Email' className='border border-gray-300 rounded w-full p-2 ' />
                      <input type='text' placeholder='phone' className='border border-gray-300 rounded w-full p-2 ' />
                    </div>
                    <textarea
                      placeholder="Cover Letter"
                      rows="3"
                      className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring focus:ring-gray-400">
                    </textarea>
                    <div>
                      <label htmlFor='choosefile' className='font-bold'>Upload Resume:</label>
                      <input id='choosefile'
                        type="file"
                        className="w-full border border-gray-300 rounded p-2 text-gray-700" />
                      
                    </div>
                  </form>
                </div>
                  <div className="bg-gray-300 flex justify-end gap-3 mt-4 p-3">
                    <button
                      type="reset"
                      className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600" >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Submit
                    </button>
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