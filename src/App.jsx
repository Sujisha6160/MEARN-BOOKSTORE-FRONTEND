import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './common/pages/LandingPage'
import Contact from './common/pages/Contact'
import Auth from './common/pages/Auth'
import Pnf from './common/pages/Pnf'
import AdminHome from './admin/pages/AdminHome'
import AdminBooks from './admin/pages/AdminBooks'
import AdminSettings from './admin/pages/AdminSettings'
import { useEffect, useState } from 'react'
import Preloader from './common/pages/Preloader'
import { ToastContainer } from 'react-toastify'
import AllBooks from './users/pages/AllBooks'
import Careers from './users/pages/Careers'
import Profile from './users/pages/Profile'
import ViewBook from './users/pages/ViewBooks'
import AdminCarrers from './admin/pages/AdminCareers'

function App() {

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 5000)
  }, [])

  return (
    <>
      <Routes>
        {/* common */}
        <Route path='/' element={loader ? <Preloader /> : <LandingPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register />} />
        <Route path='*' element={<Pnf />} />

        {/* users */}
        <Route path='/all-books' element={<AllBooks />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/view-books/:id' element={<ViewBook />} />

        {/* admin */}
        <Route path='/admin-home' element={<AdminHome />} />
        <Route path='/admin-careers' element={<AdminCarrers />} />
        <Route path='/admin-books' element={<AdminBooks />} />
        <Route path='/admin-settings' element={<AdminSettings />} />

      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        theme="colored"
      />
    </>
  )
}

export default App