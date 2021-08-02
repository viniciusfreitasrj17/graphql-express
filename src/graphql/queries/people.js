import { GraphQLList } from 'graphql'
import Person from '../../models/Person'
import { PersonObject } from '../objects'

/**
  `type Query {
    find: [PersonObject],
  }`
 */

export default {
  type: new GraphQLList(PersonObject),
  resolve: async () => await Person.find({})
}