const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { schemaRoot, MessageSchema } = require('./model/Message')

const app = express()
app.use('/graphql', graphqlHTTP({
  schema: MessageSchema,
  rootValue: schemaRoot,
  graphiql: true
}))

app.listen(3000, () => console.log('Express has been started at 3000'))