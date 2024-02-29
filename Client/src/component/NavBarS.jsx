import React from 'react'
import AlgerieTel from '../assets/Algerie.png'
import Search from '../assets/Search.svg'

function NavBarS() {
  return (
    <div className='flex justify-between p-4 items-center '>
      <div>
        <img src={AlgerieTel} alt="" />
      </div>
      <div>
            <ul className='flex justify-between items-center gap-x-8 text-[#023E7D] text-[14px] font-[500px]'>
                <li>Internet</li>
                <li>Products</li>
                <li>Services</li>
            </ul>
      </div>
      <div>
        <input type="text" placeholder='Search' className='focus:outline-none border-2 border-[#B5B7B9] rounded-[54px] px-6 py-2' />
      </div>
      <div className='flex gap-x-4'>
      <button className="text-slate-900 text-sm font-medium font-['Montserrat'] leading-normal">
                    Sign up
                </button>
                <button className="text-white text-sm font-medium font-['Montserrat'] leading-normal px-4 py-2 bg-lime-600 rounded-md justify-center items-center gap-2.5 inline-flex ">
                    Log in
                </button>
      </div>
    </div>
  )
}

export default NavBarS
