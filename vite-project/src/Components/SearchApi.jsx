import React from 'react'
import { useContext, useState } from 'react'
import AuthContext from '../Context/Context'
import Styled from '../Sass/SearchApi.module.scss'
import store from '../Redux/ReduxStore'

const SearchApi = () => {
   const ctx = useContext(AuthContext)
   const [selectedItem, setSelectedItem] = useState(null);
   const [music, setMusic] = useState()

   const handleImageClick = (item) => {
      setSelectedItem(item);
      setMusic(item?.track?.preview_url);
      console.log(item?.track?.preview_url);
   };
   return (
      <>
         <h1 className={Styled['search-h1']}>Your Search</h1>
         {ctx?.data?.items?.slice(0, 1).map((item) => {
            return <div className={Styled["image-wrapper-child"]}>
               {
                  ctx?.searchData?.albums?.items?.map((data) => {
                     console.log();
                     return <div onClick={() => handleImageClick(item)}>
                        <img src={data?.data?.coverArt?.sources[0].url} alt="" />
                        <h1>{data?.data.name}</h1>
                     </div>
                  })
               }
            </div>
         })
            // new data
         }
      </>
   )
}

export default SearchApi