import React from 'react'
import NavStyles from "../Sass/NavBar.module.scss"
import Logo from "../images/logo.svg"

const NavBar = () => {
   return (
      <div className={NavStyles["NavBar"]}>
         <img src={Logo} alt="" />
         <input type="text" placeholder='Search Artists' />
      </div>
   )
}

export default NavBar