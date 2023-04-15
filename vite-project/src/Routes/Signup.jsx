import React from 'react'
import Styled from "../Sass/Signin.module.scss"
import Logo from "../images/download12.png"

const Signup = () => {
   return (
      <form className={Styled["signup"]}>
         <div className={Styled['logo']}>
            <img src={Logo} alt="" />
            <h2>Spotify</h2>
         </div>
         <div className={Styled["typography"]}>
            <h1>Welcome to Spotify</h1>
            <h4>Spotify is the leading music app all around the world,you can join us and enjoy this wonderful experience.</h4>
            <p>Please create an account with us if you haven't done so.</p>
         </div>
         <div className={Styled["input-container"]}>
            <input className={Styled['input']} type="email" placeholder='Email' />
            <input className={Styled['input']} type="password" placeholder='Password' />
         </div>
         <div className={Styled["button-container"]}>
            <button>Sign up</button>
         </div>
      </form >
   )
}

export default Signup