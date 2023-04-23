import React from 'react'
import { useContext } from 'react'
import AuthContext from '../Context/Context'
import Styled from '../Sass/SearchApi.module.scss'

const SearchApi = () => {
   const ctx = useContext(AuthContext)
   return (
      <>
         <h1 className={Styled['search-h1']}>Your Search</h1>
         <div className={Styled["image-wrapper-child"]}>
            {
               ctx?.searchData?.albums?.items?.map((data) => {
                  console.log();
                  return <div>
                     <img src={data?.data?.coverArt?.sources[0].url} alt="" />
                     <h1>{data?.data.name}</h1>
                  </div>
               })
            }
         </div>
      </>
   )
}

export default SearchApi