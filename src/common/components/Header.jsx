import React, { useEffect, useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

function Header() {
    const [listStatus, setListStatus] = useState(false)
    const [dropdownStatus, setDropdownStatus] = useState(false)
    const [token, setToken] = useState("")
    const [username, setUsername] = useState("")
    // console.log(token);


    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
        if (sessionStorage.getItem("existingUser")) {
            const name = JSON.parse(sessionStorage.getItem("existingUser"))
            setUsername(name.username)
        }

    }, [])

    return (
        <>
            <div className="grid grid-cols-3 p-3">
                {/* logo */}
                <div className='flex items-center'>
                    <img width={"50px"} height={"50px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvFjQNYe6YGfgjWyO1knewZkMworG85p0HSF6CSM71SNoXvmhXWM4z6MAoouVt-86h8ds&usqp=CAU" alt="" />
                    <h1 className='font-bold text-2xl ms-2 md:hidden'>BOOKSTORE</h1>
                </div>
                <div className='md:flex justify-center items-center hidden'>
                    <h1 className='text-3xl font-bold'>BOOKSTORE</h1>
                </div>
                {/* login */}
                <div className='md:flex justify-end items-center hidden'>
                    <FaInstagram className='me-3 text-2xl' />
                    <FaXTwitter className='me-3 text-2xl' />
                    <FaFacebookSquare className='me-3 text-2xl' />

                    {!token ? <Link to={'/login'}><button className='flex justify-between items-center border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white'><FaRegUser className='me-2' />Login</button></Link>
                        :
                        <div className='relative inline-block tetx-left'>
                            <button onClick={()=>setDropdownStatus(!dropdownStatus)} className='w-full flex uitems-center px-3 py-2 shadow-lg hover:bg-gray-100 bg-white'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnFRPx77U9mERU_T1zyHcz9BOxbDQrL4Dvtg&s" alt="" width={"50px"} height={"50px"} style={{ borderRadius: "50%" }} />
                                <p className='ms-2'>{username}</p>
                            </button>
                          { dropdownStatus && <div className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg'>

                                <Link to={'/profile'}>  <button className='block py-2 px-4 text-sm text-gray-70 '>Profile</button> </Link>
                                <button className='block py-2 px-4 text-sm text-gray-70 '>Logout</button>
                            </div>}
                        </div>}

                </div>
            </div>

            <nav className='w-full  bg-gray-900 text-white p-3'>

                <div className='flex justify-between items-center md:hidden'>
                    <button onClick={() => setListStatus(!listStatus)}><TiThMenu className='text-2xl' /></button>
                    <Link to={'/login'}><button className='flex justify-between items-center border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text:white'><FaRegUser className='me-2' />Login</button></Link>
                </div>

                <ul className={listStatus ? "flex flex-col" : 'md:flex justify-center items-center hidden'}>
                    <li className='md:mx-4 mt-3 md:mt-0'> <Link to={'/'} className='mx-4'>Home</Link></li>
                    <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/all-books'} className='mx-4'>Books</Link></li>
                    <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/careers'} className='mx-4'>Careers</Link></li>
                    <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/contact'} className='mx-4'>Contact</Link></li>
                </ul>


            </nav>

        </>
    )
}

export default Header