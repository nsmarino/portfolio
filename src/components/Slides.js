import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const SlidesContainer = styled.div`
  flex: 1 1 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Slides = ({ img }) => {
  console.log(img)
    return (
        <SlidesContainer>
          <Img 
          fluid={img.node.childImageSharp.fluid} 
          alt='hi'
          style={{width: '100%'}}
        />
        </SlidesContainer>
    )
}

export default Slides