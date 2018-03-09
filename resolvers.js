const users = [];
let user = {};
import Item from './models/item';
export const resolvers = {
  Query :{
    item: () => {
      return {
        id: "123123",
        text: "This is hacker new Item",
        timeISO: "2 pm tuedsy",
        time: 132213,
        title: "Graphql learning",
        deleted: false
      };
    },
    getUser: (_,{id}) => {
      return users.find(user => user.id === id);
    },
    users: () => {
      return users;
    },
  },
  Mutation:{
    createUser: (_, {input}) => {
      user = input;
      users.push(user);
      return user;
    },
    createItem: (_, {input}) => {
     return Promise.resolve(Item.create(input));
    }
  }
};