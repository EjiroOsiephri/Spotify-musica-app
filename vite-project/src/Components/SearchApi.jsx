import React from 'react'
import { useContext } from 'react'
import AuthContext from '../Context/Context'

const SearchApi = () => {
   const ctx = useContext(AuthContext)
   return (
      <div>
         <h1>Your Search</h1>
         {
            ctx?.searchData?.albums?.items?.slice(0, 1).map((data) => {
               console.log(data);
               return <div>
                  <img src={data?.data?.coverArt?.sources[0].url} alt="" />
                  <h1>{data?.data?.artists?.items[0].profile?.name}</h1>
                  <h3>{data?.data?.name}</h3>
               </div>
            })
         }
      </div>
   )
}

export default SearchApi