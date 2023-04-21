import Signup from "./Routes/Signup"
import Home from "./Spotify Routes/Home"
import { Route, Routes } from "react-router-dom"
import Login from "./Routes/Login"
import AuthContext from "./Context/Context"
import { useContext } from "react"



function App() {
  const ctx = useContext(AuthContext)
  console.log(ctx);

  return (
    <>
      <Routes>
        <Route path="/" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
    </>
  )
}

export default App
