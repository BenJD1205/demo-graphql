"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSingleAuthor = exports.addSingleBook = void 0;

var _client = require("@apollo/client");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    mutation addSingleAuthorMutation($name:String,$age:Int){\n        createAuthor(name:$name,age:$age){\n            id\n            name\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    mutation addSingleBookMutation($name:String,$genre:String,$authorId:ID!){\n        createBook(name:$name, genre:$genre, authorId:$authorId){\n            id\n            name\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var addSingleBook = (0, _client.gql)(_templateObject());
exports.addSingleBook = addSingleBook;
var addSingleAuthor = (0, _client.gql)(_templateObject2());
exports.addSingleAuthor = addSingleAuthor;