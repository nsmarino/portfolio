import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Selfie() {
    const data = useStaticQuery(graphql`
      query {
        file(relativePath: { eq: "selfie.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return <div style={{width: '100%'}}><Img fluid={data.file.childImageSharp.fluid} /></div>
  }