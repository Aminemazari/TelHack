import React from 'react'
import style from "./styles.module.css"
import logo from "../assets/bootchatlogo.svg"
const botchat = () => {
  return (
    <div className={style.chatboot}>
        <div className={style.bootfeat}>
         <img src={logo} className={style.botlogo}/>
         <div className={style.hadra}>
            <p className={style.chat}>Chatbot</p>
            <p className={style.support}>Support Agent</p>
         </div>
        </div>
        <div className={style.welcome}>
            <p className={style.welcoming}>welcome To AI Telecome Bot. Ask or post any problem and I will answer you as much as possible</p>
            <p className={style.welcoming2}>Welcome</p>
            <p className={style.welcoming3}>I am facing a problem</p>


        </div>
        <input placeHolder='Write a messge'/> 
      
    </div>
  )
}

export default botchat
