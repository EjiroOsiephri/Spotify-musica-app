import React from 'react'
import Styled from "../Sass/Signin.module.scss"
import Logo from "../images/download12.png"
import Google from "../images/Google.svg"
import Github from "../images/Gihub.svg"
import { useState } from 'react'
import { auth, googleAuth } from "../Firebase/AuthFirebase"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { useNavigate, Link } from 'react-router-dom'


const Signup = () => {
   const [email, setEmail] = useState()
   const [password, setPassword] = useState()

   const navigate = useNavigate()

   function EmailChange(e) {
      setEmail(e.target.value)
   }
   function PasswordChange(e) {
      setPassword(e.target.value)
   }

   async function Signup(e) {
      e.preventDefault()
      try {
         await signInWithEmailAndPassword(auth, email, password)
         navigate('/home')
      } catch (error) {
         console.log(error);
      }
   }

   async function GoogleSignin() {
      try {
         await signInWithPopup(auth, googleAuth)
         navigate('/home')
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <form onClick={Signup} className={Styled["signup"]}>
         <div className={Styled['logo']}>
            <img src={Logo} alt="" />
            <h2>Spotify</h2>
         </div>
         <div className={Styled["typography"]}>
            <h1>Welcome back🤗</h1>
            <h4>Thanks for always being with us, we hope to give you a wonderful experience</h4>
            <p>Please create an account with us if you haven't done so,  Just Click the sign up link.</p>
         </div>
         <div className={Styled["input-container"]}>
            <input className={Styled['input']} type="email" onChange={EmailChange} placeholder='Email' />
            <input className={Styled['input']} onChange={PasswordChange} type="password" placeholder='Password' />
         </div>
         <div className={Styled["button-container"]}>
            <button>Sign in</button>
         </div>
         <div className={Styled["other-signup-process"]}>
            <img onClick={GoogleSignin} src={Google} alt="" />
            <img src={Github} alt="" />
         </div>
         <h4 className={Styled.h4}>Don't have an account <Link to='/'>Signup here</Link></h4>
      </form>
   )
}

export default Signup