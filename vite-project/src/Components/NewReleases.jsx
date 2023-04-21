import AuthContext from "../Context/Context"
import { useContext } from "react"
import Styled from "../Sass/Api.module.scss"
import { useState, useEffect } from "react"

const NewReleases = () => {
   const ctx = useContext(AuthContext)
   return (
      <>
         <h1 className={Styled["newReleases"]}>New Releases.</h1>
         <div className={Styled["image-wrapper"]}>
            {ctx?.items?.map((item) => {
               return (
                  <div className={Styled["image-wrapper-child"]} >
                     {item?.track?.album?.images.map((url) => {
                        return <div className={Styled['image']}>
                           {url.height === 300 ? <img src={url.url} alt="" /> : null}
                        </div>
                     })}
                  </div>
               )
            })}
         </div>
      </>
   )
}


export default NewReleases