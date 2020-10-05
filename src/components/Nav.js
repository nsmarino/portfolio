import React, { useState } from "react";
import { Link } from "gatsby";

import styled from 'styled-components' 

const StyledNav = styled.nav`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    display: block;
    font-family: Serif;
    font-size: 300%;
  }

  p {
    font-style: italic;
    font-size: 125%;
  }
 .subHeader {
    cursor: pointer;
    transition: color 700ms;
    text-decoration: underline;
    color: hsla(0, 0%, 0%, 0.8);
    font-size: 125%;
    font-style: italic;
    margin:0;
    padding:0;
    margin-bottom: 1.5rem;
    border: none;
    background: none;
  }

  .subHeader:hover {
    color: blue;
  }

  ul {
    display: flex;
    flex-direction: column;
    font-size: 125%;
  }

  li {
    transition: color 700ms;
  }

  li::first-letter {
    border-bottom: 1px solid grey;
  }
  li:hover {
    color: red;
  }

  .disabled {
    color: grey;
  }

  .disabled:hover {
    color: grey;
  }
  .pdf {
    font-variant: small-caps;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  @media only screen and (min-width: 700px) {
    justify-content: left;
    margin-top: 4rem;
    h1 {
      font-size: 600%;
    }
    .subHeader, p {
      font-size: 300%;
    }

    ul {
      font-size: 200%;
    }
  }
`

const Nav = () => {
  const [emailVis, setEmailVis] = useState(false)
  return (
  <StyledNav>
    <div>
  <h1>Nicholas Marino</h1>
  {
    emailVis ?
    <p>contact@nmarino.dev <svg style={{cursor: 'pointer'}}onClick={() => setEmailVis(!emailVis)} opacity="0.8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></p>
    :
    <button className="subHeader" onClick={() => setEmailVis(!emailVis)} onKeyDown={() => setEmailVis(!emailVis)}>Send me an email</button>
  }

  <ul>
    <Link to="/recent-work" style={{textDecoration: 'none', color: 'inherit'}}>
      <li>Recent Work</li>
    </Link>
      <Link to="/experiment-zone" style={{textDecoration: 'none', color: 'inherit'}}>
      <li>
        Experiment Zone
      </li>
      </Link>
      <Link to="/about" style={{textDecoration: 'none', color: 'inherit'}}>
      <li>
        About Me
      </li>
      </Link>
      <a href="resume.pdf">
      <li>
        CV <span className="pdf">[pdf]</span>
      </li>
      </a>
    </ul>
    </div>
  </StyledNav>
)};

export default Nav;
