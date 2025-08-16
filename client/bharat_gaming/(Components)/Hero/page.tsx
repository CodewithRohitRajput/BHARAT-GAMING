'use client'

import { useState, useEffect } from 'react'
import '@/app/(Pages)/Events/page.css'
import './page.css'
import './card.css'
import { 
  FaTrophy, FaGamepad, FaUsers, FaPlay, FaPlus, FaSearch, FaFire, 
  FaCalendarAlt, FaCrown, FaDiscord, FaTwitter, FaInstagram, FaTwitch,
  FaChevronRight, FaChevronLeft, FaStar, FaRegStar, FaRegClock,
  FaHeadset, FaMicrochip, FaKeyboard, FaMouse
} from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { HiMenuAlt3 } from 'react-icons/hi'
import Link from 'next/link'

export default function GamingLandingPage() {
  const [activeTab, setActiveTab] = useState('popular')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Platform stats
  const stats = [
    { icon: FaTrophy, value: "500+", label: "Tournaments Hosted" },
    { icon: FaUsers, value: "50K+", label: "Registered Players" },
    { icon: FaGamepad, value: "15+", label: "Supported Games" },
    { icon: FaCrown, value: "₹2Cr+", label: "Total Prizes Won" }
  ]

  // Featured games
  const games = {
    popular: ["BGMI", "Free Fire", "Valorant", "CS:GO"],
    upcoming: ["Apex Legends Mobile", "Diablo Immortal", "Overwatch 2"],
    esports: ["Dota 2", "League of Legends", "Rainbow Six Siege"]
  }

  // Tournaments
  const tournaments = [
    { 
      game: "BGMI", 
      name: "Winter Championship",  
      prize: "₹2L", 
      date: "2024-12-15", 
      participants: "1.2K",
      status: "upcoming",
      image: "/games/bgmi.jpg"
    },
    { 
      game: "Free Fire", 
      name: "New Year Clash", 
      prize: "₹1.5L", 
      date: "2024-01-01", 
      participants: "850",
      status: "upcoming",
      image: "/games/freefire.jpg"
    },
    { 
      game: "Valorant", 
      name: "Republic Cup", 
      prize: "₹3L", 
      date: "2024-01-26", 
      participants: "2K",
      status: "upcoming",
      image: "/games/valorant.jpg"
    },
    { 
      game: "COD Mobile", 
      name: "Winter Royale", 
      prize: "₹1.8L", 
      date: "2024-12-20", 
      participants: "1.5K",
      status: "live",
      image: "/games/codm.jpg"
    }
  ]

  // Gaming gear
  const gear = [
    { name: "Razer Kraken Headset", price: "₹7,999", category: "Audio", icon: FaHeadset },
    { name: "RTX 3080 GPU", price: "₹62,999", category: "Components", icon: FaMicrochip },
    { name: "Mechanical Keyboard", price: "₹5,499", category: "Peripherals", icon: FaKeyboard },
    { name: "Gaming Mouse", price: "₹3,299", category: "Peripherals", icon: FaMouse }
  ]

  // Auto-slide effect
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % games.popular.length)
    }, 3000)
    return () => clearInterval(slideTimer)
  }, [])

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main>
        {/* Hero Section - Clean Tech Theme */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-16">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-500/20 rounded-full animate-pulse"></div> */}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8 mb-12">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-2">
                <FaGamepad className="text-cyan-400 w-5 h-5" />
                <span className="text-cyan-300 font-semibold">Next-Gen Gaming Platform</span>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                  BHARAT GAMING
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Compete in esports tournaments, build teams, and dominate the leaderboards.
                Your journey to pro gaming starts here.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/Events">
                 <button className="super-button">
                 <span>Launch Now</span>
                 </button>

                </Link>
                
                {/* <Link href="/Admin">
                  <button className="group bg-transparent border-2 border-cyan-500 hover:bg-cyan-500 text-cyan-400 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2">
                    <FaPlus className="group-hover:rotate-90 transition-transform duration-300" />
                    <span>Create Tournament</span>
                  </button>
                </Link> */}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section with Your Custom CSS */}
        <section className="py-16 bg-gray-800">
          {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
            {stats.map((stat, index) => (
              <div key={index} className="outer">
                <div className="dot"></div>
                <div className="card1">
                  <div className="ray"></div>
                  <div className="text">{stat.value}</div>
                  <div className="text-sm mt-2 text-gray-300">{stat.label}</div>
                  <div className="line topl"></div>
                  <div className="line leftl"></div>
                  <div className="line bottoml"></div>
                  <div className="line rightl"></div>
                </div>
              </div>
            ))}
          </div> */}

              <div className='flex flex-row justify-between px-20 w-full'>
                
     {stats.map((stat, index) => (
       
       <div className='card1' key={index}>
                <p className="heading">{stat.value}</p>
                <p>{stat.label}</p>
              </div>
            ))}
       </div>
        </section>

        {/* Games Section */}
        <section id="games" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Games</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Play, compete and win in our most popular tournaments
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {games[activeTab].map((game, index) => (
                <div key={index} className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition duration-300 group border border-gray-700 hover:border-cyan-500/50">
                  <div className="h-40 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <FaGamepad className="text-4xl text-cyan-400 group-hover:text-white transition" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-cyan-400 transition">{game}</h3>
                    <div className="flex items-center text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                      <span className="text-gray-400 text-sm ml-2">4.2</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tournaments Section with Your Custom Cards */}
        <section id="tournaments" className="relative py-20 bg-gray-800 overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-10 left-16 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute bottom-16 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-lg animate-pulse delay-500"></div>
  </div>

  <div className="relative z-10 container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Live & Upcoming Tournaments
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        Join the action now or register for upcoming events with massive prize pools
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {tournaments.map((tournament, index) => (
        <div key={index} className="card relative group">
          {/* Tournament Image */}
          <div className="relative h-48 overflow-hidden rounded-t-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-purple-500/20 to-pink-500/30 flex items-center justify-center">
              <FaGamepad className="text-6xl text-white/80" />
            </div>
            {/* Game Logo/Icon */}
            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1">
              <span className="text-cyan-400 text-sm font-bold">{tournament.game}</span>
            </div>
            {/* Status Badge */}
            <div className="absolute top-3 right-3">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                tournament.status === 'live' 
                  ? 'bg-red-500/90 text-white animate-pulse' 
                  : 'bg-green-500/90 text-white'
              }`}>
                {tournament.status.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Tournament Details */}
          <div className="p-6 space-y-4">
            {/* Tournament Name */}
            <h3 className="text-xl font-bold text-cyan-400 group-hover:text-white transition-colors">
              {tournament.name}
            </h3>

            {/* Tournament Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Date:</span>
                <span className="text-gray-200">{new Date(tournament.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Teams:</span>
                <span className="text-gray-200">{tournament.participants}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Prize Pool:</span>
                <span className="text-yellow-400 font-bold">{tournament.prize}</span>
              </div>
            </div>

            {/* Entry Fee */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-700">
              <span className="text-gray-400 text-sm">Entry Fee:</span>
              <span className="text-green-400 font-semibold">₹100</span>
            </div>

            {/* Action Button */}
            <div className="container4 ">
              <Link href={`/Events/${tournament.game}/${tournament.name}`}>
                <button className="button4 ">
                  {/* {tournament.status === 'live' ? 'WATCH LIVE' : 'REGISTER NOW'} */}
                  REGISTER
                </button>
              </Link>
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
        </div>
      ))}
    </div>

    {/* View All Button */}
    <div className="flex justify-center mt-16">
      <Link href='/Events'>
        <button className="btn">
          <span>View All </span>
          
        </button>
      </Link>
    </div>
  </div>
</section>

        {/* Gear Section */}
        <section id="gear" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Gaming Gear</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Equip yourself with the best gaming gear
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gear.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition duration-300 group border border-gray-700 hover:border-cyan-500/50">
                    <div className="flex justify-between items-start mb-4">
                      <IconComponent className="text-2xl text-cyan-400" />
                      <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2 group-hover:text-cyan-400 transition">
                      {item.name}
                    </h3>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-cyan-400 font-semibold">{item.price}</span>
                      <button className="bg-cyan-600 hover:bg-cyan-500 px-3 py-1 rounded text-sm transition">
                        Buy Now
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Competing?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Join thousands of gamers and start your journey to the top of the leaderboards today.
            </p>
            <Link href="/Events">
              <button className="btn1">
                JOIN NOW
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}