const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

// Define a simple UserType
const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});

module.exports = UserType;
