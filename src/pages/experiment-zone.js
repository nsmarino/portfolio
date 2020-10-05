import React from "react";
import styled from 'styled-components'
import SEO from '../components/seo'
import Experiments from '../components/Experiments' 

const Container = styled.div`
  margin: 1rem;
  .experimentsContainer {
    display: flex;
  }
  @media only screen and (max-width: 600px) {
    .experimentsContainer {
      flex-direction: column;
    }
  }
`

const ExperimentsPage = () => (
  <Container>
    <SEO title="experiments" />
    <h1 style={{fontFamily: 'Serif', fontSize: '300%'}}>Experiments</h1>
    <div className="experimentsContainer">
    <Experiments /> 
    </div>
  </Container>
);

export default ExperimentsPage;