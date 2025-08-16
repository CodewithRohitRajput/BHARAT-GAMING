'use client'

import Image from "next/image"
import Link from "next/link"
import './navbar.css'
// import { cookies } from "next/headers"
import { useEffect, useState } from 'react'
import { 
  FaHome, 
  FaInfoCircle, 
  FaTrophy, 
  FaUsers, 
  FaCog, 
  FaEnvelope,
  FaBars,
  FaTimes
} from 'react-icons/fa'

export default  function Navbar() {



    // const cookieStore = cookies();
    // const role = cookieStore.get("role")?.value;
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [role, setRole] = useState('user')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(()=>{
    async function fetchRole() {
        
        const getRole = await fetch('http://localhost:5000/role' , {credentials : 'include'});
        const data = await getRole.json();
        setRole(data.role);
    }
    fetchRole();
  })

  const navLinks = [
    { href: "/", label: "Home", icon: FaHome },
    { href: "/AboutUs", label: "About", icon: FaInfoCircle },
    { href: "/Events", label: "Tournaments", icon: FaTrophy },

   ...(role === 'admin' ? [{ href: "/Admin", label: "Admin", icon: FaTrophy }] : []) ,
    { href: "/myTournament", label: "Joined", icon: FaTrophy },

    { href: "#team", label: "Team", icon: FaUsers },
    { href: "#gears", label: "Gears", icon: FaCog },
    { href: "#contact", label: "Contact", icon: FaEnvelope },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md border-b border-orange-500/20 z-50">
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BG</span>
              </div>
              <span className="text-white font-bold text-xl bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
                BHARAT GAMING
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => {
                const IconComponent = link.icon
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-orange-600/20 transition-all duration-300"
                  >
                    <IconComponent className="w-4 h-4 group-hover:text-orange-400 transition-colors duration-300" />
                    <span>{link.label}</span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Login Button - Desktop */}
          <div className="hidden md:flex">
            <Link href='/Login'>
            <button className="btn2">
  <span>LOGIN</span>
</button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 border-t border-orange-500/20">
          {navLinks.map((link) => {
            const IconComponent = link.icon
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-orange-600/20 transition-all duration-300"
              >
                <IconComponent className="w-5 h-5 group-hover:text-orange-400 transition-colors duration-300" />
                <span>{link.label}</span>
              </a>
            )
          })}
          
          {/* Mobile Login Button */}
          <div className="pt-4 border-t border-gray-700">
            <button className="w-full bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}