import React from "react";
import SEO from '../components/seo'
import ProjectCard from '../components/ProjectCard'

const projectData = [
  {
      name: 'Megalith',
      role: 'Development / co-designed with William Graham Rice',
      url: 'https://www.megalith.supply',
      site: 'megalith.supply',
      github: 'https://github.com/nsmarino/megalith',
      concept: 'E-commerce site for streetwear brand. Users should feel that they have entered into an ancient and mysterious zone.',
      stack: 'Gatsby frontend connected to Express/Apollo Server backend. Custom integration with Stripe API for payment processing and Printful API for dropshipping.',
      id: '1',
      images: "megalith"
  },
  {
      name: 'Reed Events',
      role: 'Design/Development',
      url: 'https://reedevents.vercel.app',
      site: 'reedevents.vercel.app',
      github: 'https://github.com/nsmarino/libcal',
      concept: 'Event scheduling app for Reed Memorial Library in Carmel, NY. Library staff can schedule daily, weekly or monthly events and patrons can sign up. Must be logged in to admin account to create events. Patrons receive email confirmations after signing up.',
      stack: "Serverless NextJS app that connects to MongoDB database using Nextjs's Pages API.",
      id: '2',
      images: "reedevents"
  },
  {
      name: 'studies.film',
      role: 'Design/Development',
      url: 'https://www.studiesfilm.vercel.app',
      site: 'studiesfilm.vercel.app',
      github: 'https://github.com/nsmarino/institute',
      concept: 'Film blog designed to be readable and pleasant to navigate on both desktop and mobile. Site is organized around film as a linear experience; users can navigate through long essays using a timeline similar to Netflix or other streaming sites.',
      stack: 'Statically generated Gatsby site. Reads essay data from markdown.',
      id: '3',
      images: "studiesfilm"
  },
]
const RecentWorkPage = () => (
  <>
    <SEO title="recent-work" />
    {/* <AllProjects /> */}
    {projectData.map(project => <ProjectCard project={project} key={project.id} />)}

  </>
);

export default RecentWorkPage;
