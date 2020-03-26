module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
	{
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Technical Blog`,
    author: `My Name`,
    description: `My site description...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
}
