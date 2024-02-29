import React from 'react'
import Boot from '../assets/BOOT2.svg'
function SatrtBody() {
  return (
    <div className='mt-12 ml-[30%]'>
       <button> <img src={Boot} alt="" className='fixed ml-[45%] '/></button>
      <h1 className="text-[48px]  text-[#111827] font-['Montserrat'] font-extrabold">Contribute Thorugh <br />Your Startup</h1>
      <p className='text-[18px] text-[#64748B] mt-[24px]'>Filll in the following form with your comapny information <br />
in addition to your idea </p>
<div className='mt-[12px]'>
<h3 className="font-['Montserrat']  text-[16px]  text-[#111827]  font-[400px] ">Full Name</h3>
<input type="text" placeholder='ie. algerie telecome' className=" focus:outline-none font-['Montserrat'] text-[16px] mt-3  border-2 border-[#B5B7B9]  rounded-[8px] px-6 py-2 w-[50%]" />
<h3 className="font-['Montserrat'] text-[16px] text-[#111827]  font-[400px] mt-8">Work Email</h3>
<input type="text" placeholder='Simple@gmail.com'  className="  focus:outline-none border-2 border-[#B5B7B9]  rounded-[8px] px-6 py-2 w-[50%]font-['Montserrat'] text-[16px] mt-3 w-[50%]"/>
<h3 className='text-[16px] text-[#111827] mt-8'>Your Idea</h3>
<input type="text" className="  focus:outline-none border-2 border-[#B5B7B9]  rounded-[8px] px-6 py-2 w-[50%]font-['Montserrat'] text-[16px] mt-3 w-[50%] h-[200px] resize-none text-start "/>

    </div>
    <button className="text-white text-sm font-medium font-['Montserrat'] leading-normal px-4 py-2 bg-lime-600 rounded-md justify-center items-center gap-2.5 inline-flext mt-6 mb-24">Submit</button>

    </div>
  )
}

export default SatrtBody
