import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import {
  portfolio,
  projects as projectsStyle,
} from "../../styles/projects.module.css"

const Projects = props => {
  const { data } = props
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Website I've created</h3>
        <div className={projectsStyle}>
          {projects.map(project => (
            <Link key={project.id} to={`/projects/${project.frontmatter.slug}`}>
              <div>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stuck}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query ProjectsPage {
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
`
