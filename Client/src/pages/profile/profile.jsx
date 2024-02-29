import React from 'react'
import style from "./profile.module.css"
import Navbar_Home_Page from '../../component/Navbar_Home_Page'
import Card from '../../component/card'
import data from "../../data/data.jsx"
import Post from '../../component/post.jsx'
const profile = () => {
  return (
    <div className={style.profile}>
        <Navbar_Home_Page/>
         <div className={style.card}>
         <Card/>
         </div>
         <div className={style.Post}>
          
{
  data.map((data) => (
    <div className={style.fix}>
    <Post
      profilePics={data.profilePics}
      postDate={data.postDate}
      profileName={data.profileName}
      status={data.status}
      content={data.content}
    />
     </div>
  ))
}
          

         </div>
      
    </div>
  )
}

export default profile
