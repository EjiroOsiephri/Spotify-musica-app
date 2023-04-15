import Signup from "./Routes/Signup"
import Home from "./Spotify Routes/Home"
import { Route, Routes } from "react-router-dom"
import Login from "./Routes/Login"

function App() {
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
