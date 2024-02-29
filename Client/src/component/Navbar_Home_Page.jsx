import React from 'react'
import Styles from "./styles.module.css"
import logo from "../assets/Algerie.png"
import profilePics from  "./assets/Ellipse 1.svg"
import NavBar_Button from './navBar_button'

const Navbar_Home_Page = () => {
  return (
    <div className={Styles.navBar}>
             <img src={logo} className={Styles.logo}/>
             <section className={Styles.features}>
                <NavBar_Button texte={"Internet"}></NavBar_Button>
                <NavBar_Button texte={"Products"}></NavBar_Button>
                <NavBar_Button texte={"Services"}></NavBar_Button>
             </section>
             <img className={Styles.profilePics} src={profilePics}></img>

    </div>
  )
}

export default Navbar_Home_Page
