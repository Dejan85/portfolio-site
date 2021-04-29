import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import {
  portfolio,
  projects as projectsStyle,
} from "../../styles/projects.module.css"
import Img from "gatsby-image"

const Projects = props => {
  const { data } = props
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Website I've created</h3>
        <div className={projectsStyle}>
          {projects.map(project => {
            return (
              <Link
                key={project.id}
                to={`/projects/${project.frontmatter.slug}`}
              >
                <div>
                  <Img
                    fluid={project.frontmatter.thumg.childImageSharp.fluid}
                  />
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stuck}</p>
                </div>
              </Link>
            )
          })}
        </div>
        <p>Like what you see? Email me at {contact} for a qoute!</p>
      </div>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumg {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
