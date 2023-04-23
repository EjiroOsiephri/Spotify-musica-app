import React, { useContext } from 'react';
import AuthContext from '../Context/Context';
import '../Sass/audiofiles.css'

const AudioFiles = () => {
   const ctx = useContext(AuthContext);
   const previewUrl = ctx?.data?.items[0].track?.preview_url;

   if (!previewUrl) {
      return <div>No audio available</div>;
   }

   return (
      <div>
         <audio controls>
            <source src={previewUrl} type="audio/mpeg" />
         </audio>
      </div>
   );
};

export default AudioFiles;