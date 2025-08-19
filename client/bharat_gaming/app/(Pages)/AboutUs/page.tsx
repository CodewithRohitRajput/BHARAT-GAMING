import React from "react";
import Navbar from "@/(Components)/Navbar/page";
import Footer from "@/(Components)/Footer/page";
import { FaTrophy, FaGamepad, FaUsers, FaStar, FaRocket, FaShieldAlt } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
            <FaTrophy className="text-cyan-400 w-5 h-5" />
            <span className="text-cyan-300 font-semibold">About Bharat Gaming</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-400 bg-clip-text text-transparent">
            India's Premier Gaming Platform
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Welcome to <span className="text-cyan-400 font-bold">Bharat Gaming</span> — where passion meets competition. 
            We're building India's largest gaming community, connecting millions of gamers through epic tournaments, 
            fair competition, and unforgettable gaming experiences.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-full text-sm font-bold shadow-lg">
              🏆 500+ Tournaments
            </span>
            <span className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full text-sm font-bold shadow-lg">
              👥 50K+ Gamers
            </span>
            <span className="px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full text-sm font-bold shadow-lg">
              💰 ₹10L+ Prizes
            </span>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4">
                  <FaRocket className="text-white text-xl" />
                </div>
                <h2 className="text-3xl font-bold text-cyan-400">Our Mission</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To revolutionize India's gaming landscape by creating a unified platform where every gamer, 
                from casual players to professional esports athletes, can compete, grow, and achieve their dreams. 
                We're not just organizing tournaments — we're building careers and creating legends.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-purple-500/20 shadow-lg shadow-purple-500/10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <FaStar className="text-white text-xl" />
                </div>
                <h2 className="text-3xl font-bold text-purple-400">Our Vision</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To establish India as a global esports powerhouse by 2030. We envision a future where Indian gamers 
                compete at the highest international levels, backed by world-class infrastructure, 
                fair competition, and unwavering community support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Why Gamers Choose Bharat Gaming
            </h2>
            <p className="text-xl text-gray-400">The ultimate gaming experience awaits you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Fair Play Guaranteed</h3>
              <p className="text-gray-300 leading-relaxed">
                Advanced anti-cheat systems, transparent rules, and dedicated moderators ensure every match is fair and competitive.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaGamepad className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Multi-Game Platform</h3>
              <p className="text-gray-300 leading-relaxed">
                From BGMI and Valorant to Free Fire and Call of Duty — compete in your favorite games with regular tournaments.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaTrophy className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Massive Rewards</h3>
              <p className="text-gray-300 leading-relaxed">
                Win cash prizes, gaming gear, and exclusive rewards. Top performers get sponsored opportunities and career growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Meet Our Gaming Leaders
            </h2>
            <p className="text-xl text-gray-400">The passionate team behind Bharat Gaming</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-center border border-gray-700 shadow-lg">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 p-1">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Founder"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center">
                  <FaTrophy className="text-white text-sm" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">Rohit Rajput</h3>
              <p className="text-gray-400 mb-4">Founder & CEO</p>
              <p className="text-gray-300 text-sm">
                Ex-professional gamer turned entrepreneur. 8+ years in esports industry with a vision to make India a gaming superpower.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-center border border-gray-700 shadow-lg">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-purple-600 p-1">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Community Manager"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <FaUsers className="text-white text-sm" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-purple-400 mb-2">Priya Sharma</h3>
              <p className="text-gray-400 mb-4">Head of Community</p>
              <p className="text-gray-300 text-sm">
                Gaming influencer and community expert. Manages our 50K+ gamer community and ensures everyone feels at home.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-center border border-gray-700 shadow-lg">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-orange-500 to-orange-600 p-1">
                  <img
                    src="https://randomuser.me/api/portraits/men/65.jpg"
                    alt="Tournament Director"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <FaGamepad className="text-white text-sm" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-orange-400 mb-2">Aman Singh</h3>
              <p className="text-gray-400 mb-4">Tournament Director</p>
              <p className="text-gray-300 text-sm">
                Professional esports referee with 6+ years experience. Ensures fair play and manages all tournament operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Join the Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of India's fastest-growing gaming community. Compete, win, and make your mark in esports history.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
                Join Tournaments
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-cyan-500 hover:bg-cyan-500/10 rounded-lg font-bold transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}