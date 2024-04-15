// import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloServer } from '@apollo/server';
import colors from "colors";
import http from "http";
import express from "express";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import dotenv from "dotenv"
import profileRoute from "./routes/profile.Route";
import authRoute from "./routes/auth.Route";
import connectDB from './config/db';
import './lib/passport'
import passport from 'passport';
import session from "express-session";
import { buildContext } from 'graphql-passport';
import mergedResolvers from './graphQL/resolvers';
import mergedTypeDefs from './graphQL/typeDefs';

dotenv.config();
const app = express();

const httpServer = http.createServer(app);  // So, we're not creating the server twice for the same purpose. Instead, we're using Express to define our routes and middleware in a more expressive way, and then we're using the http module to create the underlying HTTP server instance that Apollo Server needs to integrate with

const server = new ApolloServer({
    typeDefs: mergedTypeDefs,
    resolvers: mergedResolvers,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})]
});

async function startServer(){
    await server.start();  // Ensure we wait for our server to start
    await connectDB();
    
    app.use(express.json());  // To ensure that the request body is parsed before it reaches the GraphQL middleware, you should place the express.json() middleware before expressMiddleware(server).
    app.use(cors());   
    app.use(
        "/graphql",
        expressMiddleware(server, {
            context: async ({req, res}) => buildContext({req, res})
        })
        );
        app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
        // Initialize Passport!  Also use passport.session() middleware, to support
        // persistent login sessions (recommended).
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(express.static(__dirname + '/public'));

    app.use("/api/auth", authRoute);
    app.use('/api/userProfileAndRepo', profileRoute);

const PORT = process.env.PORT || 4000;

await new Promise<void>((resolve) => httpServer.listen(PORT, resolve));
console.log(colors.yellow(`Server is running on port : ${PORT}`));
}

startServer();