module.exports = {
  siteMetadata: {
    title: `Nischidha Imaging Services`,
    description: `Our company provides teleradiology services (i.e. CT, MRI, X-ray) to hospitals and diagnostic centres in remote parts of India and other parts of world. It is a health care company that uses technology for providing teleradiology services to consultants and patients.`,
    author: `@Nischidha_ispl`,
    twitterUsername: "@Nischidha_ispl",
    image: "/twitter-img.png",
    siteUrl: "https://www.nischidhaimagingservices.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // `gatsby-plugin-offline`,
  ],
}
