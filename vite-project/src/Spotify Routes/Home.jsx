import React from 'react'
import HomeStyles from "../Sass/Home.module.scss"
import NavBar from '../Components/NavBar'
import iconHome from "../images/Vector1.png"
import iconAlbum from "../images/Vector.png"
import iconRadio from "../images/Vector3.png"
import iconLogout from "../images/Vector9.png"
import iconProfile from "../images/profile.svg"
import iconVideos from "../images/videos.svg"

const Home = () => {
   return (
      <div className={HomeStyles["home"]}>
         <NavBar></NavBar>
         <div className={HomeStyles["FirstContainer"]}>
            <div className={HomeStyles["NavigateContainer"]}>
               <div className={HomeStyles["navigate-div-container"]}>
                  <img src={iconHome} alt="" />
                  <img src={iconAlbum} alt="" />
                  <img src={iconRadio} alt="" />
                  <img src={iconVideos} alt="" />
               </div>
               <div className={HomeStyles["personal-info-container"]}>
                  <img src={iconProfile} alt="" />
                  <img src={iconLogout} alt="" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home