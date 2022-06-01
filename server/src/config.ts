import { Config } from 'apollo-server'

export const config: Config = {
  typeDefs: `
        type Query {
            greeting: String!
        }
    `,

  resolvers: {
    Query: {
      greeting: () => 'HELLO!',
    },
  },
}
