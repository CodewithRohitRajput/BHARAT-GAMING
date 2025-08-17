'use client'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/(Components)/Navbar/page";
import Footer from "@/(Components)/Footer/page";
import { FaTrophy, FaGamepad, FaCalendarAlt, FaUsers, FaClock, FaEdit, FaSave } from 'react-icons/fa';

function formatDate(dateString: string) {
    if (!dateString) return "";
    return dateString.slice(0, 10);
}
function formatDateTimeLocal(dateString: string) {
    if (!dateString) return "";
    return dateString.slice(0, 16);
}

export default function EditTournament() {
    const { id } = useParams();
    const [form, setForm] = useState({
        tournamentname: "",
        game: "",
        description: "",
        startDate: "",
        endDate: "",
        startTime: "",
        registrationDeadline: "",
        maxTeams: "",
        rules: "",
        prize: "",
        status: "",
        roomId: "",
        roomPass: ""
    });

    useEffect(() => {
        async function GetTournamentDetail() {
            const res = await fetch(`http://localhost:5000/Tournament/get/${id}`, { credentials: 'include' });
            const data = await res.json();
            if (data.allTournaments) {
                setForm({
                    tournamentname: data.allTournaments.tournamentname || "",
                    game: data.allTournaments.game || "",
                    description: data.allTournaments.description || "",
                    startDate: data.allTournaments.startDate || "",
                    endDate: data.allTournaments.endDate || "",
                    startTime: data.allTournaments.startTime || "",
                    registrationDeadline: data.allTournaments.registrationDeadline || "",
                    maxTeams: data.allTournaments.maxTeams || "",
                    rules: data.allTournaments.rules || "",
                    prize: data.allTournaments.prize || "",
                    status: data.allTournaments.status || "",
                    roomId: data.allTournaments.roomId || "",
                    roomPass: data.allTournaments.roomPass || ""
                });
            }
        }
        GetTournamentDetail();
    }, [id]);

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await fetch(`http://localhost:5000/Tournament/${id}/edit`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(form)
        });
        alert("Tournament updated successfully!");
    };

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Navbar />
            <div className=" mt-14 max-w-7xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-green-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2 mb-4">
                        <FaTrophy className="text-orange-400 w-5 h-5" />
                        <span className="text-orange-300 font-semibold">Edit Tournament</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-red-500 to-green-400 bg-clip-text text-transparent">
                        Update Tournament Details
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Modify the details below and save your changes.
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
                                name="tournamentname"
                                value={form.tournamentname}
                                onChange={handleChange}
                                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                placeholder="e.g. Winter Championship"
                                required
                            />
                        </div>
                        {/* Game and Prize */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="flex items-center text-lg font-medium text-orange-400">
                                    <FaGamepad className="mr-2" />
                                    Game
                                </label>
                                <input
                                    type="text"
                                    name="game"
                                    value={form.game}
                                    onChange={handleChange}
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
                                    name="prize"
                                    value={form.prize}
                                    onChange={handleChange}
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                    placeholder="e.g. ₹50,000"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="flex items-center text-lg font-medium text-orange-400">
                                    <FaEdit className="mr-2" />
                                    Room ID
                                </label>
                                <input
                                    type="text"
                                    name="roomId"
                                    value={form.roomId}
                                    onChange={handleChange}
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                    placeholder="e.g. 12345"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="flex items-center text-lg font-medium text-orange-400">
                                    <FaEdit className="mr-2" />
                                    Room Password
                                </label>
                                <input
                                    type="text"
                                    name="roomPass"
                                    value={form.roomPass}
                                    onChange={handleChange}
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                    placeholder="e.g. 101010"
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
                                name="description"
                                value={form.description}
                                onChange={handleChange}
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
                                    name="startDate"
                                    value={formatDate(form.startDate)}
                                    onChange={handleChange}
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
                                    name="endDate"
                                    value={formatDate(form.endDate)}
                                    onChange={handleChange}
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
                                    name="startTime"
                                    value={form.startTime}
                                    onChange={handleChange}
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
                                    name="registrationDeadline"
                                    value={formatDateTimeLocal(form.registrationDeadline)}
                                    onChange={handleChange}
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                    required
                                />
                            </div>
                        </div>
                        {/* Teams and Status */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="flex items-center text-lg font-medium text-orange-400">
                                    <FaUsers className="mr-2" />
                                    Maximum Teams
                                </label>
                                <input
                                    type="number"
                                    name="maxTeams"
                                    value={form.maxTeams}
                                    onChange={handleChange}
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
                                    name="status"
                                    value={form.status}
                                    onChange={handleChange}
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
                                name="rules"
                                value={form.rules}
                                onChange={handleChange}
                                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition min-h-[150px]"
                                placeholder="List all tournament rules and regulations..."
                                required
                            />
                        </div>
                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                            >
                                <FaSave className="text-lg" />
                                <span>Save Changes</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}