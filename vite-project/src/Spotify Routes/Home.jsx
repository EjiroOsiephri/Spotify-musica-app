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
                  <div className={HomeStyles['img']}>
                     <img src={iconHome} alt="" />
                     <h4>Home</h4>
                  </div>
                  <div className={HomeStyles['img']}>
                     <img src={iconAlbum} alt="" />
                     <h4>My Collections</h4>
                  </div>
                  <div className={HomeStyles['img']}>
                     <img src={iconRadio} alt="" />
                     <h4>Radio</h4>
                  </div>
                  <div className={HomeStyles['img']}>
                     <img src={iconVideos} alt="" />
                     <h4>Music Videos</h4>
                  </div>
               </div>
               <div className={HomeStyles["personal-info-container"]}>
                  <div className={HomeStyles["img"]}>
                     <img src={iconProfile} alt="" />
                     <h4>Profile</h4>
                  </div>
                  <div className={HomeStyles["img"]}>
                     <img src={iconLogout} alt="" />
                     <h4>Logout</h4>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home