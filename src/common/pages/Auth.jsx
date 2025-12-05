import React, { useState } from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { toast } from 'react-toastify';
import { loginAPI, registerAPI } from '../../Service/allAPI';

function Auth({ register }) {
  const [viewPassword, setViewPassword] = useState(false)
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    password: ''
  })
  console.log(userDetails);

  const navigate = useNavigate()

  // register
  const HandleRegister = async () => {
    const { username, email, password } = userDetails
    if (!username || !email || !password) {
      toast.info('Fill the Form completely')
    } else {
      const result = await registerAPI(userDetails)
      console.log(result);
      if (result.status == 200) {
        toast.success("Registed Succefully")
        setUserDetails({
          username: '',
          email: '',
          password: ''
        })
        navigate("/login")
      } else if (result.status == 404) {
        toast.warning(result.response.data)
        setUserDetails({
          username: '',
          email: '',
          password: ''
        })
        navigate("/login")
      } else {
        toast.error("Something Went Wrong")
        setUserDetails({
          username: '',
          email: '',
          password: ''
        })
      }

    }
  }

  // login
  const handleLogin = async () => {
    const { email, password } = userDetails
    if (!email || !password) {
      toast.info("Fill the form completely")
    } else {
      const result = await loginAPI(userDetails)
      console.log(result);

      if (result.status == 200) {
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token", result.data.token)
        toast.success("Login Successfully")
        setUserDetails({
          username: '',
          email: '',
          password: ''
        })
        navigate("/")
      } else if (result.status == 404) {
        toast.warning(result.response.data)
        setUserDetails({
          username: '',
          email: '',
          password: ''
        })
      }else if(result.status == 401){
         toast.warning(result.response.data)
      }else{
         toast.error("Something Went Wrong")
        setUserDetails({
          username: '',
          email: '',
          password: ''
        })
      }

    }

  }


  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center flex-col bg-[url('https://image.slidesdocs.com/responsive-images/background/nature-inspired-composition-book-resting-on-twigs-with-light-textured-powerpoint-background_573afc05f3__960_540.jpg')] bg-cover bg-center">
        <div className='p-10'>
          <h1 className='text-3xl font-bold text-center'>BOOKSTORE</h1>
          <div style={{ width: "400px" }} className='bg-blue-900 text-white p-5 flex flex-col my-5 justify-center items-center'>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%' }} className='border mb-3 flex justify-center items-center'>
              <FaCircleUser className='text-6xl' />
            </div>

            <h1 className='text-2xl'>{register ? "Register" : "Login"}</h1>

            <form action=''>
              {register && <div className='my-5'>
                <label htmlFor=''>Username</label>
                <input value={userDetails?.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} type='text' placeholder='username' className='bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black' />
              </div>}
              <div className='my-5'>
                <label htmlFor=''>Email</label>
                <input value={userDetails?.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} type='text' placeholder='Email' className='bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black' />
              </div>
              <div className='my-5'>
                <label htmlFor=''>Password</label>
                <div className='flex items-center'>
                  <input value={userDetails?.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} type={viewPassword ? 'text' : 'password'} placeholder='password' className='bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black' />
                  {viewPassword ? <GoEye onClick={() => setViewPassword(!viewPassword)} className='text-gray-500 cursor-pointer mt-2' style={{ marginLeft: '-30px' }} /> :
                    <GoEyeClosed onClick={() => setViewPassword(!viewPassword)} className='text-gray-500 cursor-pointer mt-2' style={{ marginLeft: '-30px' }} />}
                </div>
              </div>
              <div className='mt-2'>
                <p className='text-xs text-orange-400'>Never share your password with others!</p>
              </div>
              <div className='mt-4'>
                {register ? <button onClick={HandleRegister} type='button' className='bg-green-700 p-2 w-full rounded'>Register</button> :
                  <button onClick={handleLogin} type='button' className='bg-green-700 p-2 w-full rounded'>Login</button>}
              </div>
              <div>
                {/* google authentication */}
              </div>
              <div className='mt-3'>
                {register ? <p>Are you Already a user<Link className='text-blue-400' to={"/login"}>Login</Link></p> :
                  <p>Are you a new  user?<Link className='text-blue-400' to={"/register"}>Register</Link></p>}
                <p>Back to <Link className='text-green-400 underline' to={'/'}> Home</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth