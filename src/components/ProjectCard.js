import React from 'react'
import styled from 'styled-components'

import ProjectInfo from './ProjectInfo'
import Slideshow from './Slideshow'

const ProjectContainer = styled.section`
  display: flex;
  margin-bottom: 10rem;
  margin-top: 10rem;
  @media only screen and (max-width: 900px) {
      flex-direction: column-reverse;
      margin-bottom: 0rem;
      margin-top: 0rem;    
  }

`

const ProjectCard = ({ project }) => {
    return (
        <ProjectContainer>
          <ProjectInfo info={project} />
          <Slideshow project={project.images} />
        </ProjectContainer>
    )
}

export default ProjectCard