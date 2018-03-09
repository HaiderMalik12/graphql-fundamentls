const users = [];
let user = {};
import Item from './models/item';
import User from './models/user';
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
    createUser: async (_, {input}) => {
      const user = await User.create(input);
      return await User.findOne({_id:user.id}).populate('items')
    },
    createItem: (_, {input}) => {
     return Promise.resolve(Item.create(input));
    }
  }
};