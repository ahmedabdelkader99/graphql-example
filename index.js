const express = require("express");
const schema = require("./schema/index");

const app = express();
const PORT = 4000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(PORT, () => {
  console.log("app is listinng ");
});
