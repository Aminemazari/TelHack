import person1 from "../assets/person1.svg"
import person2 from "../assets/person2.svg"
import person3 from "../assets/person3.svg"
import person4 from "../assets/person4.svg"
import { useState } from "react"

const add_reach = (id)=>{
    const [reach,setReach]=useState(0);
     commenter.map((commenter)=>{
        if (id == commenter.id){
            setReach(commenetr.reach);
        }
     })
}
const commenter = [
    {
        id:"03",
        idcommented:"04",
        commenter_Profile_pics:person1,
        commentProfile: "Akram",
        commentDate:"2min",
        commentContent:"Download those files to emprove it ",
        reach:100,
    },{
    id:"04",
    idcommented:"04",
    commenter_Profile_pics:person2,
    commentProfile: "Amine",
    commentDate:"10min",
    commentContent:"contact me! ",
    reach:100,
}

]
export default commenter