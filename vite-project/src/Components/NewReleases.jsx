import AuthContext from "../Context/Context"
import { useContext, useEffect } from "react"
import Styled from "../Sass/Api.module.scss"
import { useState } from "react"
import AudioFiles from "../audio/AudioFiles"

const NewReleases = () => {
   const ctx = useContext(AuthContext);
   const [selectedItem, setSelectedItem] = useState(null);
   const [music, setMusic] = useState()

   const handleImageClick = (item) => {
      setSelectedItem(item);
      setMusic(item?.track?.preview_url);
   };

   // useEffect(() => {
   //    setMusic(selectedItem?.track?.preview_url);
   // }, [selectedItem])


   return (
      <>
         <h1 className={Styled["newReleases"]}>New Releases.</h1>
         <div className={Styled["image-wrapper"]}>
            {ctx?.data?.items?.map((item) => {
               return (
                  <div className={Styled["image-wrapper-child"]} onClick={() => handleImageClick(item)}>
                     {item?.track?.album?.images.map((url) => {
                        return (
                           <div className={Styled["image"]}>
                              {url.height === 300 ? <img src={url.url} alt="" /> : null}
                           </div>
                        );
                     })}
                     {item?.track?.album?.artists.map((name) => {
                        return (
                           <div>
                              <h4 className={Styled["albumh4"]}>{name.name}</h4>
                              <h3 className={Styled["albumh3"]}>{item?.track?.name}</h3>
                           </div>
                        );
                     })}
                  </div>
               );
            })}
         </div>
         <AudioFiles key={music} music={music}></AudioFiles>
      </>
   );
};


export default NewReleases