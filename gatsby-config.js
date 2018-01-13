module.exports = {
  siteMetadata: {
    title: `Andy Slezak`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-next`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-javascript-static-exports`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `page data`,
        path: `${__dirname}/src/data/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `component data`,
        path: `${__dirname}/src/data/components`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Source Serif Pro`, `Arvo`]
      }
    }
  ]
};
