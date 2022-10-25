exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  const { data } = await graphql(`
    query AllCountries {
      CountryAPI {
        countries {
          name
          code
          native
          capital
          emoji
          currency
          languages {
            code
            name
          }
        }
      }
    }
  `);

  data?.CountryAPI?.countries?.forEach(country => {
    createPage({
      path: `${country.name.toLowerCase().replace(/ /g, '-')}`,
      component: require.resolve("./src/templates/[country].js"),
      context: {
        code: country.code,
      },
      // defer: true,
    })
  });
}
