const { buildSchema } = require('graphql')

const MessageSchema = buildSchema(`
  type Query {
    message: String
  }
`)

const schemaRoot = {
  message: () => `Hello from GraphQL`
}

module.exports = {
  MessageSchema,
  schemaRoot
}