import express from 'express'
import mongoose from 'mongoose'
import { graphqlHTTP } from 'express-graphql'
import routes from './routes'
import Schema from './graphql'

const app = express()
app.use(express.json())
app.use('/__graphql', graphqlHTTP({
  schema: Schema,
  // schema: buildSchema(`type Query { msg: String }`),
  // rootValue: { msg: () => 'Hello' },
  graphiql: true,
  pretty: true
}))

mongoose.connect('mongodb://localhost:27017/graphql', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Mongoose has been connecting'))
  .catch(error => console.log(error))

routes(app)

export default app