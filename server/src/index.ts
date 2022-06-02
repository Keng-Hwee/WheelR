import { ApolloServer } from 'apollo-server'
import { config } from './config'

const server = new ApolloServer(config)

server.listen().then(({ url }) => {
  console.log(`Server ready on ${url}`)
})
