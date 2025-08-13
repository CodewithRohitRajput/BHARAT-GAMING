'use client'

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/(Components)/Navbar/page";
import Footer from "@/(Components)/Footer/page";
import Link from "next/link";
// import './page.css'


export default function Team(){
    const[teamname , setTeamname] = useState<string>('');
    const[captain , setTeamCaptain] = useState<number>(0);
    const[members , setMembers] = useState<number[]>([]);
    const[membersInput , setMembersInput] = useState<string>('');

    const addMember  = async () =>{
        if(membersInput.trim() !== ''){
            setMembers(prev => [...prev , Number(membersInput)])
            setMembersInput('')
        }
    }   

    const handleSubmit = async (e : any) => {
            e.preventDefault();

            const submitTeam = await fetch('http://localhost:5000/team' , {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({teamname , captain , members})
            })
            setTeamname('');
            setTeamCaptain(0);
            setMembersInput(''); 
            setMembers([]);

    }


    return (
        <div>
            <Navbar/>
            <div className="mt-20">
            <h1>Team Registration</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Team Name" value={teamname}  onChange={e=>setTeamname(e.target.value)} />

                    <input type="number" placeholder="Team Caption Game-Id" value={captain}  onChange={e=>setTeamCaptain(Number(e.target.value))} />

                    <input type="number" placeholder="Team Members Id " value={membersInput}  onChange={e=>setMembersInput(e.target.value)} />

                    <button type="button" onClick={addMember}>
                        Add member
                    </button>

                    <h3>Current Members:</h3>
                  <p>{members.join(',')}</p>
                  <div>
                    <button type="submit">

                    Pay $100
                    </button>
                  </div>
                </form>
            </div>
            <div className="mb-0 flex justify-end items-end">
            <Footer/>
            </div>
        </div>
    )
}