import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { getHomeBookAPI } from '../../Service/allAPI';

function LandingPage() {
  const [homeBook, setHomeBook] = useState([])

  const getHomeBooks = async () => {
    const result = await getHomeBookAPI()
    console.log(result);
    setHomeBook(result.data)
  }

  useEffect(() => {
    getHomeBooks()
  }, [])

  return (
    <>
      <Header />

      {/* landing  */}
      <div style={{ height: '100vh' }} className='flex flex-col justify-center items-center bg-[url(https://t4.ftcdn.net/jpg/08/29/59/01/360_F_829590110_pnlvicNclA7qKW9ZPwvAJHx6ASMIi1HZ.jpg)] bg-no-repeat bg-cover bg-center text-white'>
        <div className='w-full flex flex-col justify-center items-center' style={{ height: '800px', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <h1 className='text-5xl font-bold'>Wonderful Gifts</h1>
          <p>Give Your Family And Friends a Book</p>
          <div className='mt-9 flex'>
            <input type='text' placeholder='search Books' className='bg-white text-black p-3 rounded-3xl placeholder-gray-500 w-100' />
            <HiMiniMagnifyingGlass className='text-gray-500 text-2xl mt-3' style={{ marginLeft: '-40px' }} />
          </div>
        </div>
      </div>

      {/* new arrivals */}
      <section className='md:px-40 p-5 flex flex-col justify-center items-center'>
        <h1 className='text-3xl'>NEW ARRIVALS</h1>
        <h1 className='text-xl'>Explore Our Latest Collection</h1>

        {homeBook.length > 0 ?
          <div className='md:grid grid-cols-4 w-full mt-5'>

            {homeBook.map((item) => (
              <div className='p-3'>
                <div className='shadow p-3 rounded'>
                  <img height={'300px'} src={item.imageUrl} alt="" />
                  <div className='text-center mt-3'>
                    <p className='font-bold text-2xl'>{item.title}</p>
                    <p className='font-bold text-xl'>{item.author}</p>
                    <p className='font-bold'>₹{item.price}</p>
                  </div>
                </div>
              </div>
            ))
            }

          </div>
          :
          <p>Loading...</p>
        }

        <div className='text-center my-5'>
          <Link to={'/all-books'}><button className='px-4 py-3 bg-blue-900 text-white hover:border hover:border-blue-900 hover:text-blue-900 hover:bg-white'>Explore More</button></Link>
        </div>
      </section>

      {/* featured authors */}
      <section className="md:px-40 px-6 py-16 bg-white text-gray-800">
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Left content */}
          <div className="md:w-1/2">
            <h3 className="text-sm tracking-widest text-gray-500 uppercase text-center ">
              Featured Authors
            </h3>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2 mb-4 text-center">
              Captivates with every word
            </h2>
            <p className="text-gray-600  mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga
              nostrum illum distinctio eum quidem recusandae soluta aliquam
              laboriosam odit quas, nam molestias fugiat culpa rem nulla iste? Modi,
              molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sunt earum possimus accusantium necessitatibus id neque soluta
              quibusdam explicabo laborum? Deserunt vel quia voluptates dicta
              incidunt illo fuga pariatur sequi error.
            </p>
            <p className="text-gray-600 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga
              nostrum illum distinctio eum quidem recusandae soluta aliquam
              laboriosam odit quas, nam molestias fugiat culpa rem nulla iste? Modi,
              molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* Right image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://www.shutterstock.com/image-photo/closeup-portrait-caucasian-handsome-businessman-600nw-2144558713.jpg"
              alt="Featured Author"
              className="w-[350px] h-[350px] object-cover rounded-lg shadow-md"
            />
          </div>

        </div>
      </section>

      {/* testimonials */}
      <section className='bg-white py-16 md:px-40 px-60 text-gray-800'>
        <div className='text-center mb-10'>
          <h3 className='text-sm text-gray-500 uppercase'>Testimonials</h3>
          <h2 className='text-2xl md:text-3xl mt-2'>See What Others Are Saying</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {/* card 1*/}
          <div className='bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center hover:shadow-xl'>
            <img src="https://img.freepik.com/free-photo/happy-young-woman-standing-isolated-white-wall_171337-18037.jpg?semt=ais_hybrid&w=740&q=80" alt="" className='w-24 h-24 object-cover rounded-full mb-4' />
            <h4 className='font-semibold text-lg'>Treesa Joseph</h4>
            <p className='text-gray-600 text-sm mt-3'>“This bookstore has completely transformed how I buy books online. The layout, categories, and personalized suggestions make browsing fun and effortless. I also appreciate their quick support and beautiful packaging — it feels like opening a gift each time!”</p>
          </div>
          {/* card 2 */}
          <div className='bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center hover:shadow-xl'>
            <img src="https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-145493.jpg?semt=ais_hybrid&w=740&q=80" alt="" className='w-24 h-24 object-cover rounded-full mb-4' />
            <h4 className='font-semibold text-lg'>Jacob</h4>
            <p className='text-gray-600 text-sm mt-3'>“Shopping for books here has been such a pleasant experience. The website is easy to navigate, and my orders always arrive on time and in perfect condition. The detailed descriptions and reader reviews help me pick exactly what I’m looking for every time.”</p>
          </div>
          {/* card 3 */}
          <div className='bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center hover:shadow-xl'>
            <img src="https://t3.ftcdn.net/jpg/03/03/77/46/360_F_303774649_NPa6T7U22KBI2P8BxQ7MhIGJLB7KBd3P.jpg" alt="" className='w-24 h-24 object-cover rounded-full mb-4' />
            <h4 className='font-semibold text-lg'>Christo</h4>
            <p className='text-gray-600 text-sm mt-3'>“I absolutely love this bookstore! The collection is so thoughtfully curated — from timeless classics to the newest bestsellers. The staff recommendations never disappoint, and I've discovered so many wonderful authors here. It's truly a book lover's paradise!”</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default LandingPage