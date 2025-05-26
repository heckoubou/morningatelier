module.exports = {
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-plugin-gh-pages`,
      options: {
        branch: "gh-pages",
      },
    },
  ],
}
