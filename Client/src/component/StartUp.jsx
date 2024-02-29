import React from 'react'
import StarUp from '../assets/StarUp.png'

import { useNavigate } from 'react-router-dom'
function StartUp() {
  const Navigate= useNavigate("");
  const clickhandler=()=>{
    Navigate("/startup");
  }
  return (
    <div className='flex justify-between '>
      <div className=''>
        <h1 className="text-5xl font-extrabold font-['Montserrat'] capitalize text-[#111827] pt-24 pl-24">Contribute thorugh <br />your startup</h1>
        <p className="text-slate-500 text-lg font-semibold font-['Montserrat'] mt-24 ml-24">Sare your startup idea in to <br />develop our platofrme </p>
        <button className="px-4 py-2 bg-lime-600 rounded-md justify-center items-center gap-2.5 text-white text-sm font-medium font-['Montserrat'] leading-normal ml-24 mt-20 " onClick={clickhandler}> Get Started</button>
      </div>
      <div className=''>
         <img src={StarUp} alt="" />
      </div>
    </div>
  )
}

export default StartUp
