import React, { useContext } from 'react';
import AuthContext from '../Context/Context';
import '../Sass/audiofiles.css'

const AudioFiles = (props) => {
   if (!props.music) {
      return <div>No audio available</div>;
   }
   return (
      <div>
         <audio controls autoPlay>
            <source src={props.music} type="audio/mpeg" />
         </audio>
      </div>
   );
};

export default AudioFiles;