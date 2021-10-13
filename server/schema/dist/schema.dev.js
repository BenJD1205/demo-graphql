"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    type Book{\n        id:ID,\n        name:String,\n        genre:String,\n        author:Author,\n    }\n\n    type Author{\n        id:ID!,\n        name:String,\n        age:Int,\n        books:[Book]\n    }\n    \n    #ROOT TYPE\n    type Query{\n        books:[Book]\n        book (id:ID!):Book\n        authors:[Author],\n        author (id:ID!): Author\n    }\n\n    type Mutation{\n        createAuthor( name:String, age:Int): Author,\n        createBook(name:String, genre:String, authorId:ID!):Book\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require('apollo-server-express'),
    gql = _require.gql;

var typeDefs = gql(_templateObject());
module.exports = typeDefs;