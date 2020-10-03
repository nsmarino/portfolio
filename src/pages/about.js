import React from 'react'
import styled from 'styled-components'

const TextContainer = styled.div`
  width: 40%;
  @media only screen and (max-width: 800px) {
    width: 90%;
  }
`
const AboutPage = () => {
  return (
    <div
      style={{
        margin: '1rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <TextContainer>
      <h1 style={{fontFamily: 'Serif', fontSize: '300%'}}>About Me</h1>
      <p>I am a full-stack web developer based in New York City. I strive to write code that is reliable, legible and extensible. On the design side, I seek to make my sites interesting to look at and pleasant to use.</p>
      <h2 style={{fontFamily: 'Serif'}}>skill set</h2>
      <ul>
        <li>react ecosystem</li>
        <li>nodeJS/express</li>
        <li>graphQL/apollo server</li>
        <li>mongoDB</li>
        <li>stripe</li>
        <li>testing with cypress and jest</li>
        <li>p5js and react-three-fiber</li>
        <li>css!</li>
      </ul>
      <h2 style={{fontFamily: 'Serif'}}>interests</h2>
      <p>When not making websites, I like to experiment with generative design, explore world cinema, and drive my car around the Hudson Valley.</p>
      </TextContainer>
    </div>
  )
}

export default AboutPage