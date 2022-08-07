import { ApolloServer } from 'apollo-server-micro'
import { MicroRequest } from 'apollo-server-micro/dist/types'
import { apolloServerConfig } from '../../graphql/config'
import Cors from 'micro-cors'

const cors = Cors()

const apolloServer = new ApolloServer(apolloServerConfig)

const startServer = apolloServer.start()

export default cors(async function handler(
  req: MicroRequest,
  res: any
) {
  await startServer

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
})

export const config = {
  api: {
    bodyParse: false,
  },
}
