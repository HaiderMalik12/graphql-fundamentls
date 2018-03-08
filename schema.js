import {buildSchema} from 'graphql';

const schema = buildSchema(`
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
}
 type Query {
   item: HackerNewsItem
   getUser(id: ID): User
   users: [User]
 }
 input UserInput{
    id: ID
    firstName: String!
    lastName: String!
    email: String
    age: Int!
 }
 type Mutation{
     createUser(input: UserInput) : User
 }
`);

export default schema;