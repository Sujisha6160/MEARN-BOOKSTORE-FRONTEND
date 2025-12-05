import React from "react";
import { Link } from "react-router-dom";

export default function Pnf() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 to-white text-gray-800 px-6 py-12">
      <h1 className="text-9xl font-extrabold text-yellow-400 mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-2">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        Oops! Looks like you’ve wandered into a missing chapter. The page you’re
        looking for doesn’t exist in our bookstore.
      </p>

      <div className="flex gap-4">
        <Link
          to="/"
          className="px-6 py-3 bg-yellow-400 text-white font-semibold rounded-full shadow hover:bg-yellow-500 transition"
        >
          Go to Home
        </Link>
        <Link
          to="/catalog"
          className="px-6 py-3 border border-yellow-400 text-yellow-600 font-semibold rounded-full hover:bg-yellow-50 transition"
        >
          Browse Books
        </Link>
      </div>

      <div className="mt-12 relative">
        <div className="w-72 h-72 bg-yellow-100 rounded-full absolute -top-12 -left-12 blur-3xl opacity-50"></div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/4379/4379546.png"
          alt="Lost Book Illustration"
          className="w-64 h-64 relative z-10 drop-shadow-lg animate-bounce-slow"
        />
      </div>

      <p className="mt-8 text-sm text-gray-500">Back to reading adventures 📚</p>
    </div>
  );
}