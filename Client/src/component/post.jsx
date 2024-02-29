import React from 'react'
import Styles from "./styles.module.css"
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
            <div className={Styles.info_of_the_statu}>
           <Status status={status}></Status>
           <button className={Styles.menu_button}><img src={menu} className={Styles.menu}/></button>
           </div>
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
            <button className={Styles.comment_Button}> <img src={jaime} className={Styles.jaime}></img></button>
                <p className={Styles.Answers}>Like</p>
            </section>
        </div>
      
    </div>
  )
}

export default post
