import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <>

      <section className="py-16 md:px-40 px-6 bg-white text-gray-800">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Contacts</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            inventore placeat nemo voluptatem iure, iste asperiores quia amet sint.
            Beatae repudiandae amet odit! Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-12 text-center">
          <div>
            <div className="flex items-center gap-2"> 
              <div className="bg-gray-100 p-4 rounded-full mb-3">
                <FaLocationDot className="text-xl text-gray-700"/>
              </div>
              <p className="text-gray-700">
                123 Main Street, Apt 4B, <br /> Anytown, CA 91234
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <div className="bg-gray-100 p-4 rounded-full mb-3">
                <FaPhoneAlt className="text-xl text-gray-700"/>
              </div>
              <p className="text-gray-700">+91 9874561230</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <div className="bg-gray-100 p-4 rounded-full mb-3">
                <FaEnvelope className="text-xl text-gray-700"/>
              </div>
              <p className="text-gray-700">bookstore@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-5 text-center">
              Send Me a Message
            </h3>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-800"
              />
              <input
                type="email"
                placeholder="Email Id"
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-800"
              />
              <textarea
                placeholder="Message"
                rows="5"
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-800"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition"
              >
                Send
              </button>
            </form>
          </div>


          <div className="rounded-lg overflow-hidden shadow-md h-[400px]">
            <iframe
              title="map"
              className="w-full h-full"
              src="https://www.google.com/maps?q=Kakkanad,Kerala&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>


    </>
  )
}

export default Contact