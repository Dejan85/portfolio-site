import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"
import Img from "gatsby-image"

const Home = props => {
  const { data } = props
  const fluid = data.file.childImageSharp.fluid

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
        <Img fluid={fluid} />
      </section>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
