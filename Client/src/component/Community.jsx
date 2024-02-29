import React from 'react'
import Cards from '../assets/Cards.svg'

function Community() {
  return (
    <div className='bg-[#023E7D] pb-12 flex gap-x-[150px]'>
      <div className='pl-24'>
      <h1 className="text-5xl font-extrabold font-['Montserrat'] text-white pt-40 ">Be a Part of our <br/> Community</h1>
      <p className="text-opacity-60 text-lg font-semibold font-['Montserrat'] text-white items-center mt-8">Engage and discuss with fellow <br />community members about your <br />concerns. Share your  problems,  <br />provide solutions, and earn <br /> exciting rewards</p>
      <button className="px-4 py-2 bg-lime-600 rounded-md justify-center items-center gap-2.5 text-white text-sm font-medium font-['Montserrat'] leading-normal  mt-20">LEARN MORE</button>
      </div>
      <div className=''>
        
      <div className=' mt-28 pb-12'>
      <img src={Cards} alt="" />
      </div>
      </div>
    </div>
    
  )
}

export default Community
