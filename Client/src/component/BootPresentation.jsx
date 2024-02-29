import React from 'react'
import Boot from '../assets/Boot.svg'

function BootPresentation() {
  return (
    <div className='bg-[#023E7D] mx-auto'>
      <h1 className="text-center text-white text-5xl font-extrabold font-['Montserrat'] pt-12">Interact With Our AI <br /> Powered BOT</h1>
      <button className="text-white text-sm font-medium font-['Montserrat'] leading-normal px-5 py-4 bg-lime-600 rounded-md justify-center items-center gap-2.5 inline-flex ml-[46%] mt-8">GET STARTED</button>
      <img src={Boot} alt="" className='mx-auto mt-12' />
    </div>
  )
}

export default BootPresentation
