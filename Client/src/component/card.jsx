import React from 'react'
import style from "./styles.module.css"
import person from "../assets/Ellipse 1.svg"
const card = () => {
  return (
    <div className={style.card}>
        <div className={style.into}>
      <img src={person}  className={style.personIncrd}/>
      <p className={style.name}>Ikram Kaid</p>
      </div>
      <div className={style.ranked}>
       <section className={style.AnswerCrd}>
        <p className={style.AnswerCrd2}>Answers</p>
        <p className={style.AnswerCrd3}>76</p>
       </section>
       <section className={style.PostCrd}>
        <p className={style.PostCrd2}>Post</p>
        <p className={style.PostCrd3}>53</p>
       </section>
       <section className={style.PointCrd}>
        <p className={style.PointCrd2}>Point</p>
        <p className={style.PointCrd3}>250</p>
       </section>
      </div>
    </div>
  )
}

export default card
