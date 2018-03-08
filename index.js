import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express();

app.get("/", (req, res) => {
  return res.json({
    msg: "Welcome to GraphQL World!!"
  });
});
const root = {
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
  user: () => {
    return {
      firstName: "Jane",
      lastName: "Doe",
      emails: [
        {
          email: "jane@gmail.com"
        },
        {
          email: "jane@yahoo.com"
        }
      ]
    };
  }
};
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(3000, () => {
  console.log("App is running on PORT 3000");
});
