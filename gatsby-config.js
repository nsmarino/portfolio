module.exports = {
  siteMetadata: {
    title: `nicholas-marino`,
    description: `Portfolio Web Site of web developer nicholas marino`,
    author: `nicholas marino`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },  
  ]
};
