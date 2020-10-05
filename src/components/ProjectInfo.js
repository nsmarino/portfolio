import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1 1 0px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 300%;
    margin-bottom: 0.25rem;
    font-family: Serif;
  }
  .links {
    display: flex;
    justify-content: space-between;
  }

  .links div {
    flex: 1 1 0px;
    font-size: 90%;

    a {
      transition: color 700ms;
    }
  }
  a:hover {
    color: red;
  }

  h3 {
    margin-bottom: 0;
    margin-top: 1rem;
    font-size: 90%;
    font-weight: normal;
    font-variant: small-caps;
    color: red;
  }

  p {
    width: 80%;
  }
  `

const ProjectInfo = ({ info }) => {
  return (
    <Container>
      <h2>{info.name}</h2>
      <p>{info.role}</p>
      <div className="links">
        <div>
          <a href={`${info.url}`}>{info.site}</a>
        </div>
        <div>
          <a href={`${info.github}`}>github</a>
        </div>
      </div>

      <div>
        <h3>concept</h3>
        <p>{info.concept}</p>
      </div>

      <div>
        <h3>stack</h3>
        <p>{info.stack}</p>
      </div>
    </Container>
  )
}

export default ProjectInfo