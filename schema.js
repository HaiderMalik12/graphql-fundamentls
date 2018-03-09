import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolvers';

const typeDefs = `
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
type Post {
    id: ID
    title: String
    text: String
}
enum Gender{
    MALE
    FEMALE
    OTHER
}
 type Query {
   getItem(id: ID!): HackerNewsItem
   getUser(id: ID): User
   getUsers: [User]
   getPosts: [Post]
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
    items: [ID!]
 }
 input PostInput{
     title: String
     text: String
 }
 type Mutation{
     createUser(input: UserInput) : User
     updateUser(input: UserInput) : User
     deleteUser(id: ID!): User
     createItem(input: HackerNewsItemInput) : HackerNewsItem
     createPost(input: PostInput) : Post
 }
`;
const schema = makeExecutableSchema({typeDefs, resolvers})

export default schema;