import React, { useEffect, useState } from 'react'
import styles from "./Lvl1.module.css"
import { Route, Routes, useNavigate } from 'react-router-dom'
import Lvl3Sheet1 from '../Sheets/Lvl3Sheet1.jsx';
import Lvl3Sheet2 from '../Sheets/Lvl3Sheet2.jsx';

const Lvl3 = () => {
    const [display, setDisplay] = useState(true);

    const navigate = useNavigate();

    const sheet1 = () => {
        setDisplay(!display)
        navigate("/lvl3/sheet1");
    }

    const sheet2 = () => {
        setDisplay(!display)
        navigate("/lvl3/sheet2");
    }


  return (
    <>
    {display && <div className={`${styles.level}`}>
        <button className={styles.button} onClick={sheet1}>Worksheet 1</button>
        <button className={styles.button} onClick={sheet2}>Worksheet 2</button>
        <button className={styles.button} >Worksheet 3</button>
        <button className={styles.button} >Worksheet 4</button>
        <button className={styles.button} >Worksheet 5</button>
        <button className={styles.button} >Worksheet 6</button>
    </div>}
    {/* <Routes>
      <Route path='/lvl3/sheet1' element={<Lvl3Sheet1/>}></Route>
      <Route path='/lvl3/sheet2' element={<Lvl3Sheet2/>}></Route>
    </Routes> */}
    </>
  )
}

export default Lvl3