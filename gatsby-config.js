module.exports = {
  siteMetadata: {
    title: `Andy Slezak`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-purify-css`,
    `gatsby-plugin-react-next`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-javascript-static-exports`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `page data`,
        path: `${__dirname}/src/data/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `component data`,
        path: `${__dirname}/src/data/components`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Arvo:400`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-113297020-1`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
