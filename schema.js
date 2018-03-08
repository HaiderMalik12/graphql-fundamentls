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
 type Query {
   item: HackerNewsItem
 }
`);

export default schema;