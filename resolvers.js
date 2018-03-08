const users = [];
let user = {};
const resolvers = {
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
  createUser: ({ input }) => {
    user = input;
    users.push(user);
    return user;
  }
};
export default resolvers;