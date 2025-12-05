import React, { useEffect, useState } from 'react'
import Header from '../../common/components/Header'
import Footer from '../../common/components/Footer'
import { MdVerified } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { toast } from 'react-toastify';
import EditProfile from '../components/EditProfile';
import { addBookAPI, deleteAUserAddedBookAPI, getUserBookAPI, getUserBroughtBooksAPI } from '../../Service/allAPI';

function Profile() {
  const [sellBookStatus, setSellBookStatus] = useState(true)
  const [bookStatus, setBookStatus] = useState(false)
  const [purchaseHistoryStatus, setPurchaseHistoryStatus] = useState(false)
  const [preview, setPreview] = useState("")
  const [allUploadImages, setAllUploadImages] = useState([])
  const [token, setToken] = useState("")
  const [username, setUsername] = useState("")
  const [userAddedBooks, setUserAddedBooks] = useState([])
  const [deleteBookStatus, setDeleteBookStatus] = useState(false)
  const [broughtBooks, setBroughtBooks] = useState([])

  const [bookDetails, setBookDetails] = useState({
    title: "", author: "", noOfPages: "", imageUrl: "", price: "", dprice: "", abstract: "", publisher: "", language: "", isbn: "", category: "", uploadImages: []
  })


  console.log(bookDetails);

  const reset = () => {
    setBookDetails({
      title: "", author: "", noOfPages: "", imageUrl: "", price: "", dprice: "", abstract: "", publisher: "", language: "", isbn: "", category: "", uploadImages: []
    })
    setPreview("")
    setAllUploadImages([])
  }

  const handleFile = (e) => {
    console.log(e.target.files[0]);
    const fileArray = bookDetails.uploadImages
    fileArray.push(e.target.files[0])
    setBookDetails({ ...bookDetails, uploadImages: fileArray })
    // convert files to url
    const url = URL.createObjectURL(e.target.files[0])
    setPreview(url)
    let images = allUploadImages
    images.push(url)
    setAllUploadImages(images)
  }

  console.log(preview);

  const HandleAddBook = async () => {
    const { title, author, noOfPages, imageUrl, price, dprice, abstract, publisher, language, isbn, category, uploadImages } = bookDetails
    if (!title || !author || !noOfPages || !imageUrl || !price || !dprice || !abstract || !publisher || !language || !isbn || !category || uploadImages.length == 0) {
      toast.info("Fill the form completely")
    } else {
      // reqHeader
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }

      // reqBody - formData() //append-reqBody.append(key, value) 
      // reqBody.append("title",title)
      const reqBody = new FormData()

      for (let key in bookDetails) {
        if (key != "uploadImages") {
          reqBody.append(key, bookDetails[key])
        } else {
          bookDetails.uploadImages.forEach(img => {
            reqBody.append("uploadImages", img)
          })
        }
      }
      try {
        const result = await addBookAPI(reqBody, reqHeader)
        console.log(result);
        if (result.status == 200) {
          toast.success("Book Added Successfully")
          reset()
        } else if (result.status == 401) {
          toast.warning(result.response.data)
        } else {
          toast.error("Error in adding book")
          reset()
        }
      } catch (error) {
        toast.error("Something Went Wrong")
      }
    }

  }

  // get user added books
  const getUserAddedBooks = async () => {
    try {
      // reqHeader
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await getUserBookAPI(reqHeader)
      console.log(result);
      setUserAddedBooks(result.data)
    } catch (error) {
      console.log(error);
    }
  }
  console.log(userAddedBooks);

  const getUserBroughtBooks = async () => {
    try {
      // reqHeader
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await getUserBroughtBooksAPI(reqHeader)
      console.log(result);
      setBroughtBooks(result.data)
    } catch (error) {
      console.log(error);
    }
  }


  const handleDeleteBook = async (id) => {
    try {
      const result = await deleteAUserAddedBookAPI(id)
      console.log(result);

      if (result.status == 200) {
        setDeleteBookStatus(true)
        toast.success("Book Deleted Successfully")
      } else {
        toast.error("Something went wrong")
      }

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
    if (sessionStorage.getItem("existingUser")) {
      const name = JSON.parse(sessionStorage.getItem("existingUser"))
      setUsername(name.username)
    }

  }, [])

  useEffect(() => {
    if (bookStatus == true) {
      getUserAddedBooks()
    }
    getUserBroughtBooks()

  }, [bookStatus, deleteBookStatus, purchaseHistoryStatus])

  return (
    <>
      <Header />
      <div style={{ height: '200px' }} className='bg-black'></div>
      <div className='bg-white p-3' style={{ width: '230px', height: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130px' }}>
        <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhs50xPG1D-7bdfuBj3WPmIi2Fio-0JmzMMsaKb-HvMGPl0sAMxi4lCyF6J70DMzbg4v0&usqp=CAU" alt="" />
      </div>
      <div className='md:flex justify-between px-20 mt-5'>
        <div className='flex items-center'>
          <h1 className='font-bold md:text-3xl '>{username}</h1>
          <MdVerified className='text-blue-800 ms-3 text-xl' />
        </div>

        <div>
        <EditProfile/>
        </div>
      </div>

      <p className='md:px-20 px-5 my-5 text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque aut optio voluptatem iusto necessitatibus ea temporibus maiores ullam officiis! Vitae magni in dignissimos iusto atque possimus assumenda omnis, blanditiis consectetur.</p>

      {/* tabs */}
      <div className='flex justify-center items -center my-8 font-medium text-lg mt-20'>
        <p onClick={() => { setSellBookStatus(true), setBookStatus(false), setPurchaseHistoryStatus(false) }} className={sellBookStatus ? "text-blue-800 p-4 border-gray-300 border-t border-l border-r rounded cursor-pointer" : 'p-4 border-b border-gray-200  cursor-pointer'}>Sell Book</p>
        <p onClick={() => { setSellBookStatus(false), setBookStatus(true), setPurchaseHistoryStatus(false) }} className={bookStatus ? 'text-blue-800 p-4 border-gray-300 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200  cursor-pointer'}>Book Status</p>
        <p onClick={() => { setSellBookStatus(false), setBookStatus(false), setPurchaseHistoryStatus(true) }} className={purchaseHistoryStatus ? 'text-blue-800 p-4 border-gray-300 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200  cursor-pointer'}>Purchase History</p>
      </div>

      {sellBookStatus &&
        <div className='md:p-20 p-5'>
          <div className='bg-gray-200 md:p-10 p-5 rounded'>
            <h1 className='text-center text-3xl font-medium'>Book Details</h1>
            <div className='md:grid grid-cols-2'>
              <div className='md:my-10 mt-5 px-2'>
                <div className='mb-3'>
                  <input value={bookDetails.title} onChange={(e) => setBookDetails({ ...bookDetails, title: e.target.value })} type='text' placeholder='Title' className='p-2 bg-white rounded w-full' />
                </div>
                <div className='mb-3'>
                  <input value={bookDetails.author} onChange={(e) => setBookDetails({ ...bookDetails, author: e.target.value })} type='text' placeholder='Author' className='p-2 bg-white rounded w-full' />
                </div>
                <div className='mb-3'>
                  <input value={bookDetails.noOfPages} onChange={(e) => setBookDetails({ ...bookDetails, noOfPages: e.target.value })} type='text' placeholder='No of Pages' className='p-2 bg-white rounded w-full' />
                </div>
                <div className='mb-3'>
                  <input value={bookDetails.imageUrl} onChange={(e) => setBookDetails({ ...bookDetails, imageUrl: e.target.value })} type='text' placeholder='Image URL' className='p-2 bg-white rounded w-full' />
                </div>
                <div className='mb-3'>
                  <input value={bookDetails.price} onChange={(e) => setBookDetails({ ...bookDetails, price: e.target.value })} type='text' placeholder='Price' className='p-2 bg-white rounded w-full' />
                </div>
                <div className='mb-3'>
                  <input value={bookDetails.dprice} onChange={(e) => setBookDetails({ ...bookDetails, dprice: e.target.value })} type='text' placeholder='Discount Price' className='p-2 bg-white rounded w-full' />
                </div>
                <div className='mb-3'>
                  <textarea value={bookDetails.abstract} onChange={(e) => setBookDetails({ ...bookDetails, abstract: e.target.value })} placeholder='abstract' rows={'8'} className='p-2 bg-white rounded w-full'></textarea>
                </div>
              </div>

              <div className='md:my-10 px-2'>
                <div className='mb-3'>
                  <input value={bookDetails.publisher} onChange={(e) => setBookDetails({ ...bookDetails, publisher: e.target.value })} type='text' placeholder='Publisher' className='p-2 bg-white rounded w-full' />
                </div>
                <div className='mb-3'>
                  <input value={bookDetails.language} onChange={(e) => setBookDetails({ ...bookDetails, language: e.target.value })} type='text' placeholder='Language' className='p-2 bg-white rounded w-full' />
                </div>
                <div className='mb-3'>
                  <input value={bookDetails.isbn} onChange={(e) => setBookDetails({ ...bookDetails, isbn: e.target.value })} type='text' placeholder='ISBN' className='p-2 bg-white rounded w-full' />
                </div>
                <div className='mb-3'>
                  <input value={bookDetails.category} onChange={(e) => setBookDetails({ ...bookDetails, category: e.target.value })} type='text' placeholder='Category' className='p-2 bg-white rounded w-full' />
                </div>
                <div className='flex justify-center items-center mt-10 flex-col'>

                  {preview ?
                    <img src={preview} alt="" style={{ width: '200px', height: '200px' }} />
                    :
                    <label htmlFor='uploadingBookImg'>
                      <input onChange={(e) => handleFile(e)} id='uploadingBookImg' type='file' style={{ display: 'none' }} alt='no img' />
                      <img src="https://www.freeiconspng.com/uploads/upload-icon-30.png" alt="" style={{ width: '200px', height: '200px' }} />
                    </label>}
                  {preview &&
                    <div className='mt-10 flex items-center gap-5'>
                      {
                        allUploadImages.map((item) => (
                          <img src={item} alt="" style={{ width: '50px', height: '50px' }} />

                        ))
                      }



                      {allUploadImages.length < 3 && <label htmlFor='uploadingBookImg' className='ms-4'>
                        <input onChange={(e) => handleFile(e)} id='uploadingBookImg' type='file' style={{ display: 'none' }} alt='no img' />
                        <img src="https://www.freeiconspng.com/uploads/upload-icon-30.png" alt="" style={{ width: '50px', height: '50px' }} />
                      </label>}
                    </div>}

                </div>
                <div className='flex md:justify-end justify-center mt-5'>
                  <button onClick={reset} className='bg-amber-700 text-white px-5 py-3 rounded hover:border hover:border-amber-700 hover:text-amber-700 hover:bg-white'>Reset</button>
                  <button onClick={HandleAddBook} type='button' className='bg-green-700 text-white px-5 py-3 rounded hover:border hover:border-green-700 hover:text-green-700 hover:bg-white ms-4'>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {bookStatus &&
        <div className='p-10 my-20 shadow rounded'>
          {userAddedBooks?.length > 0 ?
            userAddedBooks?.map((book) => (
              <div className='bg-gray-200 p-5 rounded mt-4'>
                <div className='md:grid grid-cols-[3fr-1fr]'>
                  <div className='px-4'>
                    <h1 className='text-2xl'>{book?.title}</h1>
                    <h2>{book?.author}</h2>
                    <h3 className='text-blue-600'>₹ {book?.price}</h3>
                    <p>{book?.abstract}</p>
                    <div className='flex mt-5'>
                      {book?.status == "pending" ? <img src="https://www.psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="" style={{ width: '70px', height: '70px' }} /> :
                        book?.status == "approved" ?
                          <img src="https://juststickers.in/wp-content/uploads/2017/08/seal-of-approval.png" alt="" style={{ width: '70px', height: '70px' }} /> :

                          <img src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" alt="" style={{ width: '70px', height: '70px' }} />}
                    </div>
                  </div>

                  <div className='px-4 mt-4 md:mt-4'>
                    <img src={book?.imageUrl} alt="" className='' style={{ height: '250px', width: '250px' }} />

                    <div className='flex justify-end mt-4'>
                      <button onClick={() => handleDeleteBook(book?._id)} type='button' className='p-2 rounded bg-red-600 text-white hover:bg-gray-200 hover:text-red-600 hover:border hover:border-red-600 '>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            ))

            :
            <div className='flex justify-center items-center flex-col '>
              <img src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif" alt="" style={{ width: '200px', height: '200px' }} />
              <p className='text-red-600 text-2xl'>No Book Added Yet</p>
            </div>}
        </div>
      }
      {purchaseHistoryStatus &&
        <div className='p-4 sm:p-10 my-10 shadow rounded'>

          {broughtBooks?.length > 0 ?
            broughtBooks?.map((item) => (
              <div className='bg-gray-200 p-4 sm:p-8 rounded mt-4'>
                <div className='grid md:grid-cols-[3fr_1fr] gap-6'>
                  <div className='px-2'>
                    <h1 className='text-xl sm:text-2xl'>{item?.title}</h1>
                    <h2>{item?.author}</h2>
                    <h3 className='text-blue-600'>₹{item?.price}</h3>
                    <p className='text-justify mt-2'>{item?.abstract}</p>
                  </div>

                  <div className='px-2'>
                    <img src={item?.imageUrl} alt="" className='w-60 h-74 object-cover rounded' />
                  </div>
                </div>
              </div>
            ))

            :
            <div className='flex flex-col justify-center items-center mt-10'>
              <img src="https://i.pinimg.com/originals/b4/13/34/b41334a036d6796c281a6e5cbb36e4b5.gif" alt="" className='w-40 h-40' />
              <p className='text-red-600 text-xl sm:text-2xl'>No Book Bought Yet</p>
            </div>}

        </div>

      }

      <Footer />
    </>
  )
}

export default Profile