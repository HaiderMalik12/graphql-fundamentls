const users = [];
let user = {};
import Item from './models/item';
export const resolvers = {
  Query :{
    getItem: async (_, {id}) => {
    return await Item.findOne({_id: id});
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