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
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Navbar />

      {/* Simplified Background */}
      <div className="relative overflow-hidden">
        {/* Reduced background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-16 w-40 h-40 bg-purple-500/5 rounded-full blur-xl"></div>
        </div>

        <div className="relative z-10 mt-28 px-4 sm:px-6 lg:px-8 flex-1">
          {/* Simplified Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-4">
              <FaFire className="text-cyan-400" />
              <span className="text-cyan-300 font-semibold">TOURNAMENTS</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Epic Tournaments
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Join competitive tournaments with massive prize pools
            </p>
          </div>

          {/* Optimized Tournament Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTournaments.reverse().map((tournament) => (
              <div 
                key={tournament._id} 
                className="group bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 hover:bg-gray-800/70 transition-all duration-300"
              >
                {/* Simplified Tournament Header */}
                <div className="relative h-40 bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                  {/* Game Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaGamepad className="text-5xl text-white/70" />
                  </div>

                  {/* Game Name */}
                  <div className="absolute top-3 left-3 bg-black/60 rounded-lg px-3 py-1">
                    <span className="text-cyan-400 text-sm font-semibold">{tournament.game}</span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      tournament.status === 'live' 
                        ? 'bg-red-500 text-white' 
                        : tournament.status === 'upcoming'
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-500 text-white'
                    }`}>
                      {tournament.status?.toUpperCase() || 'UPCOMING'}
                    </span>
                  </div>

                  {/* Prize Pool */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-black/60 rounded-lg p-2 flex justify-between items-center">
                      <span className="text-yellow-400 text-sm">Prize Pool</span>
                      <span className="text-yellow-300 font-semibold">{tournament.prize}</span>
                    </div>
                  </div>
                </div>

                {/* Tournament Details */}
                <div className="p-5 space-y-4">
                  {/* Tournament Name */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {tournament.tournamentname}
                  </h3>

                  {/* Tournament Info */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 flex items-center gap-1">
                        <FaCalendarAlt className="text-cyan-400" />
                        Date
                      </span>
                      <span className="text-gray-200">
                        {new Date(tournament.startDate).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 flex items-center gap-1">
                        <FaClock className="text-cyan-400" />
                        Time
                      </span>
                      <span className="text-gray-200">{tournament.startTime}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 flex items-center gap-1">
                        <FaUsers className="text-cyan-400" />
                        Teams
                      </span>
                      <span className="text-gray-200">{tournament.maxTeams || 'Unlimited'}</span>
                    </div>
                  </div>

                  {/* Entry Fee */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                    <span className="text-gray-400">Entry Fee</span>
                    <span className="text-green-400 font-semibold">₹{tournament.entryFee || 50}</span>
                  </div>

                  {/* Action Button */}
                  <div className="pt-3">
                    <Link href={`/Events/${tournament._id}`}>
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                        {tournament.status === 'live' ? (
                          <>
                            <FaFire />
                            WATCH LIVE
                          </>
                        ) : (
                          <>
                            <FaTrophy />
                            JOIN TOURNAMENT
                          </>
                        )}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {allTournaments.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl max-w-md mx-auto p-8">
                <FaGamepad className="text-6xl text-gray-500 mx-auto mb-4" />
                <h2 className="text-2xl text-gray-400 mb-2 font-semibold">No Tournaments Available</h2>
                <p className="text-gray-500">New tournaments coming soon</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}