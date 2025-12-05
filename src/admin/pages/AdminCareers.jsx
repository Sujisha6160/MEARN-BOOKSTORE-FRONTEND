import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSidebar'
import { MdDeleteForever } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function AdminCarrers() {
  const [jobPostStatus, setJobPostStatus] = useState(true)
  const [viewApplicant, setViewApplicant] = useState(false)

  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'>
          <AdminSideBar />
        </div>
        <div className='col-span-4 p-10'>
          <h1 className='text-center text-3xl font-bold'>Careers</h1>
          {/* tabs */}
          <div className='flex justify-center items-center my-8 font-medium text-lg'>
            <p onClick={() => { setJobPostStatus(true), setViewApplicant(false) }} className={jobPostStatus ? "text-blue-800 p-4 border-gray-300 border-t border-l border-r rounded cursor-pointer" : 'p-4 border-b border-gray-200  cursor-pointer'}>Job Post</p>
            <p onClick={() => { setJobPostStatus(false), setViewApplicant(true) }} className={viewApplicant ? "text-blue-800 p-4 border-gray-300 border-t border-l border-r rounded cursor-pointer" : 'p-4 border-b border-gray-200  cursor-pointer'}>View Applicant</p>
          </div>
          {jobPostStatus &&
            <div>
              <div className='md:flex justify-between items-center my-8 w-full md:px-20 px-5'>
                <div className='md:flex w-full ms-2 md:ms-0'>
                  <input type="text" placeholder='Search by Title...' className='border border-gray-300 p-2 md:w-1/4 w-3/4' />
                  <button className='bg-green-800 mt-5 md:mt-0 text-white p-2 rounded md:ms-2  hover:bg-white hover:border hover:border-green-700 hover:text-green-800'>Search</button>
                </div>
                <div>
                  <button className='bg-blue-800 mt-5 md:mt-0 w-full text-white p-2 rounded md:ms-3  hover:bg-white hover:border hover:border-blue-700 hover:text-blue-800'>Add Job +</button>
                </div>
              </div>

              <div className='border border-gray-200 p-5 shadow my-5'>
                <div className='flex mb-5'>
                  <div className='w-full'>
                    <h1 className='text-xl pb-3 font-bold'>Frontend Developer</h1>
                    <hr />
                  </div>
                  <button className='bg-red-900 text-white p-3 ms-5 flex items-center'>Delete<MdDeleteForever className='ms-2'/></button>
                </div>
                <p className='flex'><FaLocationDot className='me-2 mt-1' />Kochi</p>
                <p className='text-lg my-2'>Job Type : FULL TIME</p>
                <p className='text-lg my-2'>Salary : 20000-30000/month</p>
                <p className='text-lg my-2'>Qualification : BSC.CS</p>
                <p className='text-lg my-2'>Experience : 1-2yr</p>
                <p className='text-lg my-2'></p>
                <p className='text-lg my-2 text-justify'>Description : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis, consectetur aspernatur eaque quia, recusandae delectus quos quasi deleniti voluptatum fugit harum ullam est exercitationem tenetur quidem quam minus ea! Tempore.</p>
              </div>

              <p className='text-red-800 font-bold text-xl'>No Job Openings...</p>

            </div>}

          {viewApplicant &&
            <div className='p-10'>
              <table className='w-full my-3 shadow'>
                <thead>
                  <tr>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500 '>SL.No</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500 '>Job Title</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500 '>Name</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500 '>Qualifications</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500 '>E-mail</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500 '>Phone</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500 '>Cover Letter</th>
                    <th className='p-3 text-center bg-blue-800 text-white border border-gray-500 '>Resume</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border border-gray-500 p-3 text-center'>1</td>
                    <td className='border border-gray-500 p-3 text-center'>Software Tester</td>
                    <td className='border border-gray-500 p-3 text-center'>Sijo Johnson</td>
                    <td className='border border-gray-500 p-3 text-center'>B.Tech</td>
                    <td className='border border-gray-500 p-3 text-center'>sijo2gmail.com</td>
                    <td className='border border-gray-500 p-3 text-center'>3476928485</td>
                    <td className='border border-gray-500 p-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quibusdam sequi veniam iusto, voluptate ipsum id dolorum quia et aperiam, distinctio atque, voluptatem repellat nihil maxime reiciendis deserunt hic saepe!</td>
                    <td className='border border-gray-500 p-3 text-center'><Link to={''} className='text-blue-500 underline'>resume</Link></td>
                  </tr>
                </tbody>
              </table>
              <p className='text-red-800 font-bold text-xl'>No Applications are available...</p>
            </div>}
        </div>
      </div>
    </>
  )
}

export default AdminCarrers