'use client'

import { useState, useEffect } from 'react'
import '@/app/(Pages)/Events/page.css'
import './page.css'
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
      date: "Dec 15-18", 
      participants: "1.2K",
      status: "upcoming",
      image: "/games/bgmi.jpg"
    },
    { 
      game: "Free Fire", 
      name: "New Year Clash", 
      prize: "₹1.5L", 
      date: "Jan 1-3", 
      participants: "850",
      status: "upcoming",
      image: "/games/freefire.jpg"
    },
    { 
      game: "Valorant", 
      name: "Republic Cup", 
      prize: "₹3L", 
      date: "Jan 26-28", 
      participants: "2K",
      status: "upcoming",
      image: "/games/valorant.jpg"
    },
    { 
      game: "COD Mobile", 
      name: "Winter Royale", 
      prize: "₹1.8L", 
      date: "Dec 20-22", 
      participants: "1.5K",
      status: "live",
      image: "/games/codm.jpg"
    }
  ]

  // Teams
  const teams = [
    { name: "Team Phoenix", game: "BGMI", members: 4, rating: 4.8 },
    { name: "Valor Kings", game: "Valorant", members: 5, rating: 4.9 },
    { name: "FF Legends", game: "Free Fire", members: 4, rating: 4.7 },
    { name: "CSGO Veterans", game: "CS:GO", members: 5, rating: 4.8 }
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
      {/* Navigation */}
      {/* <header className="bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-10">
            <a href="#" className="text-2xl font-bold text-orange-400">
              Game<span className="text-white">Hub</span>
            </a>
            
            <nav className="hidden lg:flex space-x-8">
              <a href="#" className="hover:text-orange-400 transition">Home</a>
              <a href="#tournaments" className="hover:text-orange-400 transition">Tournaments</a>
              <a href="#games" className="hover:text-orange-400 transition">Games</a>
              <a href="#teams" className="hover:text-orange-400 transition">Teams</a>
              <a href="#gear" className="hover:text-orange-400 transition">Gear</a>
            </nav>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-gray-300 hover:text-white">
              <FaSearch className="w-4 h-4" />
              <span>Search</span>
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-md font-medium transition">
              Sign In
            </button>
          </div>

          <button 
            className="lg:hidden text-2xl"
            onClick={() => setMobileMenuOpen(true)}
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </header> */}

      {/* Mobile Menu */}
      {/* {mobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-900/95 z-50 backdrop-blur-sm">
          <div className="flex justify-end p-6">
            <button 
              className="text-2xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              <IoMdClose />
            </button>
          </div>
          
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <nav className="flex flex-col items-center space-y-6 text-xl">
              <a href="#" className="hover:text-orange-400 transition">Home</a>
              <a href="#tournaments" className="hover:text-orange-400 transition">Tournaments</a>
              <a href="#games" className="hover:text-orange-400 transition">Games</a>
              <a href="#teams" className="hover:text-orange-400 transition">Teams</a>
              <a href="#gear" className="hover:text-orange-400 transition">Gear</a>
            </nav>
            
            <div className="flex space-x-6 mt-8">
              <a href="#" className="text-2xl hover:text-orange-400 transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl hover:text-orange-400 transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-orange-400 transition">
                <FaDiscord />
              </a>
              <a href="#" className="text-2xl hover:text-orange-400 transition">
                <FaTwitch />
              </a>
            </div>
            
            <button className="mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md font-medium transition">
              Sign In
            </button>
          </div>
        </div>
      )} */}

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-16">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8 mb-12">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-green-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2">
                <FaFire className="text-orange-400 w-5 h-5" />
                <span className="text-orange-300 font-semibold  ">India's Premier Gaming Platform</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                {/* <span className="text-white">Compete &</span>
                <br /> */}
                <span className="bg-gradient-to-r from-orange-400 via-red-500 to-green-400 bg-clip-text text-transparent">
                  BHARAT GAMING
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Join thousands of gamers in daily tournaments across multiple games. 
                Create your own tournaments and climb the leaderboards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-2">
                  <FaSearch className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>Browse Tournaments</span>
                </button>
                
                <button className="group bg-transparent border-2 border-green-500 hover:bg-green-500 text-green-400 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2">
                  <FaPlus className="group-hover:rotate-90 transition-transform duration-300" />
                  <span>Create Tournament</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-800">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-56 max-w-5xl mx-48">
  {stats.map((stat, index) => (
    <div key={index} className="outer">
      <div className="dot"></div>
      <div className="card1">
        <div className="ray"></div>
        <div className="text">{stat.value}</div>
        <div>{stat.label}</div>
        <div className="line topl"></div>
        <div className="line leftl"></div>
        <div className="line bottoml"></div>
        <div className="line rightl"></div>
      </div>
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
{/* 
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-gray-800 rounded-lg p-1">
                <button 
                  className={`px-4 py-2 rounded-md ${activeTab === 'popular' ? 'bg-orange-500 text-white' : 'text-gray-300'}`}
                  onClick={() => setActiveTab('popular')}
                >
                  Popular
                </button>
                <button 
                  className={`px-4 py-2 rounded-md ${activeTab === 'upcoming' ? 'bg-orange-500 text-white' : 'text-gray-300'}`}
                  onClick={() => setActiveTab('upcoming')}
                >
                  Upcoming
                </button>
                <button 
                  className={`px-4 py-2 rounded-md ${activeTab === 'esports' ? 'bg-orange-500 text-white' : 'text-gray-300'}`}
                  onClick={() => setActiveTab('esports')}
                >
                  eSports
                </button>
              </div>
            </div> */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {games[activeTab].map((game : any, index : any) => (
                <div key={index} className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition duration-300 group">
                  <div className="h-40 bg-gradient-to-br from-orange-500/20 to-purple-500/20 flex items-center justify-center">
                    <FaGamepad className="text-4xl text-orange-400 group-hover:text-white transition" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-orange-400 transition">{game}</h3>
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

        {/* Tournaments Section */}
        <section id="tournaments" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Live & Upcoming Tournaments</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Join the action now or register for upcoming events
              </p>
            </div>
            
             <div className="mt-28 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          {tournaments.reverse().map((d) => (
            <div className="card w-full max-w-xs">
              <ul className="w-full">
                <li className="text-cyan-500 text-lg font-bold text-center -translate-y-8">
                  {d.name}
                </li>

                <li className="text-start text-cyan-200 font-mono -translate-y-5 ml-4">
                  Game: <span>{d.game}</span>
                </li>

                <li className="-translate-y-4 text-start text-cyan-200 font-mono ml-4">
                  Date: {new Date(d.date).toLocaleDateString()}
                </li>

                <li className="text-start -translate-y-3 text-cyan-200 font-mono ml-4" >
                  Time: {d.participants}
                </li>

                <li className="text-start -translate-y-2 text-cyan-200 font-mono ml-4">
                  Win Prize: {d.prize}
                </li>

                <div className="flex w-full justify-center">
                  <li className="translate-y-4 bg-cyan-200 w-24 text-black rounded-xl animate-pulse font-semibold px-2 text-center font-mono">
                    {d.status}
                  </li>
                </div>  
                <div className="w-full translate-y-8 flex justify-center">

                   <button>
    JOIN
    <div id="clip">
        <div id="leftTop" className="corner"></div>
        <div id="rightBottom" className="corner"></div>
        <div id="rightTop" className="corner"></div>
        <div id="leftBottom" className="corner"></div>
    </div>
    <span id="rightArrow" className="arrow"></span>
    <span id="leftArrow" className="arrow"></span>
</button>
                </div>
              </ul>
            </div>
          ))}
        </div>
      </div>
          </div>
          <div>
          <div className="item button-parrot w-full flex justify-center items-center translate-y-9 " >
            <Link href='/Events'>
  <button className="btn">View All</button>
            </Link>

  </div>
          </div>
        </section>

        {/* Teams Section */}
        {/* <section id="teams" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Top Teams</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Join or compete against the best teams in the community
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teams.map((team, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition duration-300 group border border-gray-700 hover:border-orange-500/50">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-400">
                      <FaUsers className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold group-hover:text-orange-400 transition">{team.name}</h3>
                      <span className="text-gray-400 text-sm">{team.game}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <div className="text-gray-400">
                      <span className="text-white">{team.members}</span> members
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <FaStar />
                      <span className="text-white ml-1">{team.rating}</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 py-2 bg-gray-700 hover:bg-orange-500 rounded-lg transition text-sm">
                    View Team
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Gear Section */}
        <section id="gear" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Gaming Gear</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Equip yourself with the best gaming gear from our partners
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gear.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="bg-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition duration-300 group border border-gray-700 hover:border-cyan-500/50">
                    <div className="flex justify-between items-start mb-4">
                      <IconComponent className="text-2xl text-cyan-400" />
                      <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2 group-hover:text-cyan-400 transition">
                      {item.name}
                    </h3>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-cyan-400 font-semibold">{item.price}</span>
                      <div className='bg-cyan-600'>
                      <button className="text-gray-400 cursor-pointer  transition">
                        Buy Now
                      </button>
                        </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500/10 to-purple-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Competing?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Join thousands of gamers and start your journey to the top of the leaderboards today.
            </p>
            <div>
           <button className="btn1">
             JOIN NOW
          </button>
            </div>


          </div>
        </section>
      </main>

     
    </div>
  )
}