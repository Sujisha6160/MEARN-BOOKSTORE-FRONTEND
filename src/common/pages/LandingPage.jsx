import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { HiMiniMagnifyingGlass } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
      <Header />
      {/* landing */}
      <div
        style={{ height: "100vh" }}
        className="flex flex-col justify-center items-center bg-[url('https://t4.ftcdn.net/jpg/08/29/59/01/360_F_829590110_pnlvicNclA7qKW9ZPwvAJHx6ASMIi1HZ.jpg')] bg-no-repeat bg-center bg-cover text-white">
        <div className="w-full flex flex-col justify-center items-center" style={{ height: "500px", backgroundColor: "(0,0,0,0.5)" }} >
          <h1 className="text-5xl font-black">Wonderful Gifts</h1>
          <p>Give your family and friends a book</p>
          <div className="mt-9 flex">
            <input type="text" placeholder="Search Books" className="bg-white p-3 rounded-3xl placeholder-gray-500 w-100"/>
            <HiMiniMagnifyingGlass
              className="text-gray-500 text-2xl mt-3"
              style={{ marginLeft: "-40px" }}
            />
          </div>
        </div>
      </div>

      {/* NEW ARRIVALS */}
      <div className="md:px-40 p-5 flex flex-col justify-center items-center">
        <h1 className='font-bold text-xl'>NEW ARRIVALS</h1>
        <h1>Explore Our Latest Collections</h1>
        <div className="md:grid grid-cols-4 w-full mt-5">
          <div className="p-3">
            <div className="shadow p-3 rounded">
              <img
                width={"100%"}
                height={"300px"}
                src="https://imgv2-1-f.scribdassets.com/img/document/822059583/original/80844d095d/1?v=1"
                alt=""
              />
              <div className="text-center mt-3">
                <p className="font-bold text-2xl">Book Name</p>
                <p className="font-bold text-xl">Author</p>
                <p className="font-bold">₹599</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center my-5">
          <Link to={"/all-books"}>
            <button className="px-3 py-2 bg-blue-900 text-white hover:border-blue-900 hover:text-blue-900 hover:bg-white">
              Explore More
            </button>
          </Link>
        </div>
      </div>

      {/* FEATURED AUTHORS */}
      <div className="">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-justify text-gray-700 ml-20">
            <h5 className="text-gray-600 text-xl text-center">FEATURED AUTHORS</h5>
            <h1 className="text-2xl font-bold mb-5 text-center">Captivates with every word</h1>
            <p>
              Lorem, ipsum dolor sit ammd:px-40 p-5 flex flex-col justify-center items-centeret consectetur adipisicing elit. Nesciunt fuga nostrum illum distinctio eum quidem recusandae soluta aliquam laboriosam odit quas, nam molestias fugiat culpa rem nulla iste? Modi, molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <br />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga nostrum illum distinctio eum quidem recusandae soluta aliquam laboriosam odit quas, nam molestias fugiat culpa rem nulla iste? Modi, molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="flex justify-center">
            <img width={"400px"} height={"400px"} src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=" alt="Author" />
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="md:px-40 p-5 flex flex-col justify-center items-center mt-10">
        <h5 className="text-gray-600 text-xl">TESTIMONIALS</h5>
        <h1 className="font-bold text-2xl mb-10 text-center">See What Others Are Saying</h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center max-w-sm hover:shadow-xl transition-all duration-300">
            <img
              src="https://t4.ftcdn.net/jpg/14/81/84/95/360_F_1481849536_ABGRPEIsDeV1HLtZ5psDxjfE12iXOZjP.jpg"
              alt="Testimonial"
              className="rounded-full w-28 h-28 object-cover shadow-md mb-4 border-4 border-gray-100"
            />
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">Teresa Joseph</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eos minus,
              obcaecati, quia numquam eligendi modi adipisci vero id repellendus
              officia, amet asperiores. Nulla neque autem, est et excepturi natus
              veritatis vitae explicabo dolor!"
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center max-w-sm hover:shadow-xl transition-all duration-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNSi5ENEozlbErKXwWXnvR5CRYTCIhUv1XA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNzWJ5zXkntRBZ5Lapn0ls6wX2Xs9Wgcs9EvPSsWLh-YY1KBCMJmak3-vTaLkJaHEhdM&usqp=CAU"
              alt="Testimonial"
              className="rounded-full w-28 h-28 object-cover shadow-md mb-4 border-4 border-gray-100"
            />
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">John Mathew</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eos minus,
              obcaecati, quia numquam eligendi modi adipisci vero id repellendus
              officia, amet asperiores. Nulla neque autem, est et excepturi natus
              veritatis vitae explicabo dolor!"
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center max-w-sm hover:shadow-xl transition-all duration-300">
            <img
              src="https://t4.ftcdn.net/jpg/14/81/84/95/360_F_1481849536_ABGRPEIsDeV1HLtZ5psDxjfE12iXOZjP.jpg"
              alt="Testimonial"
              className="rounded-full w-28 h-28 object-cover shadow-md mb-4 border-4 border-gray-100"
            />
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">Alicia Gomez</h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eos minus,
              obcaecati, quia numquam eligendi modi adipisci vero id repellendus
              officia, amet asperiores. Nulla neque autem, est et excepturi natus
              veritatis vitae explicabo dolor!"
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default LandingPage
