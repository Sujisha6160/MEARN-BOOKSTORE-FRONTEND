import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../common/components/Footer'
import AdminSidebar from '../components/AdminSidebar'

function AdminSettings() {
  return (
    <>
    <AdminHeader/>
    <div className='md:grid grid-cols-[1fr_4fr]'>
      <div>
        <AdminSidebar/>
      </div>
      <div className='p-4'>
        <h1 className='text-3xl text-center font-semibold my-10'>Settings</h1>
        <div className='md:grid grid-cols-2 mt-10'>
          <div className='md:px-10 px-5'>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta temporibus maxime exercitationem provident molestiae quasi soluta sequi voluptatem nobis, magnam cupiditate porro consectetur corrupti veritatis atque consequuntur delectus quia velit!</p>
            <p className='text-justify mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsam molestiae ullam perspiciatis earum quia itaque! Aut assumenda veniam vitae perferendis numquam dolorum architecto animi quisquam. Eum quam corporis tenetur.</p>
          </div>

          <div className='md:px-10 px-5'>
            <form className='bg-blue-200 md:p-10 p-5 rounded my-10 md:my-0'>
              <div className='flex justify-center items-center my-10'>
                <label htmlFor='editUserprofile'>
                  <input type='file' id='editUserProfile' style={{display:'none'}}/>
                  <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="profile image" style={{width:'170px',height:'170px',borderRadius:'50%'}}/>
                </label>
              </div>
              <div className='mb-3'>
                <label htmlFor=''>Username</label>
                <input type='text' placeholder='username' className='bg-white rounded w-full  p-2 mt-2'/>
              </div>

               <div className='mb-3'>
                <label htmlFor=''>Password</label>
                <input type='text' placeholder='password' className='bg-white rounded w-full  p-2 mt-2'/>
              </div>

               <div className='mb-3'>
                <label htmlFor=''>Confirm Password</label>
                <input type='text' placeholder='Confirm Password' className='bg-white rounded w-full  p-2 mt-2'/>
              </div>
              <div className='flex justify-between mt-10'>
                <button className='bg-amber-600 text-white rounded p-4 w-1/2 hover:border hover:border-amber-600 hover:text-amber-600 hover:bg-white'>Reset</button>
                <button className='bg-green-600 text-white rounded p-4 w-1/2 hover:border hover:border-green-600 hover:text-green-600 hover:bg-white ms-3'>Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default AdminSettings