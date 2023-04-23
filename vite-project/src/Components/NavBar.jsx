import React from 'react'
import NavStyles from "../Sass/NavBar.module.scss"
import Logo from "../images/logo.svg"
import { FaBars } from 'react-icons/fa';
import { useContext } from 'react';
import AuthContext from '../Context/Context';

const NavBar = (props) => {

   function showNav() {
      props.toggleTruthy();
   }

   const ctx = useContext(AuthContext)


   return (
      <div className={NavStyles["NavBar"]}>
         <div className={NavStyles["fatimes"]}>
            <FaBars onClick={showNav} style={{ color: 'white' }} />
         </div>
         <img src={Logo} alt="" />
         <input type="text" value={ctx.inputValue} onKeyDown={ctx.handleKeyDown} onChange={ctx.onInputChange} placeholder='Search Artists' />
      </div>
   )
}

export default NavBar