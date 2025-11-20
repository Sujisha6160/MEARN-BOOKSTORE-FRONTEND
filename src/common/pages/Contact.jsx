import React from "react";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

function Contact() {
  return (
    <div className="flex flex-col justify-center items-center px-5 md:px-20 py-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-3">Contacts</h1>
      <p className="text-center text-gray-600 max-w-4xl mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio inventore placeat nemo
        voluptatem iure, iste asperiores quia amet sint, similique corrupti praesentium delectus
        nesciunt odit laudantium. Beatae repudiandae amet odit! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Soluta, doloremque ullam itaque atque totam quasi molestias
        cumque ducimus fuga voluptate suscipit vel distinctio omnis voluptates obcaecati quidem quas
        iure? Facere?
      </p>

      {/* Contact Details */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-10">
        <div className="flex flex-col items-center text-center">
          <HiOutlineLocationMarker className="text-3xl mb-2 text-gray-700" />
          <p className="text-gray-700">123 Main Street, Apt 4B,</p>
          <p className="text-gray-700">Anytown, CA 91234</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <HiOutlinePhone className="text-3xl mb-2 text-gray-700" />
          <p className="text-gray-700">+91 9874561230</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <HiOutlineMail className="text-3xl mb-2 text-gray-700" />
          <p className="text-gray-700">Bookstore@gmail.com</p>
        </div>
      </div>

      {/* Form & Map Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Contact Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-center font-semibold mb-4">Send me Message</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-gray-500"
            />
            <input
              type="email"
              placeholder="Email Id"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-gray-500"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-gray-500"
            ></textarea>
            <button
              type="submit"
              className="bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition-all"
            >
              Send
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Kakkanad,%20Kerala&output=embed"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
