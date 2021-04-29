import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../../components/Layout"
import { portfolio } from "../../styles/projects.module.css"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            stack
            title
          }
          id
        }
      }
    }
  `)

  console.log("test", data)

  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Website I've created</h3>
      </div>
    </Layout>
  )
}

export default Projects
