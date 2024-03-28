import { ApolloServer} from '@apollo/server';
// import { startStandaloneServer } from '@apollo/server/standalone';
import colors from "colors";
import gql from 'graphql-tag';
import http from "http";
import express from "express";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

const app = express();

const httpServer = http.createServer(app);  // So, we're not creating the server twice for the same purpose. Instead, we're using Express to define our routes and middleware in a more expressive way, and then we're using the http module to create the underlying HTTP server instance that Apollo Server needs to integrate with

const server = new ApolloServer({
    typeDefs: gql`

    type Query {
        hello: String
    }

    type User {
    _id: ID!   # This is graphQL ID or you can also say that it is a string _id: ID 
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    }
    `,

    resolvers: {
        Query: {
            hello: () => 'Hello world!'
        }
    },
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})]
});

await server.start();  // Ensure we wait for our server to start

app.use(
    express.json(),
    cors<cors.CorsRequest>({
        origin: "http://localhost:3000",
        credentials: true
    }),
    expressMiddleware(server)
);

const PORT = process.env.PORT || 4000;

await new Promise<void>((resolve) => httpServer.listen(PORT, resolve));
console.log(colors.yellow(`Server is running on port : ${PORT}`));