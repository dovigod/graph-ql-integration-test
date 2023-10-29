import { ApolloServer } from "@apollo/server";
import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4";
import express from "express";
import { readFile } from "node:fs/promises";
import cors from "cors";
import { resolvers } from "./graphql/resolvers/resolver.js";

const PORT = 3001;
const typeDefs = await readFile("./graphql/schema/schema.graphql", "utf-8");

const app = express();
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});
await apolloServer.start();

// middle-wares
app.use(cors(), express.json());
app.use("/graphql", apolloMiddleware(apolloServer));

app.listen({ port: PORT }, () => {
  console.log(`✅Server running on PORT :: ${PORT}✅`);
  console.log(`🤖GraphQL endpoint :: http://localhost/${PORT}/graphql `);
});
