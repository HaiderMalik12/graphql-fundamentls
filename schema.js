import {buildSchema} from 'graphql';

const schema = buildSchema(`
 type Query {
     hello: String,
     hn: String
     hn2: String
     twitter: String
     github: String
 }
`);

export default schema;