module.exports = {
  siteMetadata: {
    title: `Full Stack Dev`,
    description: `SIDDIK Mehdi is a Full Stack Engineer with amazing JavaScript skills.`,
    author: `@smehdii`,
    fullName: `SIDDIK Mehdi`,
    twitterHandle: `https://twitter.com/viiirtual`,
    githubHandle: `https://github.com/smehdii`,
    // stackOverflowHandle: `https://stackoverflow.com/story/flexdinesh`,
    devToHandle: `https://dev.to/smehdii`,
    mediumHandle: `https://medium.com/@siddik.mehdi`,
    linkedInHandle: `https://www.linkedin.com/in/mehdi-siddik/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-javascript-frontmatter`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#5badf0`,
        theme_color: `#5badf0`,
        display: `minimal-ui`,
        // icon: `src/images/boy.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-117929089-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
  ],
}
