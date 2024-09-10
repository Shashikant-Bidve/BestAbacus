import Level from "./components/Level/Level"
import Lvl1 from "./components/Levels/Lvl1"
import Navbar from "./components/Navbar/Navbar"
import { Route, Routes, useNavigate } from "react-router-dom"
import Sheet1 from "./components/Sheets/sheet1"



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
