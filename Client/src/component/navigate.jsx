import React from 'react'
import style from "./styles.module.css"
const navigate = () => {
  return (
    <div className={style.navigate}>
        <button className={style.normalNavigate}>Your Answers</button>
        <button className={style.normalNavigate}>Your Questions</button>
        <button className={style.greenNavigate}>Recent</button>
        <button className={style.normalNavigate}>Top</button>

    </div>
  )
}

export default navigate
