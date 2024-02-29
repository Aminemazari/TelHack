import React from 'react'
import style from "./profile.module.css"
import Navbar_Home_Page from '../../component/Navbar_Home_Page'
import Card from '../../component/card'
const profile = () => {
  return (
    <div className={style.profile}>
        <Navbar_Home_Page/>
         <div className={style.card}>
         <Card/>
         </div>
         <div className={style.Post}>

         </div>
      
    </div>
  )
}

export default profile
