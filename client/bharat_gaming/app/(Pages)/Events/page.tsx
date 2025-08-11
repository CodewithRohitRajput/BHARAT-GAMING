import React from "react";
import './page.css';
import Navbar from "@/(Components)/Navbar/page";
import Footer from "@/(Components)/Footer/page";
import Link from "next/link";
export default async function Events() {
  const res = await fetch('http://localhost:5000/Tournament/get', {
    cache: 'no-store',
  });

  const { allTournaments }: { allTournaments: any[] } = await res.json();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="mt-28 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          {allTournaments.reverse().map((d) => (
            <div className="card w-full max-w-xs" key={d._id}>
              <ul className="w-full">
                <li className="text-cyan-500 text-lg font-bold text-center -translate-y-8 ">
                  {d.tournamentname}
                </li>

                <li className="text-start text-cyan-200 font-mono -translate-y-5 ml-4">
                  Game: <span>{d.game}</span>
                </li>

                <li className="-translate-y-4 text-start text-cyan-200 font-mono ml-4">
                  Date: {new Date(d.startDate).toLocaleDateString()}
                </li>

                <li className="text-start -translate-y-3 text-cyan-200 font-mono ml-4" >
                  Time: {d.startTime}
                </li>

                <li className="text-start -translate-y-2 text-cyan-200 font-mono ml-4">
                  Win Prize: {d.prize}
                </li>

                <div className="flex w-full justify-center">
                  <li className="translate-y-4 bg-cyan-200 w-24 text-black rounded-xl animate-pulse font-semibold px-2 text-center font-mono">
                    {d.status}
                  </li>
                </div>  
                <div className="w-full flex justify-center translate-y-8">
                <Link href={`/Events/${d._id}`}>
                 <button>
    JOIN
    <div id="clip">
        <div id="leftTop" className="corner"></div>
        <div id="rightBottom" className="corner"></div>
        <div id="rightTop" className="corner"></div>
        <div id="leftBottom" className="corner"></div>
    </div>
    <span id="rightArrow" className="arrow"></span>
    <span id="leftArrow" className="arrow"></span>
</button>
                </Link>
                </div>
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}
