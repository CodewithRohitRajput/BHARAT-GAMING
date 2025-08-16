import React from "react";
import './page.css';
import Navbar from "@/(Components)/Navbar/page";
import Footer from "@/(Components)/Footer/page";
import Link from "next/link";
import { FaGamepad, FaCalendarAlt, FaClock, FaTrophy, FaUsers, FaFire } from "react-icons/fa";

export default async function Events() {
  const res = await fetch('http://localhost:5000/Tournament/get', {
    cache: 'no-store',
  });

  const { allTournaments }: { allTournaments: any[] } = await res.json();

  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Navbar />

      {/* Enhanced Background Elements */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-16 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-lg animate-pulse delay-500"></div>
          <div className="absolute top-20 right-1/4 w-28 h-28 bg-orange-500/8 rounded-full blur-lg animate-pulse delay-2000"></div>
          
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20"></div>
          </div>
        </div>

        <div className="relative z-10 mt-28 px-4 sm:px-6 lg:px-8 flex-1">
          {/* Enhanced Page Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm mb-6">
              <FaFire className="text-cyan-400 animate-pulse" />
              <span className="text-cyan-300 font-semibold tracking-wide">LIVE TOURNAMENTS</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Epic Tournaments
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed">
              Join the ultimate gaming experience with competitive tournaments, 
              massive prize pools, and intense competition
            </p>
          </div>

          {/* Premium Tournament Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allTournaments.reverse().map((tournament, index) => (
              <div 
                key={tournament._id} 
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-75">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-xl"></div>
                </div>

                {/* Tournament Image with Enhanced Effects */}
                <div className="relative h-52 overflow-hidden">
                  {/* Dynamic Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-purple-500/20 to-pink-500/30">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Animated Particles */}
                  <div className="absolute inset-0">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="absolute top-8 right-6 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce delay-500"></div>
                  </div>

                  {/* Game Icon with Rotation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaGamepad className="text-7xl text-white/80 group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                  </div>

                  {/* Game Logo/Icon */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md rounded-xl px-4 py-2 border border-cyan-500/30">
                    <span className="text-cyan-400 text-sm font-bold tracking-wide">{tournament.game}</span>
                  </div>

                  {/* Enhanced Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider border backdrop-blur-md ${
                      tournament.status === 'live' 
                        ? 'bg-red-500/90 text-white border-red-400/50 animate-pulse shadow-lg shadow-red-500/30' 
                        : tournament.status === 'upcoming'
                        ? 'bg-green-500/90 text-white border-green-400/50 shadow-lg shadow-green-500/30'
                        : 'bg-purple-500/90 text-white border-purple-400/50 shadow-lg shadow-purple-500/30'
                    }`}>
                      {tournament.status?.toUpperCase() || 'UPCOMING'}
                    </span>
                  </div>

                  {/* Prize Pool Highlight */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/80 backdrop-blur-md rounded-xl p-3 border border-yellow-500/30">
                      <div className="flex items-center justify-between">
                        <span className="text-yellow-400 text-sm font-semibold">Prize Pool</span>
                        <span className="text-yellow-300 text-lg font-bold">{tournament.prize}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Tournament Details */}
                <div className="p-6 space-y-5">
                  {/* Tournament Name with Gradient */}
                  <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-500">
                    {tournament.tournamentname}
                  </h3>

                  {/* Enhanced Tournament Info */}
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
                      <span className="text-gray-400 flex items-center gap-2">
                        <FaCalendarAlt className="text-cyan-400" />
                        Date
                      </span>
                      <span className="text-gray-200 font-semibold">
                        {new Date(tournament.startDate).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
                      <span className="text-gray-400 flex items-center gap-2">
                        <FaClock className="text-cyan-400" />
                        Time
                      </span>
                      <span className="text-gray-200 font-semibold">{tournament.startTime}</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-2 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
                      <span className="text-gray-400 flex items-center gap-2">
                        <FaUsers className="text-cyan-400" />
                        Slots
                      </span>
                      <span className="text-gray-200 font-semibold">{tournament.maxTeams || 'Unlimited'}</span>
                    </div>
                  </div>

                  {/* Entry Fee with Enhanced Styling */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-700/50">
                    <span className="text-gray-400 text-sm font-medium">Entry Fee</span>
                    <span className="text-green-400 font-bold text-lg">₹{tournament.entryFee || 100}</span>
                  </div>

                  {/* Premium Action Button */}
                  <div className="pt-4 ">
                    <Link href={`/Events/${tournament._id}`}>
                      <button className= "cursor-pointer w-full relative overflow-hidden group/btn bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 border border-white/10">
                        
                        {/* Button Content */}
                        <span className="relative z-10 flex items-center justify-center gap-2 text-sm tracking-wider">
                          {tournament.status === 'live' ? (
                            <>
                              <FaFire className="animate-pulse" />
                              WATCH LIVE
                            </>
                          ) : (
                            <>
                              <FaTrophy />
                              JOIN 
                            </>
                          )}
                        </span>

                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Shine Effect */}
                        <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Enhanced Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Enhanced Empty State */}
          {allTournaments.length === 0 && (
            <div className="text-center py-32">
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl max-w-lg mx-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
                <div className="relative p-12">
                  <FaGamepad className="text-8xl text-gray-600 mx-auto mb-6 animate-bounce" />
                  <h2 className="text-3xl text-gray-400 mb-4 font-bold">No Tournaments Available</h2>
                  <p className="text-gray-500 text-lg">Epic battles are coming soon! Stay tuned for exciting tournaments.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
}