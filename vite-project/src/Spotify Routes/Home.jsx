import React from 'react'
import HomeStyles from "../Sass/Home.module.scss"
import NavBar from '../Components/NavBar'
import iconHome from "../images/Vector1.png"
import iconAlbum from "../images/Vector.png"
import iconRadio from "../images/Vector3.png"

const Home = () => {
   return (
      <div className={HomeStyles["home"]}>
         <NavBar></NavBar>
         <div className={HomeStyles["FirstContainer"]}>
            <div className={HomeStyles["NavigateContainer"]}>
               <img src={iconHome} alt="" />
               <img src={iconAlbum} alt="" />
               <img src={iconRadio} alt="" />
            </div>
         </div>
      </div>
   )
}

export default Home