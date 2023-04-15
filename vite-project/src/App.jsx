import Signup from "./Routes/Signup"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup></Signup>}></Route>
      </Routes>
    </>
  )
}

export default App
