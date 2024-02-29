import React from 'react'
import Map from '../assets/Maps.svg'

function Maps() {
  return (
    <div >
      <h1 className=" ml-[25%] font-extrabold text-[48px] text-[#1F2937] font-['Montserrat'] ">Explore Our <span className='text-[#2740CD]'>NetLocation</span> Tool</h1>
      <p className='text-[18px] mt-4 ml-[35%] text-[#94A3B8] font-[600px]'>Be knowledgeable with connection for the places you visits</p>
      <div className='flex gap-x-4 mt-6'>
        <input type="text" placeholder='Oran - Belkaid - Mediternaian Olympic Vilage'  className="px-4 py-2 w-[35%] rounded-md ml-[28%]" />
        <button className="text-white text-sm font-medium font-['Montserrat'] leading-normal px-4 py-2 bg-lime-600 rounded-md justify-center items-center gap-2.5 inline-flex ">
                    GET STARTED
                </button>
      </div>
      <img src={Map} alt="" className='ml-[15%] mt-6 rounded-md ' />
    </div>
  )
}

export default Maps
