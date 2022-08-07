import { ApolloServer } from 'apollo-server-micro'
import { apolloServerConfig } from '../../graphql/config'
import { PageConfig } from 'next'
import { IncomingMessage, ServerResponse } from 'http'

const apolloServer = new ApolloServer(apolloServerConfig)

const startServer = apolloServer.start()

const handler = async (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }
  await startServer

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}

export default handler

// // Apollo Server Micro takes care of body parsing
export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
}
