import React from 'react'
import styles from "./Level.module.css"
import { useNavigate } from 'react-router-dom'

const Level = () => {
    const navigate = useNavigate();

    const lvl1 = () => {
        navigate("/lvl1")
    }
  return (
    <div className={styles.level}>
        <button className={styles.button} onClick={lvl1}>Level 1</button>
        <button className={styles.button} >Level 2</button>
        <button className={styles.button} >Level 3</button>
        <button className={styles.button} >Level 4</button>
        <button className={styles.button} >Level 5</button>
        <button className={styles.button} >Level 6</button>
    </div>
  )
}

export default Level