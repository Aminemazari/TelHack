import React from 'react'
import Styles from "./styles.module.css"
import logo from "../assets/Algerie.png"
import profilePics from  "../assets/Ellipse 1.svg"
import NavBar_Button from './navBar_button'
import { useNavigate } from 'react-router-dom'

const Navbar_Home_Page = () => {
  const Navigate = useNavigate("");
  const clickHandler=()=>{
    Navigate("/profile");
  }
  return (
    <div className={Styles.navBar}>
             <img src={logo} className={Styles.logo}/>
             <section className={Styles.features}>
                <NavBar_Button texte={"Internet"}></NavBar_Button>
                <NavBar_Button texte={"Products"}></NavBar_Button>
                <NavBar_Button texte={"Services"}></NavBar_Button>
             </section>
            <button className={Styles} onClick={clickHandler}>
              <img className={Styles.profilePics} src={profilePics}></img>
              </button> 

    </div>
  )
}

export default Navbar_Home_Page
