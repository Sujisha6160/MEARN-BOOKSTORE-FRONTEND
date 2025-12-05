import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSidebar'
import { FaBook } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";

function AdminHome() {
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-[1fr_4fr]'>
        <div>
          <AdminSideBar />
        </div>
        <div className='p-4'>
          <div className='md:grid grid-cols-3 text-white'>
            <div className='px-5'>
              <div className='grid grid-cols-[1fr_3fr] bg-blue-700 rounded p-4'>
                <div className='flex justify-center items-center'><FaBook className='text-3xl' /></div>
                <div className=''>
                  <h1>Total No.of Books : <span className='text-xl'>85</span></h1>
                </div>
              </div>
            </div>

            <div className='px-5'>
              <div className='grid grid-cols-[1fr_3fr] bg-green-700 rounded p-4'>
                <div className='flex justify-center items-center'><FaUser className='text-3xl' /></div>
                <div className=''>
                  <h1>Total No.of Users : <span className='text-xl'>85</span></h1>
                </div>
              </div>
            </div>

            <div className='px-5'>
              <div className='grid grid-cols-[1fr_3fr] bg-yellow-700 rounded p-4'>
                <div className='flex justify-center items-center'><FaUserGraduate className='text-3xl' /></div>
                <div className=''>
                  <h1>Total No.of Applicants : <span className='text-xl'>85</span></h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AdminHome