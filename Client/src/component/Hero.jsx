import React from 'react'
import Man from '../assets/Man.svg'
import Box from '../assets/Box.svg'

function Hero() {
  return (
    <div className='flex relative '>
        <div>
      <h1 className=" text-slate-900 text-[64px] font-extrabold font-['Montserrat'] pl-28 pt-12">Always Closer</h1>
      <button className="px-4 py-2 bg-lime-600 rounded-md justify-center items-center gap-2.5 text-white text-sm font-medium font-['Montserrat'] leading-normal ml-28 mt-20">LEARN MORE</button>
      </div>
      <img src={Man} alt=""  className=''/>
       <img src={Box} alt=""  className='absolute mt-[450px] ml-40' />
</div>
    
  
  )
}

export default Hero
