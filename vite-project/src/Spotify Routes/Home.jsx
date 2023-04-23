import React, { useState, useContext } from 'react'
import HomeStyles from "../Sass/Home.module.scss"
import { motion } from "framer-motion"
import NavBar from '../Components/NavBar'
import iconHome from "../images/Vector1.png"
import iconAlbum from "../images/Vector.png"
import iconRadio from "../images/Vector3.png"
import iconLogout from "../images/Vector9.png"
import iconProfile from "../images/profile.svg"
import iconVideos from "../images/videos.svg"
import SlantingImage from "../images/Vector.svg"
import bgIMAGE from "../images/Pexels Photo by Eric Esma.png"
import Love from "../images/Vector120.png"
import Ellipse from "../images/Ellipse 2.png"
import Rectangle14 from "../images/Rectangle 14.png"
import transparentLove from "../images/Stroke-1.png"
import NewReleases from '../Components/NewReleases'
import SearchApi from '../Components/SearchApi'



const Home = () => {

   const [truthy, setTruthy] = useState(true)

   const toggleTruthy = () => {
      setTruthy(!truthy)
   }


   return (
      <div className={HomeStyles["home"]}>
         <NavBar toggleTruthy={toggleTruthy}></NavBar>

         <div className={HomeStyles["FirstContainer"]}>

            {truthy && <motion.div className={HomeStyles['motion']}
               animate={{ y: 20 }}
               transition={{ type: "tween", stiffness: 50 }}
            ><div className={HomeStyles["NavigateContainer"]}>
                  <div className={HomeStyles["navigate-div-container"]}>
                     <div className={HomeStyles['img']}>
                        <img className={HomeStyles['home-img']} src={iconHome} alt="" />
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

               </div></motion.div>}


            <div className={HomeStyles["secondContainer"]}>
               <div className={HomeStyles["textContainer"]}>
                  <h4>Currated playlist</h4>
                  <div className={HomeStyles["align-container"]}>
                     <h1>R & B Hits</h1>
                     <p>All mine, Lie again, Petty call me everyday,
                        Out of time, No love, Bad habit,
                        and so much more</p>
                  </div>
                  <div className={HomeStyles["imgEllipse"]}>
                     <div className={HomeStyles["Ellipse"]}>
                        <img src={Ellipse} alt="" />
                        <img src={Ellipse} alt="" />
                        <img src={Ellipse} alt="" />
                        <img src={Ellipse} alt="" />
                     </div>
                     <div className={HomeStyles["love"]}>
                        <img src={Love} alt="" />
                        <h5>33k Likes</h5>
                     </div>
                  </div>
               </div>
               <div className={HomeStyles["imgCont"]}>
                  <img className={HomeStyles['imgCont-img']} src={SlantingImage} alt="" />
                  <img className={HomeStyles['bgIMAGE']} src={bgIMAGE} alt="" />
               </div>
            </div>

            <div className={HomeStyles["thirdContainer"]}>
               <h1>Top Charts</h1>

               <div className={HomeStyles['allFavContainer']}>

                  <div className={HomeStyles["FavoriteContainer"]}>
                     <div className={HomeStyles["thirdContaner-img"]}>
                        <img src={Rectangle14} alt="" />
                     </div>
                     <div className={HomeStyles["thirdContainer-text"]}>
                        <h1>Golden age of 80s</h1>
                        <div className={HomeStyles["textContainer-div"]}>
                           <p>Sean swadder</p>
                           <small>2:34:45</small>
                        </div>
                     </div>
                     <div className={HomeStyles["thirdContainer-typo"]}>
                        <img src={transparentLove} alt="" />
                     </div>
                  </div>
                  {/* div no 2 */}
                  <div className={HomeStyles["FavoriteContainer"]}>
                     <div className={HomeStyles["thirdContaner-img"]}>
                        <img src={Rectangle14} alt="" />
                     </div>
                     <div className={HomeStyles["thirdContainer-text"]}>
                        <h1>Golden age of 80s</h1>
                        <div className={HomeStyles["textContainer-div"]}>
                           <p>Sean swadder</p>
                           <small>2:34:45</small>
                        </div>
                     </div>
                     <div className={HomeStyles["thirdContainer-typo"]}>
                        <img src={transparentLove} alt="" />
                     </div>
                  </div>

                  {/* div no 3 */}
                  <div className={HomeStyles["FavoriteContainer"]}>
                     <div className={HomeStyles["thirdContaner-img"]}>
                        <img src={Rectangle14} alt="" />
                     </div>
                     <div className={HomeStyles["thirdContainer-text"]}>
                        <h1>Golden age of 80s</h1>
                        <div className={HomeStyles["textContainer-div"]}>
                           <p>Sean swadder</p>
                           <small>2:34:45</small>
                        </div>
                     </div>
                     <div className={HomeStyles["thirdContainer-typo"]}>
                        <img src={transparentLove} alt="" />
                     </div>
                  </div>

               </div>

               {/* end of allFavContainer div */}
            </div>
         </div>
         <NewReleases></NewReleases>
         <SearchApi></SearchApi>
      </div>
   )
}

export default Home