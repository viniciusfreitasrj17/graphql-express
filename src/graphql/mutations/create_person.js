import PersonInput from "./inputs/person_input";
import Person from "../../models/Person";
import { PersonObject } from '../objects';

export default {
  type: PersonObject,
  args: {
    person: { type: PersonInput }
  },
  resolve: async (source, args) => await Person.create({ name: args.person.name })
}