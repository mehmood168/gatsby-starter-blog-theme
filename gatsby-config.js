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
	{
	  resolve: `gatsby-source-filesystem`,
      options: {
		name: `markdown-pages`,
		path: `${__dirname}/content/posts`,
	  }
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Code Snippets`,
    author: `Mehmood`,
    description: `This blog is `,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/mehmood168`,
      },
      {
        name: `github`,
        url: `https://github.com/mehmood168`,
      },
    ],
  },
}
