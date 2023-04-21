import React from 'react'
import ReactDOM from 'react-dom/client'
import Api from './Api_Calls/Api'
import { BrowserRouter } from "react-router-dom"
import "./Sass/Main.scss"


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Api />
  </BrowserRouter>
)
