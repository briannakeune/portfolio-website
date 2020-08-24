import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

// source for this component https://www.labnol.org/code/gatsby-images-200607

export default function Image({ projectName = "gatsby-icon", ...rest }) {
  let src = projectName
  const altTag = `A preview of the ${projectName} homepage.`
  switch (true) {
    case projectName === "Gróa":
      src = "groa.png"
      break
    case projectName === "Appraiser's BFF":
      src = "appraisersBFF.png"
      break
    case projectName === "Lambda Bug Tracker":
      src = "lambdaBugTracker.png"
      break
    default:
      src = null
  }

  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { internal: { mediaType: { regex: "/image/" } } }
      ) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const match = useMemo(
    () => data.images.edges.find(({ node }) => src === node.relativePath),
    [data, src]
  )
  if (!match) return null
  const { node: { childImageSharp, publicURL, extension } = {} } = match

  if (extension === "svg" || !childImageSharp) {
    return <img src={publicURL} alt={altTag} {...rest} />
  }

  return <Img fluid={childImageSharp.fluid} {...rest} alt={altTag} />
}

Image.propTypes = {
  projectName: PropTypes.string.isRequired,
  alt: PropTypes.string,
}
