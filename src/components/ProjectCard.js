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

const ProjectCard = ({ project }) => {
    return (
        <ProjectContainer>
          <ProjectInfo info={project.info} />
          <Slides img={project.image} />
        </ProjectContainer>
    )
}

export default ProjectCard