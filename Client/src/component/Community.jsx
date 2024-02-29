import React from 'react'
import Moha from '../assets/Moha.svg'
import Akram from '../assets/akram.svg'
import Houdaifa from '../assets/Houdaifa.svg'
import Green from '../assets/Green.svg'
function Community() {
  return (
    <div className=' '>
      <h1 className="text-5xl font-extrabold font-['Montserrat'] text-[#111827] pt-40 pl-8">Be a Part of our <br/> Community</h1>
      <div className=''>
        <div className=''>
      <img src={Green} alt=""  className=' ml-[30%] mx-auto absolute '/>
      </div>
      <div className='flex gap-x-6 relative z-10 '>
      <img src={Moha} alt="" className='mt-12 ml-48' />
      <div className='mt-8'>
      <img src={Akram} alt="" className=''/>
      <img src={Houdaifa} alt=""  className='mt-12'/>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Community
