import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { FaArrowUpRightFromSquare, FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminCareers() {
  const [jobPostStatus, setJobpostStatus] = useState()
  const [applicantListStatus, setApplicantListStatus] = useState()
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'>
          <AdminSidebar />
        </div>
        <div className='col-span-4 p-10'>
          <h1 className='text-center text-3xl font-bold'>Careers</h1>
          {/* tabs */}
          <div className='flex justify-center items-center my-8 font-medium text-lg'>
            <p onClick={() => { setApplicantListStatus(false), setJobpostStatus(true) }} className={jobPostStatus ? "text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer" : 'p-4 border-b border-gray-200 cursor-pointer'} >Job Post</p>
            <p onClick={() => { setApplicantListStatus(true), setJobpostStatus(false) }} className={applicantListStatus ? "text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer" : 'p-4 border-b border-gray-200 cursor-pointer'}>View Applicant</p>
          </div>
          {
            jobPostStatus &&
            <div className=''>
              <div className='md:flex justify-between items-center my-8 w-full md:px-20 px-5'>
                <div className='md:flex w-full ms-2 md:ms-0'>
                  <input type="text" placeholder='Search By Title...' className='border border-gray-200 p-2 md:w-1/4 w-3/4' />
                  <button className='bg-green-800 mt-5 md:mt-0  text-white p-2 rounded md:ms-2 hover:bg-white hover:border hover:border-green-700 hover:text-green-800'>Search</button>
                </div>
                <div>
                  <button className='bg-blue-800 mt-5 md:mt-0 w-full text-white p-2 rounded md:ms-3 hover:bg-white hover:border hover:border-blue-700 hover:text-text-800'>Add Job +</button>
                </div>
              </div>
              {/* Job Listing */}
              <div className='border border-gray-200 p-5 shadow my-5'>
                <div className='flex mb-5'>
                  <div className='w-full'>
                    <h1>Frontend Developer</h1>
                    <hr />
                  </div>
                  <button className='bg-blue-900 text-white p-3 ms-5 flex items-center'>Apply <FaArrowUpRightFromSquare className='ms-3' /></button>
                </div>
                <p className='flex'><FaLocationDot className='me-2 mt-1' />Kochi</p>
                <p className='text-lg my-2'>Job Type : FULL TIME</p>
                <p className='text-lg my-2'>Salary : 20000-30000/month</p>
                <p className='text-lg my-2'>Qualification : BSC.cs</p>
                <p className='text-lg my-2'>Experience : 1-2yr</p>
                <p className='text-lg my-2 text-justify'>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi natus maiores, dolor laborum placeat quisquam fugiat impedit laboriosam nam vero nemo officiis expedita pariatur ab, repudiandae, cumque animi ipsum quo?</p>
              </div>
              <p className='text-red-800 font-bold text-xl'>No Job openings...</p>
            </div>
          }

          {
            applicantListStatus &&
            <div className='p-10'>
              <table className='w-full my-3 shadow'>
                <thead>
                  <tr>
                    <th className='p=3 text-center bg-blue-800 text-white border border-gray-500'>SL.No</th>
                    <th className='p=3 text-center bg-blue-800 text-white border border-gray-500'>Job Title</th>
                    <th className='p=3 text-center bg-blue-800 text-white border border-gray-500'>Name</th>
                    <th className='p=3 text-center bg-blue-800 text-white border border-gray-500'>Qualification</th>
                    <th className='p=3 text-center bg-blue-800 text-white border border-gray-500'>E-mail</th>
                    <th className='p=3 text-center bg-blue-800 text-white border border-gray-500'>Phone</th>
                    <th className='p=3 text-center bg-blue-800 text-white border border-gray-500'>Cover Letter</th>
                    <th className='p=3 text-center bg-blue-800 text-white border border-gray-500'>Resume</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border border-gray-500 p-3 text-center'>1</td>
                    <td className='border border-gray-500 p-3 text-center'>Software Tester</td>
                    <td className='border border-gray-500 p-3 text-center'>Sijo John</td>
                    <td className='border border-gray-500 p-3 text-center'>B.tech</td>
                    <td className='border border-gray-500 p-3 text-center'>sijo12345@gmail.com</td>
                    <td className='border border-gray-500 p-3 text-center'>9167189793</td>
                    <td className='border border-gray-500 p-3 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt cumque tenetur reiciendis repellendus a eius repudiandae odio itaque iusto obcaecati nihil, id ullam hic, optio voluptas doloribus deleniti, natus sapiente.</td>
                    <td className='border border-gray-500 p-3 text-center'> <Link className='text-blue-500 underline'>Resume</Link> </td>
                  </tr>
                </tbody>
              </table>
              <p className='text-red-800 font-bold text-xl'>Np Applications are available...</p>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default AdminCareers
