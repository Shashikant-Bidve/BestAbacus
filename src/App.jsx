import Level from "./components/Level/Level.jsx"
import Lvl1 from "./components/Levels/Lvl1.jsx"
import Navbar from "./components/Navbar/Navbar"
import { Route, Routes, useNavigate } from "react-router-dom"
import Sheet1 from "./components/Sheets/Sheet1.jsx"
import Lvl3 from "./components/Levels/Lvl3.jsx"
import Lvl3Sheet1 from "./components/Sheets/Lvl3Sheet1.jsx"
import Lvl3Sheet2 from "./components/Sheets/Lvl3Sheet2.jsx"



function App() {

  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Level/>}></Route>
      <Route path="/lvl1" element={<Lvl1/>}>
      </Route>
      <Route path="/lvl1/sheet1" element={<Sheet1/>}></Route>

      <Route path="/lvl3" element={<Lvl3/>}>
      </Route>
      <Route path="/lvl3/sheet1" element={<Lvl3Sheet1/>}>
      </Route>
      <Route path="/lvl3/sheet2" element={<Lvl3Sheet2/>}></Route>
      
      
    </Routes>
    </>
  )
}

export default App
