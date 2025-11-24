import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { FaCircleUser } from 'react-icons/fa6'
import { GoEye, GoEyeClosed } from 'react-icons/go'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../../Service/allAPI'
import { toast } from 'react-toastify'

function Auth({ register }) {
  const [showPassoword, setShowPassword] = useState(false)
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  })
  console.log(userDetails);

  const navigate = useNavigate()

  const handleRegister = async () => {
    const { username, email, password } = userDetails
    if (!username || !email || !password) {
      alert("Fill the form completely")
    } else {
      const result = await registerAPI(userDetails)
      console.log(result);
      if (result.status == 200) {
        toast.success(`Registered Successfully`)
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
        navigate("/login")
      } else if (result.status == 404) {
        toast.warning(result.response.data)
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
      } else {
        toast.error(`Something Went Wrong`)
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
      }
    }
  }


  const handleLogin = async () => {
    const { email, password } = userDetails
    if (!email || !password) {
      toast.info("Fill the form Completely")
    } else {
      const result = await loginAPI(userDetails)
      console.log(result);
      if (result.status == 200) {
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)
        toast.success(`Logon Successfully`)
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
        navigate("/")
      } else if (result.status == 404) {
        toast.warning(result.response.data)
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
      } else if (result.status == 401) {
        toast.warning(result.response.data)
      } else {
        toast.error(`Something Went Wrong`)
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
      }
    }
  }

  return (
    <>
      <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url(https://i.pinimg.com/736x/48/cb/e3/48cbe37c4a5095c211e63039d66b452a.jpg)] bg-cover bg-center'>
        <div className='p-10'>
          <h1 className='text-3xl font-bold text-center'>BOOKSTORE</h1>
          <div style={{ width: "400px" }} className='bg-blue-950 text-white p-5 flex flex-col my-5 justify-center items-center'>
            <div style={{ width: "100px", height: "100px", borderRadius: "50%" }} className='border mb-3 flex justify-center items-center'>
              <FaCircleUser className='text-6xl' />
            </div>
            <h1 className='text-2xl'>{register ? "register" : "login"}</h1>

            <form action="">
              {register &&
                <div className='my-5'>
                  <label htmlFor="">Username</label>
                  <input value={userDetails?.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} type="text" placeholder='Username' className='bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black' />
                </div>}
              <div className='my-5'>
                <label htmlFor="">Email</label>
                <input value={userDetails?.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} type="email" placeholder='Email' className='bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black' />
              </div>
              <div className='mt-5'>
                <label htmlFor="">Password</label>
                <div className='flex items-center'>
                  <input value={userDetails?.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} type={showPassoword ? "text" : "password"} placeholder='Password' className='bg-white p-2 w-full rounded mt-2 placeholder-gray-500 text-black' />
                  {showPassoword ? <GoEye onClick={() => setShowPassword(!showPassoword)} className='text-gray-500 cursor-pointer mt-2' style={{ marginLeft: "-30px" }} />
                    :
                    <GoEyeClosed onClick={() => setShowPassword(!showPassoword)} className='text-gray-500 cursor-pointer mt-2' style={{ marginLeft: "-30px" }} />
                  }
                </div>
              </div>
              <div className='mt-2'>
                <p className='text-xs text-orange-400'>*Never share ypur passowrd with others</p>
              </div>
              <div className='mt-4'>
                {register ?
                  <button onClick={handleRegister} type='button' className='bg-green-700 p-2 w-full rounded '>Register</button>
                  :
                  <button onClick={handleLogin} type='button' className='bg-green-700 p-2 w-full rounded'>Login</button>}
              </div>
              <div>
                {/* Google Authentication */}
              </div>
              <div className='mt-3'>
                {register ?
                  <p>Are yor Already a user<Link className='text-blue-400' to={"/login"}>Login</Link></p>
                  :
                  <p>Are yor a new user<Link className='text-blue-400 ' to={"/register"}>Register</Link></p>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth
