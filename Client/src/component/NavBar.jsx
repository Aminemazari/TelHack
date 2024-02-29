import React from 'react'
import AlgerieTel from '../assets/Algerie.png'

import { useNavigate } from 'react-router-dom'
function NavBar() {
  const Navigate= useNavigate("");
  const clickhandler=()=>{
    Navigate("/home");
  }
  return (
    <div className='p-4 bg-white' >
      <ul className='flex justify-between items-center'>
        <div>
            
                <img src={AlgerieTel} alt="" />
        </div>
        <div>
          
                <ul className="flex gap-x-6 font-['Montserrat'] leading-tight text-sky-900 ">
                    <li>Internet</li>
                    <li>Products</li>
                    <li>Services</li>
                </ul>
        </div>
        <div className='flex gap-x-6'>
                <button className="text-slate-900 text-sm font-medium font-['Montserrat'] leading-normal" onClick={clickhandler}>
                    Sign up
                </button>
                <button className="text-white text-sm font-medium font-['Montserrat'] leading-normal px-4 py-2 bg-lime-600 rounded-md justify-center items-center gap-2.5 inline-flex " onClick={clickhandler}>
                    Log in
                </button>
        </div>
      </ul>
    </div>
  )
}

export default NavBar
