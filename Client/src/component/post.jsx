import React from 'react'
import Styles from "./Style.module.css"
import Status from './status'
import comment from "../assets/comment.svg"
import jaime from "../assets/jaime.svg"
import menu from "../assets/menu.svg"



const post = ({profilePics,postDate,profileName,status,content}) => {
  return (
    <div className={Styles.post}>
        <section className={Styles.profileInfo}>
            <div className={Styles.container}>
            <div className={Styles.personalInfo}>
            <img src={profilePics} className={Styles.profilePics}/>
            <p>{profileName}</p>
            </div>
            <p className={Styles.postDate}>{postDate}</p>
            </div>
           <Status status={status}></Status>
           <img src={menu} className={Styles.menu}/>
        </section>
        <article className={Styles.postContent}>
            {
             content
            }

        </article>
        <div className={Styles.interaction}>
            <section className={Styles.question}>
            <button className={Styles.comment_Button}><img src={comment} className={Styles.comment}></img></button>
            <p className={Styles.Answers}>Answers</p>
            </section>
            <section className={Styles.likes}>
                <img src={jaime} className={Styles.jaime}></img>
                <p className={Styles.Answers}>Follow</p>
            </section>
        </div>
      
    </div>
  )
}

export default post
