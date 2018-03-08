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
type Email{
    email: String!
}
type User{
    firstName: String!
    lastName: String!
    emails: [Email]
}
 type Query {
   item: HackerNewsItem
   user: User
 }
`);

export default schema;