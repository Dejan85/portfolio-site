import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"

const Home = props => {
  const { data } = props
  const { title, description } = data.site.siteMetadata
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
        <img src="/banner.png" alt="img" style={{ maxWidth: "100%" }} />
        <p>
          {title} - {description}
        </p>
      </section>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query SiteInfo {
    site(siteMetadata: {}) {
      siteMetadata {
        description
        title
      }
    }
  }
`
