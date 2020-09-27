import React from 'react'
import styled from 'styled-components'

import ProjectInfo from './ProjectInfo'
import Slides from './Slides'

const ProjectContainer = styled.section`
  display: flex;
  height: 75vh;
  @media only screen and (max-width: 800px) {
      flex-direction: column-reverse;
      height: unset;
      
  }

`

const Project = ({ data }) => {
    return (
        <ProjectContainer>
          <ProjectInfo info={data.info} />
          <Slides img={data.img} />
        </ProjectContainer>
    )
}

export default Project