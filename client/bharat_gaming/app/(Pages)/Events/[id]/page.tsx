'use client'

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/(Components)/Navbar/page";
import Footer from "@/(Components)/Footer/page";
import Link from "next/link";
import './page.css'

export default function EventId() {  
    const {id} = useParams();
    const [tournament, setTournament] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function tournamentDetails() {
            try {
                const details = await fetch(`http://localhost:5000/Tournament/get/${id}`, {credentials: 'include'});
                const data = await details.json();
                setTournament(data.allTournaments);
            } catch (error) {
                console.error("Error fetching tournament details:", error);
            } finally {
                setLoading(false);
            }
        }
        tournamentDetails();
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
                                        tournament.status === 'upcoming' ? 'text-blue-400 bg-blue-900/20 border-blue-400/30' :
                                        tournament.status === 'live' ? 'text-green-400 bg-green-900/20 border-green-400/30' :
                                        'text-purple-400 bg-purple-900/20 border-purple-400/30'
                                    }`}>
                                        {tournament.status.toUpperCase()}
                                    </span>
                                </div>
                            </div>
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
                                            <h3 className="text-cyan-300 text-sm uppercase tracking-wider mb-1">Dates</h3>
                                            <p className="text-gray-300 text-lg">
                                                {new Date(tournament.startDate).toLocaleDateString("en-GB")} 
                                                
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-cyan-300 text-sm uppercase tracking-wider mb-1">Start Time</h3>
                                            <p className="text-gray-300 text-lg">{tournament.startTime}</p>
                                        </div>
                                        <div>
                                            <h3 className="text-cyan-300 text-sm uppercase tracking-wider mb-1">Registration Deadline</h3>
                                            <p className="text-gray-300 text-lg">
                                                {new Date(tournament.registrationDeadline).toLocaleString()}
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-cyan-300 text-sm uppercase tracking-wider mb-1">Team Slots</h3>
                                            <p className="text-gray-300 text-lg">
                                                {tournament.maxTeams} teams max
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Register Button */}
                                <div className="flex justify-center">
                                    <Link href="#" className="inline-block">
                                    <button className="super-button">
  <span>Register Now</span>
  {/* <svg fill="none" viewBox="0 0 24 24" className="arrow">
    <path
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2"
      stroke="currentColor"
      d="M5 12h14M13 6l6 6-6 6"
    ></path>
  </svg> */}
</button>


                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="bg-gray-800 rounded-xl p-8 max-w-md mx-auto border border-red-500/20 shadow-lg shadow-red-500/10">
                            <h2 className="text-2xl text-red-400 mb-4">Tournament not found</h2>
                            <p className="text-gray-300">The tournament you're looking for doesn't exist or may have been removed.</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-20">
                <Footer />
            </div>
        </div>
    )
}