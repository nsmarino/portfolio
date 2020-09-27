import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Experiment from './Experiment'

const experimentInfo = [
  {
    url: 'https://codepen.io/nsmarino/pen/MWYGjYo',
    id: 1
  }
]

export default () => (
  <StaticQuery 
  query={graphql`
    query {
      images:
        allFile(filter: {extension: {regex: "/(jpg|png)/"}, relativeDirectory: {eq: "experiments"}}) {
          edges {
            node {
              base
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
          }
        }
      }
    }
  `}
  render={({ images }) => {
    const experiments = images.edges.map(
      image => (
          {
          image, 
          info: experimentInfo.find(experiment => image.node.base.split('.')[0] == experiment.id)
        }
      )    
    )
    
    return (
      experiments.map(experiment => <Experiment experiment={experiment} key={experiment.info.id} />)
    )
  }}
  />
)