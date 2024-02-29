  import React, { useEffect, useState } from 'react'
  import Navbar_Home_Page from '../../component/Navbar_Home_Page'
  import Styles from "./home.module.css"
  import Post from '../../component/post.jsx'
  import Comment from '../../component/comment.jsx'
  import pub1 from "../../assets/pub1.svg"
  import pub2 from "../../assets/pubs2.svg"
  import Navigate from '../../component/navigate.jsx'
  import API_URL from "../../component/API_URL.jsx"
  import boot from "../../assets/BOOT.svg"
  import Botchat from "../../component/botchat.jsx"
  const home = () => {
      const [data,setData]=useState([])
      const [isPopupVisible, setPopupVisible] = useState(false);
      const handleButtonClick = () => {
        setPopupVisible(!isPopupVisible); 
      };
    
      useEffect( () => {const response= fetch(`${API_URL}/questions`)
      .then( result => result.json() )
      .then ( result=>setData(result)) },[])
    

    return (
      <div className={Styles.home}>
        {isPopupVisible && (
          <div className={Styles.popup}>
            <Botchat/>
            
          </div>
        )}



      <button className={Styles.buttonn} onClick={handleButtonClick}> <img src={boot} className={Styles.boot}/> </button>
        <Navbar_Home_Page/>
        <div className={Styles.Navigation}>
        <Navigate/>
        </div>
        <div className={Styles.posts}>
        {
          
      data.map((data)=>{
      
              return(
              <div className={Styles.post}>

                  <Post profilePics={data.pictureUrl} postDate={data.publishDateTime} profileName={data.name} status={data.isSolved} content={data.body} />
            {
              data.answers.map((datac)=>{
                const picture=datac.user.pictureUrl;
                const name=datac.user.name;
                console.log(picture);
                return(
                    <div className={Styles.commente}>
<Comment
  commentContent={datac.body}
  commentDate={datac.publishDateTime}
  commentProfile={datac.user.name}
  commenter_Profile_pics={datac.user.pictureUrl}  
  reach={datac.score}
/>
                      </div>
                
        
                )
              })
            }
                  
                  
    
              </div>
            

              )

          }) 
      
      }
      </div>
      <a><img className={Styles.pub1} src={pub1}></img></a>
      <a><img className={Styles.pub2}src={pub2} ></img></a>
      </div>
    )
  }

  export default home
