
import './App.css'
import { useState } from 'react'
import React from 'react'
import { Route,BrowserRouter,Router,Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import Home from './pages/home/home.jsx'
import Profile from './pages/profile/profile.jsx'

function App() {
 
  return(
<div>    
<BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/Profile" element={<Profile/>}/>
       </Routes>
    </BrowserRouter>
</div>
  )
}

export default App
