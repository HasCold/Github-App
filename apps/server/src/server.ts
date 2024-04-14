import { ApolloServer} from '@apollo/server';
// import { startStandaloneServer } from '@apollo/server/standalone';
import colors from "colors";
import gql from 'graphql-tag';
import http from "http";
import express from "express";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import dotenv from "dotenv"
import profileRoute from "./routes/profile.Route"
import connectDB from './config/db';

import './lib/passport'

dotenv.config();
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

async function startServer(){
    await server.start();  // Ensure we wait for our server to start
    await connectDB();

    app.use(express.json());  // To ensure that the request body is parsed before it reaches the GraphQL middleware, you should place the express.json() middleware before expressMiddleware(server).
    app.use(cors({
        origin: "http://localhost:3000", // Replace with your frontend URL
        credentials: true, // You may need this depending on your use case
    }));

    app.use(
        "/graphql",
    expressMiddleware(server)
    );
    
    app.use('/api/userProfileAndRepo', profileRoute);

const PORT = process.env.PORT || 4000;

await new Promise<void>((resolve) => httpServer.listen(PORT, resolve));
console.log(colors.yellow(`Server is running on port : ${PORT}`));
}

startServer();