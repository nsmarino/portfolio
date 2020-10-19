import React from 'react'
import styled from 'styled-components'

import ProjectInfo from './ProjectInfo'
import Slideshow from './Slideshow'

const ProjectContainer = styled.section`
  display: flex;
  margin-bottom: 10rem;
  margin-top: 10rem;
  @media only screen and (max-width: 900px) {
      margin-bottom: 0rem;
      margin-top: 0rem;
      flex-direction: column-reverse;    
  }
`

const ProjectCard = ({ project }) => {
    return (
        <ProjectContainer>
          <ProjectInfo info={project} />
          {/* <Slideshow project={project.images} /> */}
        </ProjectContainer>
    )
}

export default ProjectCard