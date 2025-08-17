'use client'

import { useState, useEffect } from "react";
import Navbar from "@/(Components)/Navbar/page";
import Footer from "@/(Components)/Footer/page";
import './page.css'
import { useParams } from "next/navigation";

export default function Team() {
  const {id} = useParams();
  const [teamname, setTeamname] = useState<string>('');
  const [captain, setCaptain] = useState<string>('');
  // const[mounted , setMounted] = useState(false)
  const [members, setMembers] = useState<string[]>([]);
  const [memberInput, setMemberInput] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const MAX_MEMBERS = 3; // Captain + 3 members = 4 total

//   useEffect(()=>{
    
// })

  const addMember = () => {
    if (members.length >= MAX_MEMBERS) {
      setError(`Maximum ${MAX_MEMBERS + 1} members allowed (including captain)`);
      return;
    }

    if (!memberInput.trim()) {
      setError("Please enter a valid member ID");
      return;
    }

    if (members.includes(memberInput) || memberInput === captain) {
      setError("Duplicate member ID detected");
      return;
    }

    setMembers(prev => [...prev, memberInput]);
    setMemberInput('');
    setError('');
  };

  const removeMember = (index: number) => {
    setMembers(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!captain) {
      setError("Captain ID is required");
      return;
    }

    // if (members.length < 1) {
    //   setError("At least 1 member is required");
    //   return;
    // }

    try {
      const response = await fetch(`http://localhost:5000/team/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials : 'include',
        body: JSON.stringify({ 
          teamname, 
          captain, 
          members: [captain, ...members] // Include captain in members list
        })
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      setSuccess("Team registered successfully!");
      setTeamname('');
      setCaptain('');
      setMembers([]);
    } catch (err) {
      setError(err.message || "Failed to register team");
    }
  };

  // Clear messages after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setError('');
      setSuccess('');
    }, 5000);
    return () => clearTimeout(timer);
  }, [error, success]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-24 pb-32 px-4">
        <div className="card w-full max-w-md">
          <div className="w-full p-6">
            <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Team Registration
            </h2>
            
            {error && (
              <div className="mb-4 p-3 bg-red-900/80 border border-red-500 rounded-lg text-sm">
                {error}
              </div>
            )}
            
            {success && (
              <div className="mb-4 p-3 bg-green-900/80 border border-green-500 rounded-lg text-sm">
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-cyan-300 mb-1">Team Name</label>
                <input
                  type="text"
                  placeholder="Enter team name"
                  value={teamname}
                  onChange={(e) => setTeamname(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-900/70 text-white border border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-orange-300 mb-1">Captain ID</label>
                <input
                  type="text"
                  placeholder="Captain's Game ID"
                  value={captain}
                  onChange={(e) => setCaptain(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-900/70 text-white border border-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-purple-300 mb-1">
                  Members ({members.length}/{MAX_MEMBERS})
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Member's Game ID"
                    value={memberInput}
                    onChange={(e) => setMemberInput(e.target.value)}
                    disabled={members.length >= MAX_MEMBERS}
                    className="flex-1 px-4 py-2 rounded-lg bg-gray-900/70 text-white border border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 disabled:opacity-50"
                  />
                  <button
                    type="button"
                    onClick={addMember}
                    disabled={members.length >= MAX_MEMBERS}
                    className="px-4 py-2 bg-purple-700/80 text-white rounded-lg font-medium hover:bg-purple-600/80 transition disabled:opacity-50"
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-3 border border-cyan-700/50">
                <h3 className="text-sm font-semibold text-cyan-300 mb-2">Team Members: ({members.length + (captain ? 1 : 0)}/4)</h3>
                <div className="space-y-2">
                  {/* Captain is always first member */}
                  {captain && (
                    <div className="flex items-center justify-between px-3 py-1 bg-cyan-900/50 rounded-full">
                      <span className="text-sm">👑 {captain} (Captain)</span>
                    </div>
                  )}
                  
                  {/* Regular members */}
                  {members.map((member, i) => (
                    <div key={i} className="flex items-center justify-between px-3 py-1 bg-purple-900/50 rounded-full">
                      <span className="text-sm">👤 {member}</span>
                      <button
                        type="button"
                        onClick={() => removeMember(i)}
                        className="text-xs text-red-400 hover:text-red-300"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>        
              <div className="w-full flex justify-center items-center">


             <button type="submit" className="animated-button">
  <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
      ></path>
  </svg>
  <span className="text">Register </span>
  <span className="circle"></span>
  <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
      ></path>
  </svg>
</button>
<br /><br />


      </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}