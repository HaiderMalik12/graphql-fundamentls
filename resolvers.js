const users = [];
let user = {};
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
    getUser: ({id}) => {
      return users.find(user => user.id === id);
    },
    users: () => {
      return users;
    },
  },
  Mutation:{
    createUser: ({ input }) => {
      user = input;
      users.push(user);
      return user;
    }
  }
};