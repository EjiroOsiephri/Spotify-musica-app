import React, { useState, useEffect } from 'react'
import App from '../App';
import AuthContext from "../Context/Context"
import NavBar from '../Components/NavBar';

const Api = () => {
   const [inputValue, setInputValue] = useState("");

   const handleInputChange = (event) => {
      setInputValue(event.target.value);
   };

   const options = {
      method: 'GET',
      headers: {
         'X-RapidAPI-Key': '2fe232875cmsh9e769ef8b4c101ep1918d8jsn9a29639afc2f',
         'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
      }
   };
   const [data, setData] = useState()
   const [searchData, setSearchData] = useState()

   const FetchApi = async () => {
      const response = await fetch('https://spotify81.p.rapidapi.com/playlist_tracks?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100', options)
      const data = await response.json()
      setData(data)
   }

   const option = {
      method: 'GET',
      headers: {
         'X-RapidAPI-Key': '2fe232875cmsh9e769ef8b4c101ep1918d8jsn9a29639afc2f',
         'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
      }
   };

   const searchArtist = async () => {
      const response = await fetch(`https://spotify81.p.rapidapi.com/search?q=${inputValue}%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5`, option)
      const data = await response.json()
      setSearchData(data)
   }

   useEffect(() => {
      FetchApi()
   }, [])

   const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
         searchArtist();
      }
   };


   const value = {
      onInputChange: handleInputChange,
      inputValue: inputValue,
      data: data,
      handleKeyDown: handleKeyDown,
      searchData: searchData
   }



   return (
      <div>
         <AuthContext.Provider value={value}>
            <App></App>
         </AuthContext.Provider>
      </div>
   )
}

export default Api