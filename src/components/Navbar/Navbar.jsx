import React from 'react'
import styles from "./Navbar.module.css"
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <>
    <div className={styles.navbar}>
        <img src={logo} alt="logo" />
        <header>
          Ambad Branch | 
          Prof. Varsha S. Muchate
        </header>
        
    </div>
    </>
  )
}

export default Navbar