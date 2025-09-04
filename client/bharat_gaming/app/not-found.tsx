'use client'

import Link from 'next/link'
import { FaGamepad, FaHome, FaSearch } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        {/* Gaming Icon */}
        <div className="mb-8">
          <FaGamepad className="text-8xl text-cyan-400 mx-auto animate-bounce" />
        </div>
        
        {/* 404 Text */}
        <h1 className="text-6xl font-bold text-cyan-400 mb-4">404</h1>
        
        {/* Error Message */}
        <h2 className="text-2xl font-semibold mb-4">Game Not Found!</h2>
        <p className="text-gray-400 mb-8">
          Looks like this page wandered off to another server. 
          Lets get you back to the gaming action!
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2"
          >
            <FaHome />
            Back to Home
          </Link>
          
          <Link 
            href="/games" 
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 flex items-center justify-center gap-2 border border-gray-600"
          >
            <FaSearch />
            Browse Games
          </Link>
        </div>
        
        {/* Gaming Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 text-sm">
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="text-cyan-400 font-bold">500+</div>
            <div className="text-gray-400">Active Tournaments</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="text-cyan-400 font-bold">500+</div>
            <div className="text-gray-400">Happy Gamers</div>
          </div>
        </div>
      </div>
    </div>
  )
}