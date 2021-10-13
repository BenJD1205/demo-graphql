"use strict";

var express = require('express'),
    http = require('http'),
    path = require('path');

var _require = require('apollo-server-express'),
    ApolloServer = _require.ApolloServer;

var mongoose = require('mongoose');

function startExpressApolloServer() {
  var typeDefs, resolvers, mongoDataMethods, connectDB, server, app;
  return regeneratorRuntime.async(function startExpressApolloServer$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          //Load schema & resolvers
          typeDefs = require('./schema/schema');
          resolvers = require('./resolver/resolver'); //Load db methods

          mongoDataMethods = require('./data/db'); //connect mongoose

          connectDB = function connectDB() {
            return regeneratorRuntime.async(function connectDB$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return regeneratorRuntime.awrap(mongoose.connect('mongodb+srv://ben:ben@mini-project-grapql.sqdpo.mongodb.net/bookstore?retryWrites=true&w=majority', {
                      useNewUrlParser: true,
                      useUnifiedTopology: true
                    }));

                  case 3:
                    console.log('Database connected');
                    _context.next = 10;
                    break;

                  case 6:
                    _context.prev = 6;
                    _context.t0 = _context["catch"](0);
                    console.log(_context.t0.message);
                    process.exit(1);

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, null, null, [[0, 6]]);
          };

          connectDB();
          server = new ApolloServer({
            typeDefs: typeDefs,
            resolvers: resolvers,
            context: function context() {
              return {
                mongoDataMethods: mongoDataMethods
              };
            }
          });
          _context2.next = 8;
          return regeneratorRuntime.awrap(server.start());

        case 8:
          app = express();
          server.applyMiddleware({
            app: app
          }); // app.listen({port:4000},() => {
          //     console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
          // })

          _context2.next = 12;
          return regeneratorRuntime.awrap(new Promise(function (resolve) {
            return app.listen({
              port: 4000
            }, resolve);
          }));

        case 12:
          console.log("Server ready at http://localhost:4000".concat(server.graphqlPath));
          return _context2.abrupt("return", {
            server: server,
            app: app
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  });
}

startExpressApolloServer();