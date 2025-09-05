'use client'

import { useState } from "react"
import './page.css'
import { API_BASE } from "@/utils/api";
import Link from "next/link";
export default  function Signup() {
    const[username , setUsername] = useState<string>("");
    const[email , setEmail] = useState<string>("");
    const[password , setPassword] = useState<string | number>("");
    const[role , setRole] = useState<string>("user");

    const handleSubmit = async (e : any) => {
        e.preventDefault();
        const response = await fetch(`${API_BASE}/signup` , {method : 'POST' , 
            headers : {
                
             'Content-Type' :  'application/json'
            
            },
            credentials : "include",
            body : JSON.stringify({username , email , password , role})
    })
    setUsername("");
    setEmail("");
    setPassword("");
    window.location.href = '/'

    const data = await response.json();
    console.log(data);
    }

    return(
        // <div>
        //     <div>
        //         <h1>Signup</h1>
        //         <div>
        //             <form>
        //                 <input type="text" placeholder="UserName" value={username} onChange={e=>SetUsername(e.target.value)} />

        //                 <input type="Email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />

        //                 <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />

        //                     <button type="submit" onClick={handleSubmit} >
        //                         Signup
        //                     </button>

        //             </form>
        //         </div>
        //     </div>
        // </div>

           <div>


        <div className="glitch-form-wrapper flex flex-col ">
            <h1>
                BHARAT E-SPORTS
            </h1>
  <form className="glitch-card"  >
    <div className="card-header">
      <div className="card-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
          <path
            d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
            ></path>
          <path
            d="M12 11.5a3 3 0 0 0 -3 2.824v1.176a3 3 0 0 0 6 0v-1.176a3 3 0 0 0 -3 -2.824z"
            ></path>
        </svg>
        <span>SIGNUP</span>
      </div>

      <div className="card-dots"><span></span><span></span><span></span></div>
    </div>

    <div className="card-body">

        <div className="form-group">
        <input
          type="text"
          id="username"
          name="username"
          required
          //   placeholder="Email"
          value={username}
          onChange={e=>setUsername(e.target.value)}
          />
        <label id="USERNAME" className="form-label" data-text="USERNAME"
          >USERNAME</label>
      </div>


      <div className="form-group">
        <input
          type="text"
          id="email"
          name="email"
          required
          //   placeholder="Email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          />
        <label id="E-MAIL" className="form-label" data-text="E-MAIL"
          >E-MAIL</label>
      </div>

      <div className="form-group">
        <input
          type="password"
          id="password"
          name="password"
          required
          //   placeholder="Password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />
        <label id="password" className="form-label" data-text="password"
          >PASSWORD</label>
      </div>

      <button data-text="SIGNUP" type="submit" onClick={handleSubmit} className="submit-btn">
        <span className="btn-text">SIGNUP</span>
      </button>
    </div>
    <h1 className="text-center mt-5 mb-4" >Do not have an account? <Link href='/Login'> <span className="text-cyan-500 animate-pulse" > Login </span> </Link>  </h1>
  </form>
</div>


          </div>
    )

}