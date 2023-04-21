import React, { useState, useEffect } from 'react'
import App from '../App';
import AuthContext from "../Context/Context"

const Api = () => {

   const options = {
      method: 'GET',
      headers: {
         'X-RapidAPI-Key': '2fe232875cmsh9e769ef8b4c101ep1918d8jsn9a29639afc2f',
         'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
      }
   };
   const [data, setData] = useState()

   const FetchApi = async () => {
      const response = await fetch('https://spotify81.p.rapidapi.com/playlist_tracks?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100', options)
      const data = await response.json()
      setData(data)
   }

   useEffect(() => {
      FetchApi()
   }, [])

   return (
      <div>
         <AuthContext.Provider value={data}>
            <App></App>
         </AuthContext.Provider>
      </div>
   )
}

export default Api