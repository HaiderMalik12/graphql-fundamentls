import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolvers';

const tyepDefs = `
type HackerNewsItem {
    id: String
    text: String
    timeISO: String
    time: Int
    title: String
    deleted: Boolean
}
type User{
    id: ID
    firstName: String!
    lastName: String!
    email: String
    age: Int!
    gender: Gender
    items: [HackerNewsItem]
}
enum Gender{
    MALE
    FEMALE
    OTHER
}
 type Query {
   item: HackerNewsItem
   getUser(id: ID): User
   users: [User]
 }
 input HackerNewsItemInput{
    id: String
    text: String
    timeISO: String
    time: Int
    title: String
    deleted: Boolean
 }
 input UserInput{
    id: ID
    firstName: String!
    lastName: String!
    email: String
    age: Int!
    gender: Gender
    items: [HackerNewsItemInput]
 }
 type Mutation{
     createUser(input: UserInput) : User
 }
`;
const schema = makeExecutableSchema({typeDefs, resolvers})

export default {schema};