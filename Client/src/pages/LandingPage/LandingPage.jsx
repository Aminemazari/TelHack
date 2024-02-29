import React from 'react'
import NavBar from '../../component/NavBar'
import Hero from '../../component/Hero'
import Community from '../../component/Community'
import StartUp from '../../component/StartUp'
import Footer from '../../component/Footer'
import BootPresentation from '../../component/BootPresentation'
import Maps from '../../component/Maps'
function LandingPage() {  
  return (
    <div className='bg-[#F1F5F9]'>
      
      <NavBar/> 
      <Hero/>
      <Community/>
      <Maps/>
      <BootPresentation/>
      <StartUp/>
      
      <Footer/>
    </div>
  )
}

export default LandingPage
