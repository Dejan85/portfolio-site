import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav>
      <h1>Porfolio</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio projects</Link>
      </div>
    </nav>
  )
}

export default Navbar
