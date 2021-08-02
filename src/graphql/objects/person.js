import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql'

/**
  `type Person {
    id: ID!,
    name: String,
  }`
 */

export default new GraphQLObjectType({
  name: 'Person',
  description: 'Define a Person Object',
  fields:() => ({
    id: {
      type: GraphQLID,
      description: 'Unique ID',
      resolve:(person) => person.id
    },
    name: {
      type: GraphQLString,
      description: 'Person Name',
      resolve:(person) => person.name
    }
  })
})