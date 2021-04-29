import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"

const Home = () => {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & deploy</h3>
          <p>Develop in Gutsby</p>
          <Link to="/projects" className={btn}>
            My Projects
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Home
