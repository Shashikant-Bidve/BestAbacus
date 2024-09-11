import Level from "./components/Level/Level.jsx"
import Lvl1 from "./components/Levels/Lvl1.jsx"
import Navbar from "./components/Navbar/Navbar"
import { Route, Routes, useNavigate } from "react-router-dom"
import Sheet1 from "./components/Sheets/sheet1.jsx"



function App() {

  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Level/>}></Route>
      <Route path="/lvl1" element={<Lvl1/>}>
      </Route>
      <Route path="/lvl1/sheet1" element={<Sheet1/>}></Route>
    </Routes>
    </>
  )
}

export default App
