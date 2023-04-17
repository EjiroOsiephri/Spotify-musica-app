import React from 'react'
import NavStyles from "../Sass/NavBar.module.scss"
import Logo from "../images/logo.svg"
import { FaBars } from 'react-icons/fa';

const NavBar = (props) => {

   function showNav() {
   }

   return (
      <div className={NavStyles["NavBar"]}>
         <div className={NavStyles["fatimes"]}>
            <FaBars onClick={showNav} style={{ color: 'white' }} />
         </div>
         <img src={Logo} alt="" />
         <input type="text" placeholder='Search Artists' />
      </div>
   )
}

export default NavBar