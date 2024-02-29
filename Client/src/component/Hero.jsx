import React from 'react'
import Man from '../assets/Man.jpg'

function Hero() {
  return (
    <div className='flex'>
      <h1 className=" text-slate-900 text-[64px] font-extrabold font-['Montserrat'] pt-4">Toujours plus Proche</h1>
      <img src={Man} alt="" />
    </div>
  )
}

export default Hero
