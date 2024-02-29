import React from 'react'
import style from "./styles.module.css"
import expandUp from "../assets/Expand_up.svg"
import expandDown from "../assets/Expand_down.svg"
const comment = ({commenter_Profile_pics,commentProfile,commentDate,commentContent,reach}) => {
  return (
    <div className={style.commentl}>
        <div className={style.commentHeader}>    
              <section className={style.commentList }>
            <img src={commenter_Profile_pics} className={style.commenter_Profile_pics}/> 
            <p className={style.commentProfile}>{commentProfile}</p>
            <p className={style.commentDate}>{commentDate}</p>
       </section>
       <p className={style.commentContent}>{commentContent}</p>
     </div>
     <div className={style.commentReach}>
      <p className={style.reach}>{reach}</p>
      <div className={style.buttonCommentaire}>
      <button className={style.expandUp}><img src={expandUp}></img></button>
      <button className={style.expandDown}><img src={expandDown}/></button>
      </div>
     </div>

    </div>
  )
}

export default comment
