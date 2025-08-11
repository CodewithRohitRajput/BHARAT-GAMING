'use client'

import React from "react"
import { useState } from "react";
import Navbar from "@/(Components)/Navbar/page";
import Footer from "@/(Components)/Footer/page";
import { FaTrophy, FaGamepad, FaCalendarAlt, FaUsers, FaClock, FaEdit, FaPlus } from 'react-icons/fa'

export default function TournamentCreator() {
    const [tournamentname, setTournamentname] = useState<string>("")
    const [game, setGame] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [startDate, setStartDate] = useState<string>("")
    const [endDate, setEndDate] = useState<string>("")
    const [startTime, setStartTime] = useState<string>("")
    const [registrationDeadline, setRegistrationDeadline] = useState<string>("")
    const [maxTeams, setMaxTeams] = useState<number>(0)
    const [rules, setRules] = useState<string>("")
    const [prize, setPrize] = useState<string>("")
    const [status, setStatus] = useState<string>("upcoming")
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/Tournament/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({
                tournamentname,
                game,
                description,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                startTime,
                registrationDeadline,
                maxTeams,
                rules,
                prize,
                status
            })
        })

        // Reset form
        setTournamentname('')
        setDescription('')
        setEndDate('')
        setGame('')
        setMaxTeams(0)
        setPrize('')
        setRegistrationDeadline('')
        setRules('')
        setStartDate('')
        setStartTime('')
        setStatus('upcoming')

        const data = await response.json();
        console.log(data);
    }

    return (
        <div className="bg-gray-900 min-h-screen mt-10 text-white">
            <Navbar />
            
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-0-12">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-green-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2 mb-4">
                        <FaTrophy className="text-orange-400 w-5 h-5" />
                        <span className="text-orange-300 font-semibold">Tournament Creator</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-red-500 to-green-400 bg-clip-text text-transparent">
                        Create New Tournament
                    </h1>
                    
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Fill out the details below to create your custom gaming tournament
                    </p>
                </div>
                
                {/* Form Container */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 sm:p-8 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Tournament Name */}
                        <div className="space-y-2">
                            <label className="flex items-center text-lg font-medium text-orange-400">
                                <FaEdit className="mr-2" />
                                Tournament Name
                            </label>
                            <input
                                type="text"
                                value={tournamentname}
                                onChange={e => setTournamentname(e.target.value)}
                                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                placeholder="e.g. Winter Championship"
                                required
                            />
                        </div>
                        
                        {/* Game and Description */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="flex items-center text-lg font-medium text-orange-400">
                                    <FaGamepad className="mr-2" />
                                    Game
                                </label>
                                <input
                                    type="text"
                                    value={game}
                                    onChange={e => setGame(e.target.value)}
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                    placeholder="e.g. Valorant, BGMI"
                                    required
                                />
                            </div>
                            
                            <div className="space-y-2">
                                <label className="flex items-center text-lg font-medium text-orange-400">
                                    <FaEdit className="mr-2" />
                                    Prize Pool
                                </label>
                                <input
                                    type="text"
                                    value={prize}
                                    onChange={e => setPrize(e.target.value)}
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                    placeholder="e.g. ₹50,000"
                                    required
                                />
                            </div>
                        </div>
                        
                        {/* Description */}
                        <div className="space-y-2">
                            <label className="flex items-center text-lg font-medium text-orange-400">
                                <FaEdit className="mr-2" />
                                Tournament Description
                            </label>
                            <textarea
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition min-h-[120px]"
                                placeholder="Describe your tournament rules, format, and other details..."
                                required
                            />
                        </div>
                        
                        {/* Dates */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="flex items-center text-lg font-medium text-orange-400">
                                    <FaCalendarAlt className="mr-2" />
                                    Start Date
                                </label>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={e => setStartDate(e.target.value)}
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                    required
                                />
                            </div>
                            
                            <div className="space-y-2">
                                <label className="flex items-center text-lg font-medium text-orange-400">
                                    <FaCalendarAlt className="mr-2" />
                                    End Date
                                </label>
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={e => setEndDate(e.target.value)}
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                    required
                                />
                            </div>
                        </div>
                        
                        {/* Time and Registration */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="flex items-center text-lg font-medium text-orange-400">
                                    <FaClock className="mr-2" />
                                    Start Time
                                </label>
                                <input
                                    type="time"
                                    value={startTime}
                                    onChange={e => setStartTime(e.target.value)}
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                    required
                                />
                            </div>
                            
                            <div className="space-y-2">
                                <label className="flex items-center text-lg font-medium text-orange-400">
                                    <FaClock className="mr-2" />
                                    Registration Deadline
                                </label>
                                <input
                                    type="datetime-local"
                                    value={registrationDeadline}
                                    onChange={e => setRegistrationDeadline(e.target.value)}
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                    required
                                />
                            </div>
                        </div>
                        
                        {/* Teams and Rules */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="flex items-center text-lg font-medium text-orange-400">
                                    <FaUsers className="mr-2" />
                                    Maximum Teams
                                </label>
                                <input
                                    type="number"
                                    value={maxTeams}
                                    onChange={e => setMaxTeams(Number(e.target.value))}
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                    placeholder="e.g. 32"
                                    min="2"
                                    required
                                />
                            </div>
                            
                            <div className="space-y-2">
                                <label className="flex items-center text-lg font-medium text-orange-400">
                                    <FaEdit className="mr-2" />
                                    Tournament Status
                                </label>
                                <select
                                    value={status}
                                    onChange={e => setStatus(e.target.value)}
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                    required
                                >
                                    <option value="upcoming">Upcoming</option>
                                    <option value="live">Live</option>
                                    <option value="completed">Completed</option>
                                </select>
                            </div>
                        </div>
                        
                        {/* Rules */}
                        <div className="space-y-2">
                            <label className="flex items-center text-lg font-medium text-orange-400">
                                <FaEdit className="mr-2" />
                                Detailed Rules
                            </label>
                            <textarea
                                value={rules}
                                onChange={e => setRules(e.target.value)}
                                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition min-h-[150px]"
                                placeholder="List all tournament rules and regulations..."
                                required
                            />
                        </div>
                        
                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                            >
                                <FaPlus className="text-lg" />
                                <span>Create Tournament.</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    );
}