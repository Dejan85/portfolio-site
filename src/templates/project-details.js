import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import {
  details,
  featured,
  html as htmlStyle,
} from "../styles/project-details.module.css"
import { graphql } from "gatsby"

const ProjectDetails = props => {
  const { data } = props
  const { html } = data.markdownRemark
  const { title, stack, featureImg } = data.markdownRemark.frontmatter

  console.log("test", data.markdownRemark.frontmatter)

  return (
    <Layout>
      <div className={details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={featured}>
          <Img fluid={featureImg.childImageSharp.fluid} />
        </div>
        <div className={htmlStyle} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default ProjectDetails

export const query = graphql`
  query ProjectsDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        stack
        title
        featureImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
