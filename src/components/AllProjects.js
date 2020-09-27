import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import ProjectCard from './ProjectCard'

const projectData = [
    {
        name: 'Megalith',
        role: 'Development / co-designed with William Graham Rice',
        url: 'megalith.supply',
        github: 'github.com',
        concept: 'E-commerce site for streetwear brand. Users should feel that they have entered into an ancient and mysterious zone. Care was taken to create an immersive environment using SVG animations and Framer Motion.',
        stack: 'Gatsby frontend connected to Express/Apollo Server backend. Custom integration with Stripe API for payment processing and Printful API for dropshipping.',
        id: 1,
    },
    {
        name: 'Reed Events',
        role: 'Design/Development',
        url: 'libcal.netlify.com',
        github: 'github.com',
        concept: 'Event scheduling app for Reed Memorial Library in Carmel, NY. Library staff can schedule daily, weekly or monthly events and patrons can sign up. Must be logged in to admin account to create events. Patrons receive email confirmations after signing up.',
        stack: "Serverless NextJS app that connects to MongoDB database using Nextjs's Pages API.",
        id: 2,
    },
    {
        name: 'studies.film',
        role: 'Design/Development',
        url: 'libcal.netlify.com',
        github: 'github.com',
        concept: 'Film blog designed to be readable and pleasant to navigate on both desktop and mobile. Site is organized around film as a linear experience; users can navigate through long essays using a timeline similar to Netflix or other streaming sites.',
        stack: 'Statically generated Gatsby site. Reads essay data from markdown.',
        id: 3,
    },
  ]

export default () => (
    <StaticQuery 
    query={graphql`
      query {
        images:
          allFile(filter: {extension: {regex: "/(jpg|png)/"}, relativeDirectory: {eq: "recentWork"}}) {
            edges {
              node {
                base
                childImageSharp {
                  fluid(maxWidth: 800, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
            }
          }
        }
      }
    `}
    render={({ images }) => {
      const projects = images.edges.map(
        image => (
            {
            image, 
            info: projectData.find(project => image.node.base.split('.')[0] == project.id)
          }
        )    
      )
      
      return (
        projects.map(project => <ProjectCard project={project} key={project.info.id} />)
      )
    }}
    />
)