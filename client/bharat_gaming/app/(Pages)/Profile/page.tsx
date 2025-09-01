'use client'

import { useEffect, useState } from "react"

export default function Profile() {
    const [profile, setProfile] = useState({
        username: "",
        email: ""
    });

    const [hasToken, setHasToken] = useState<boolean>(false);

    useEffect(() => {
        const fetchProfile = async () => {
            const res = await fetch(`http://localhost:5000/Userprofile`, { credentials: 'include' });
            const data = await res.json();
            setHasToken(data.token);
            setProfile({
                username: data.Profile?.username || "",
                email: data.Profile?.email || ""
            });
        }
        fetchProfile();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
            <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-orange-500 blur-xl opacity-40"></div>
                <div className="relative z-10 bg-[#18181b]/80 border border-cyan-500/30 rounded-2xl shadow-2xl p-8 flex flex-col items-center">
                    <div className="mb-6 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 flex items-center justify-center shadow-lg border-4 border-orange-400/40 mb-2">
                            <span className="text-4xl text-white font-bold drop-shadow-lg">
                                {profile.username ? profile.username[0].toUpperCase() : "?"}
                            </span>
                        </div>
                        <h2 className="text-2xl font-bold text-orange-400 drop-shadow mb-1"> {profile.username}'s Profile</h2>
                        <p className="text-sm text-cyan-300">Welcome to Bharat Gaming!</p>
                    </div>
                    {hasToken ? (
                        <div className="w-full space-y-4">
                            <div className="flex items-center gap-3 bg-cyan-900/40 rounded-lg px-4 py-2">
                                <span className="text-cyan-400 font-semibold">Username:</span>
                                <span className="text-white font-mono">{profile.username}</span>
                            </div>
                            <div className="flex items-center gap-3 bg-purple-900/40 rounded-lg px-4 py-2">
                                <span className="text-purple-400 font-semibold">Email:</span>
                                <span className="text-white font-mono">{profile.email}</span>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-8">
                            <svg className="w-12 h-12 text-orange-400 mb-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2zm0 0v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                            </svg>
                            <h2 className="text-xl font-bold text-orange-400 mb-2">Please login first!</h2>
                            <p className="text-gray-300 text-center">Log in to unlock your gaming profile and stats.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}