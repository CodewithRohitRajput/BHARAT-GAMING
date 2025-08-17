"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/(Components)/Navbar/page";
import Footer from "@/(Components)/Footer/page";
import Link from "next/link";
import "./page.css";

export default function EventId() {
  const { id } = useParams();
  const [tournament, setTournament] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  // Registration status states
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [userTeam, setUserTeam] = useState<any>(null);
  // admin check 
  const [admin , setAdmin ] = useState<boolean>(false);


  useEffect(() => {
    async function fetchData() {
      try {
        // Get tournament details
        const tournamentRes = await fetch(
          `http://localhost:5000/Tournament/get/${id}`,
          { credentials: "include" }
        );
        const tournamentData = await tournamentRes.json();
        setTournament(tournamentData.allTournaments);

        // Check registration status
        const statusRes = await fetch(
          `http://localhost:5000/team/${id}/registration-status`,
          { credentials: "include" }
        );
        const statusData = await statusRes.json();
        
        setIsLoggedIn(statusData.isLoggedIn);
        setIsRegistered(statusData.isRegistered);
        setUserTeam(statusData.userTeam);

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    
    
    
    
    const checkAdmin = async () =>{
      const res = await fetch(`http://localhost:5000/Tournament/isAdmin` , {credentials : 'include'})
      const data = await res.json();
      setAdmin(data.adminUser);
    }
    
    fetchData();
    checkAdmin();

  }, [id]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Navbar />

      <div className="mt-28 px-4 sm:px-6 lg:px-8 flex-1">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
          </div>
        ) : tournament ? (
          <div className="max-w-6xl mx-auto">
            {/* Tournament Header */}
            <div className="bg-gray-800 rounded-xl p-8 mb-12 border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
              <div className="text-center">
                <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
                  {tournament.tournamentname}
                </h1>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="text-cyan-200 text-sm sm:text-base px-3 py-1 rounded-full bg-cyan-900/20 border border-cyan-400/30">
                    {tournament.game}
                  </span>
                  <span className="text-purple-200 text-sm sm:text-base px-3 py-1 rounded-full bg-purple-900/20 border border-purple-400/30">
                    Prize: {tournament.prize}
                  </span>
                  <span className={`text-sm sm:text-base px-3 py-1 rounded-full border ${
                      tournament.status === "upcoming"
                        ? "text-blue-400 bg-blue-900/20 border-blue-400/30"
                        : tournament.status === "ongoing"
                        ? "text-green-400 bg-green-900/20 border-green-400/30"
                        : "text-purple-400 bg-purple-900/20 border-purple-400/30"
                    }`}>
                    {tournament.status.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            {/* REGISTRATION STATUS SECTION */}
            <div className="mb-8">
              {!isLoggedIn ? (
                /* NOT LOGGED IN - Show login prompt */
                <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 rounded-xl border border-orange-500/30 p-6">
                  <div className="text-center">
                    <div className="mb-4">
                      <svg className="w-16 h-16 text-orange-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">🔐 Login Required</h2>
                    <p className="text-gray-300 mb-6">
                      Please login to register for tournaments and receive room credentials when available.
                    </p>
                    <Link href="/login">
                      <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                        Login Now
                      </button>
                    </Link>
                  </div>
                </div>
              ) : !isRegistered ? (
                /* LOGGED IN BUT NOT REGISTERED - Show registration benefits */
                <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl border border-blue-500/30 p-6">
                  <div className="text-center">
                    <div className="mb-4">
                      <svg className="w-16 h-16 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">🎮 Join the Competition!</h2>
                    <p className="text-gray-300 mb-6">
                      Register your team now to secure your spot in the tournament.
                    </p>
                    
                    <div className="bg-gray-800/70 rounded-lg p-6 mb-6 border border-cyan-500/30">
                      <h3 className="text-cyan-400 font-bold text-lg mb-4">✨ What You'll Get After Registration:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-300">Instant registration confirmation</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-4 1-1-4 .257-.257A6 6 0 1118 8zm-6-2a1 1 0 11-2 0 1 1 0 012 0zm-1 4a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-300">Room ID & Password (when admin updates)</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                          </div>
                          <span className="text-gray-300">Tournament updates & notifications</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-300">Secure tournament spot guaranteed</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-4 mb-6">
                      <p className="text-yellow-300 font-semibold text-sm mb-1">⚡ Limited Slots Available!</p>
                      <p className="text-yellow-100 text-sm">
                        Only {tournament.maxTeams} teams can participate. Register now to secure your spot!
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                /* REGISTERED - Show success and room details */
                <div className="space-y-6">
                  {/* Success Message */}
                  <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-xl border border-green-500/30 p-6">
                    <div className="text-center">
                      <div className="mb-4">
                        <svg className="w-16 h-16 text-green-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-4">🎉 Registration Successful!</h2>
                      <p className="text-gray-300 mb-4">
                        Your team <span className="text-green-400 font-bold">"{userTeam?.teamname}"</span> is registered and ready to compete!
                      </p>
                      
                      <div className="bg-gray-800/70 rounded-lg p-4 border border-green-500/30">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-gray-400">Team Name</p>
                            <p className="text-white font-semibold">{userTeam?.teamname}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Captain</p>
                            <p className="text-white font-semibold">{userTeam?.captain}</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Members</p>
                            <p className="text-white font-semibold">{userTeam?.members?.length || 0} players</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Room Details */}
                  <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl border border-purple-500/30 p-6">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
                      <svg className="w-8 h-8 mr-3 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-4 1-1-4 .257-.257A6 6 0 1118 8zm-6-2a1 1 0 11-2 0 1 1 0 012 0zm-1 4a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      Game Room Information
                    </h3>

                    {tournament.roomId && tournament.roomPass ? (
                      /* Room details available */
                      <div className="space-y-6">
                        <div className="text-center mb-6">
                          <div className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-full">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-bold">Room Details Available!</span>
                          </div>
                          <p className="text-gray-300 text-sm mt-2">Use these credentials to join the tournament</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-gray-800/70 rounded-lg p-6 border border-purple-500/30">
                            <div className="text-center">
                              <p className="text-gray-400 text-sm mb-3 uppercase tracking-wider">Room ID</p>
                              <div className="bg-gray-900 rounded-lg p-4 border-2 border-gray-600 mb-3">
                                <code className="text-cyan-400 font-mono text-xl font-bold select-all">{tournament.roomId}</code>
                              </div>
                              <button 
                                onClick={() => navigator.clipboard.writeText(tournament.roomId)}
                                className="bg-cyan-600 hover:bg-cyan-700 text-white text-sm px-3 py-1 rounded transition-colors"
                              >
                                📋 Copy ID
                              </button>
                            </div>
                          </div>
                          
                          <div className="bg-gray-800/70 rounded-lg p-6 border border-purple-500/30">
                            <div className="text-center">
                              <p className="text-gray-400 text-sm mb-3 uppercase tracking-wider">Password</p>
                              <div className="bg-gray-900 rounded-lg p-4 border-2 border-gray-600 mb-3">
                                <code className="text-cyan-400 font-mono text-xl font-bold select-all">{tournament.roomPass}</code>
                              </div>
                              <button 
                                onClick={() => navigator.clipboard.writeText(tournament.roomPass)}
                                className="bg-cyan-600 hover:bg-cyan-700 text-white text-sm px-3 py-1 rounded transition-colors"
                              >
                                📋 Copy Password
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-4 text-center">
                          <div className="flex items-center justify-center space-x-2 mb-2">
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <p className="text-yellow-300 font-bold">Important Instructions</p>
                          </div>
                          <p className="text-yellow-100 text-sm">
                            Join the room 10-15 minutes before tournament start time. Keep this page bookmarked for easy access!
                          </p>
                        </div>
                      </div>
                    ) : (
                      /* Room details not yet available */
                      <div className="text-center">
                        <div className="mb-6">
                          <svg className="w-16 h-16 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-300 mb-4">Room Details Coming Soon!</h4>
                        <p className="text-gray-400 mb-6">
                          The admin will update room credentials closer to the tournament date. 
                          Don't worry, you'll see them here automatically once they're available.
                        </p>
                        
                        <div className="bg-gray-800/70 rounded-lg p-4 border border-gray-600">
                          <div className="flex items-center justify-center space-x-2 mb-2">
                            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <p className="text-blue-400 font-semibold text-sm">You'll be notified automatically</p>
                          </div>
                          <p className="text-gray-400 text-sm">
                            Refresh this page periodically or bookmark it to check for updates
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Main Content */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="md:col-span-2 space-y-6">
                {/* Description */}
                <div className="bg-gray-800 rounded-xl p-6 border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
                  <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                    <span className="inline-block w-2 h-6 bg-cyan-400 mr-2 rounded"></span>
                    Tournament Details
                  </h2>
                  <p className="text-gray-300 font-mono leading-relaxed">
                    {tournament.description}
                  </p>
                </div>

                {/* Rules */}
                <div className="bg-gray-800 rounded-xl p-6 border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
                  <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                    <span className="inline-block w-2 h-6 bg-cyan-400 mr-2 rounded"></span>
                    Rules & Regulations
                  </h2>
                  <div className="text-gray-300 font-mono whitespace-pre-line">
                    {tournament.rules}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Info Card */}
                <div className="bg-gray-800 rounded-xl p-6 border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
                  <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                    <span className="inline-block w-2 h-6 bg-cyan-400 mr-2 rounded"></span>
                    Event Info
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-cyan-300 text-sm uppercase tracking-wider mb-1">
                        Dates
                      </h3>
                      <p className="text-gray-300 text-lg">
                        {new Date(tournament.startDate).toLocaleDateString("en-GB")}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-cyan-300 text-sm uppercase tracking-wider mb-1">
                        Start Time
                      </h3>
                      <p className="text-gray-300 text-lg">
                        {tournament.startTime}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-cyan-300 text-sm uppercase tracking-wider mb-1">
                        Registration Deadline
                      </h3>
                      <p className="text-gray-300 text-lg">
                        {new Date(tournament.registrationDeadline).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-cyan-300 text-sm uppercase tracking-wider mb-1">
                        Team Slots
                      </h3>
                      <p className="text-gray-300 text-lg">
                        {tournament.maxTeams} teams max
                      </p>
                    </div>
                  </div>
                </div>
                            
                {/* Dynamic Register/Status Button */}
                <div className="flex justify-center">
                  {!isLoggedIn ? (
                    <Link href="/login" className="inline-block">
                      <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                        Login to Register
                      </button>
                    </Link>
                  ) : !isRegistered ? (
                    <Link href={`/Events/${id}/team`} className="inline-block">
                      <button className="super-button">
                        <span>Register Now</span>
                      </button>
                    </Link>
                  ) : (
                    <div className="text-center">
                      <div className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold mb-3 flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>✅ Registered Successfully</span>
                      </div>
                    </div>
                  )}

                  <div className="ml-5 mt-1">
                    <Link href={`${id}/AllTeams`}>
                      <button className="animated-button">
                        <span> See All Teams </span>
                        <span></span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-gray-800 rounded-xl p-8 max-w-md mx-auto border border-red-500/20 shadow-lg shadow-red-500/10">
              <h2 className="text-2xl text-red-400 mb-4">
                Tournament not found
              </h2>
              <p className="text-gray-300">
                The tournament you're looking for doesn't exist or may have been removed.
              </p>
            </div>
          </div>
        )}
      </div>
      {!admin ? (<></>) : (<> 
        <div>
          <Link href={`${id}/Edit`}>
          <button>
            Edit
          </button>
          </Link>
        </div>
      </>) }

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}