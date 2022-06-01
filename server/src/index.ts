import { ApolloServer } from 'apollo-server'
import { PrismaClient, Prisma } from '@prisma/client'
import { config } from './config'

const prisma = new PrismaClient()

const server = new ApolloServer(config)

server.listen().then(({ url }) => {
  console.log(`Server ready on ${url}`)
})
