module.exports = {
  siteMetadata: {
    title: `Andy Slezak`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/json/`
      }
    }
  ]
};
