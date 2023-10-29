import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
  schema {
    query: Query
  }
  
  type Query {
    greeting : String
  }
`;
//schema

const resolvers = {
  Query: {
    greeting: () => "Hello world",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const serverRunnerInfo = await startStandaloneServer(server, {
  listen: {
    port: 3001,
  },
});

console.log(`Server running at ${serverRunnerInfo.url}`);
