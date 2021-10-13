const express = require('express'), http = require('http'), path = require('path');
const {ApolloServer} = require('apollo-server-express');
const mongoose = require('mongoose');

async function startExpressApolloServer(){

    //Load schema & resolvers
    const typeDefs = require('./schema/schema');
    const resolvers = require('./resolver/resolver');

    //Load db methods
    const mongoDataMethods = require('./data/db');

    //connect mongoose
    const connectDB = async () => {
        try{
            await mongoose.connect('mongodb+srv://ben:ben@mini-project-grapql.sqdpo.mongodb.net/bookstore?retryWrites=true&w=majority', {
                useNewUrlParser: true,
                useUnifiedTopology: true,

            })
            console.log('Database connected');
        }catch(error){
            console.log(error.message)
            process.exit(1)
        }
    }

    connectDB()
    
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context:() => ({mongoDataMethods})
    })
    
    await server.start();
    
    const app = express();
    server.applyMiddleware({app})
    
    // app.listen({port:4000},() => {
    //     console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    // })
    await new Promise(resolve => app.listen({ port: 4000 }, resolve));
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
    return { server, app };
}

startExpressApolloServer();