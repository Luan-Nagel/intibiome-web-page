import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import './layout.css'

/** Component with the base layout of the site (header and footer) */
const Layout = ({ children }) => {
  return (
    <div>
      <title>Intibiome</title>
      <Header />
      { children }
      <Footer />
    </div>
  )
}

export default Layout