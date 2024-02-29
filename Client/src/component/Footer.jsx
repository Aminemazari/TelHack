import React from 'react'
import Logo from '../assets/LogoB.png'
import Social from '../assets/social.svg'

function Footer() {
  return (
    <div>
    <div className="flex bg-[#023E7D] justify-around pt-12 pb-4">
      <div>
        <img src={Logo} alt="" />
        <img src={Social} alt="" className='mt-12' />
      </div>
      <div className="flex flex-col-3 gap-x-20 text-white font-['Montserrat'] ">
            <div>
                <ul>
                    <li className='text-[24px] font-[700px]'>Explore</li>
                    <li className ="text-[16px] mt-4">Internet offers</li>
                    <li className ="text-[16px] mt-4">Services</li>
                    <li className ="text-[16px] mt-4">Net locator</li>
                    <li className ="text-[16px] mt-4">Products</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='text-[24px] font-[700px]'>Innovate</li>
                    <li className ="text-[16px] mt-4">Startup</li>
                    <li className ="text-[16px] mt-4">Web hosting</li>
                    <li className ="text-[16px] mt-4">Consultation notices</li>
                    <li className ="text-[16px] mt-4">Forms</li>
                </ul>

            </div>
            <div>
                <ul>
                    <li className='text-[24px] font-[700px]'>About</li>
                    <li className ="text-[16px] mt-4">Who we are</li>
                    <li className ="text-[16px] mt-4">Community</li>
                    <li className ="text-[16px] mt-4">Support</li>
                    <li className ="text-[16px] mt-4">Terms of service</li>
                </ul>
                
            </div>
      </div>
      
    </div>
    <div className='bg-white block w-full'>
    <h3 className='ml-32 py-[8px]  text-[16px] text-[#023E7D] '>All Rights Reserved</h3></div>
    </div>
  )
}

export default Footer
