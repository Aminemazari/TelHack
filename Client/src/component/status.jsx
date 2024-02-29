import React from 'react'
import Styles from "./Style.module.css"
import valid from "../assets/valid.svg"
import NotValid from "../assets/notValid.svg"
const status = ({status}) => {
    if (status="solved"){
    return (
        <button className={Styles.solved}>solved<img src={valid} className={Styles.valid_img}></img></button>
    )
    }
    else{
        return (
            <button className={Styles.not_solved}>open<img src={NotValid} className={Styles.not_valid_img}></img></button>
            )
    }

}

export default status
