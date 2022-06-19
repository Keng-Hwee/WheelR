import { GraphQLScalarType, Kind } from 'graphql'

export const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value: any) {
      const date = new Date(value)
      return date.toISOString() // Convert outgoing Date to integer for JSON
    },
    parseValue(value: any) {
      return new Date(value) // Convert incoming integer to Date
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(parseInt(ast.value, 10)) // Convert hard-coded AST string to integer and then to Date
      }
      return null // Invalid hard-coded value (not an integer)
    },
  }),
}
