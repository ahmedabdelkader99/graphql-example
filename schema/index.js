const graphql = require("graphql");
const UserType = require("./TypeDef/UserType");
const userData = require("./MOCK_DATA.json");
const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList } =
  graphql;

// Define a RootQueryType
const RootQueryType = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    // getAllUsers
    getAllUsers: {
      type: new GraphQLList(UserType),
      user: {
        type: UserType,
        args: { id: { type: GraphQLString } },
        resolve(parent, args) {
          return userData;
        },
      },
    },
  },
});
// mutation
//mutation using for create update delete
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    //  createUser
    createUser: {
      type: UserType,
      args: {
        firstName: { GraphQLString },
        lastName: { GraphQLString },
        email: { GraphQLString },
        password: { GraphQLString },
      },
      resolve(parent, args) {
        userData.push({
          id: userData.length + 1,
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          password: args.password,
        });
        return args;
      },
    },
  },
});

// Create a GraphQL schema
module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: mutation,
});
