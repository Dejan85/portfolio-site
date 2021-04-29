import React from "react"
import NavBar from "./Navbar"
import "../styles/global.css"

const Layout = props => {
  const { children } = props
  return (
    <div className="layout">
      <NavBar />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 2021</p>
      </footer>
    </div>
  )
}

export default Layout
