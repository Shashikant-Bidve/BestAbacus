import React, { useEffect, useState } from 'react'
import styles from "./Lvl1.module.css"
import { Route, Routes, useNavigate } from 'react-router-dom'
import Sheet1 from '../Sheets/sheet1.jsx';

const Lvl1 = () => {
    const [display, setDisplay] = useState(true);

    const navigate = useNavigate();

    const sheet1 = () => {
        setDisplay(!display)
        navigate("/lvl1/sheet1")
    }

    // useEffect(() => {
    //   console.log(window.location.href);
      
    // },[]);

  return (
    <>
    {display && <div className={`${styles.level}`}>
        <button className={styles.button} onClick={sheet1}>Worksheet 1</button>
        <button className={styles.button} >Worksheet 2</button>
        <button className={styles.button} >Worksheet 3</button>
        <button className={styles.button} >Worksheet 4</button>
        <button className={styles.button} >Worksheet 5</button>
        <button className={styles.button} >Worksheet 6</button>
    </div>}
    <Routes>
      <Route path='/lvl1/sheet1' element={<Sheet1/>}></Route>
    </Routes>
    </>
  )
}

export default Lvl1