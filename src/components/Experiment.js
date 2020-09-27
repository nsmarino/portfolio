import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Container = styled.div`
  width: 20rem;
  height: 20rem;
  border: 1px solid blue;
  margin-right: 1rem;
  background: black;
  @media only screen and (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`
const Experiment = ({ experiment }) => {
  console.log(experiment)
  return (
    <Container>
      <a href={experiment.info.url}>
      <Img 
          fluid={experiment.image.node.childImageSharp.fluid} 
          alt='hi'
          style={{height: '100%'}}
        />
        </a>
    </Container>
)}

export default Experiment