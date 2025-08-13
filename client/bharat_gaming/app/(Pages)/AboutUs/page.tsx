import React from "react";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center py-16 px-4">
      <section className="max-w-3xl w-full text-center mb-12">
        <h1 className="text-5xl font-extrabold text-cyan-400 drop-shadow-lg mb-4">
          About Bharat Gaming
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Welcome to{" "}
          <span className="text-cyan-300 font-bold">Bharat Gaming</span> — India’s
          own gaming platform! We are passionate gamers, tournament organizers,
          and tech enthusiasts dedicated to building the best gaming community in
          the country.
        </p>
        <div className="flex justify-center gap-4 mb-4">
          <span className="inline-block px-4 py-2 bg-cyan-700 rounded-full text-sm font-semibold">
            Tournaments
          </span>
          <span className="inline-block px-4 py-2 bg-orange-600 rounded-full text-sm font-semibold">
            Community
          </span>
          <span className="inline-block px-4 py-2 bg-purple-700 rounded-full text-sm font-semibold">
            Esports
          </span>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        <div className="bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80"
            alt="Gaming Team"
            className="w-40 h-40 object-cover rounded-full border-4 border-cyan-500 mb-4"
          />
          <h2 className="text-2xl font-bold mb-2 text-cyan-300">
            Our Mission
          </h2>
          <p className="text-gray-300">
            To empower Indian gamers by providing a fair, fun, and competitive
            platform for all. We host regular tournaments, foster a vibrant
            community, and support aspiring esports athletes.
          </p>
        </div>
        <div className="bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
            alt="Esports Event"
            className="w-40 h-40 object-cover rounded-full border-4 border-orange-500 mb-4"
          />
          <h2 className="text-2xl font-bold mb-2 text-orange-300">
            Why Choose Us?
          </h2>
          <ul className="text-gray-300 list-disc list-inside text-left">
            <li>
              Exciting tournaments for popular games like BGMI, Valorant, and more
            </li>
            <li>Secure, transparent, and fair play</li>
            <li>Active Discord & social media community</li>
            <li>Prizes, recognition, and growth opportunities</li>
          </ul>
        </div>
      </section>

      <section className="mt-16 max-w-3xl w-full text-center">
        <h2 className="text-3xl font-bold text-purple-400 mb-4">Meet the Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Founder"
              className="w-24 h-24 rounded-full border-2 border-cyan-400 mb-2"
            />
            <span className="font-semibold text-cyan-300">Rohit Rajput</span>
            <span className="text-sm text-gray-400">
              Founder & Lead Developer
            </span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Community Manager"
              className="w-24 h-24 rounded-full border-2 border-orange-400 mb-2"
            />
            <span className="font-semibold text-orange-300">Priya Sharma</span>
            <span className="text-sm text-gray-400">Community Manager</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt="Tournament Admin"
              className="w-24 h-24 rounded-full border-2 border-purple-400 mb-2"
            />
            <span className="font-semibold text-purple-300">Aman Singh</span>
            <span className="text-sm text-gray-400">Tournament Admin</span>
          </div>
        </div>
      </section>

      <footer className="mt-20 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Bharat Gaming. All rights reserved.
      </footer>
    </main>
  );
}