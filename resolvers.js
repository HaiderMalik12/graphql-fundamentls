const users = [];
let user = {};
import Item from './models/item';
import User from './models/user';
export const resolvers = {
  Query :{
    getItem: async (_, {id}) => {
    return await Item.findOne({_id: id});
    },
    getUser: async(_,{id}) => {
      return await User.findById(id);
    },
    getUsers: async() => {
      return await User.find().populate('items');
    },
  },
  Mutation:{
    createUser: async (_, {input}) => {
      const user = await User.create(input);
      return await User.findOne({_id:user.id}).populate('items')
    },
    createItem: (_, {input}) => {
     return Promise.resolve(Item.create(input));
    },
    updateUser: async (_, {input}) => {
    return await User.findOneAndUpdate({_id: input.id},input,{new:true})
    },
    deleteUser: async (_, {id})=> {
    return await User.findOneAndRemove({_id: id});
    }
  }
};