"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAuthors = exports.getSingleBook = exports.getBooks = void 0;

var _client = require("@apollo/client");

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    query getAuthorsQuery{\n        authors{\n            id\n            name\n        }\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    query getSingleBookQuery($id:ID!){\n        book(id:$id){\n            id\n            name\n            genre\n            author{\n                id\n                name\n                books{\n                    id\n                    name\n                }\n            }\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    query getBooksQuery{\n        books{\n            name\n            id\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getBooks = (0, _client.gql)(_templateObject());
exports.getBooks = getBooks;
var getSingleBook = (0, _client.gql)(_templateObject2());
exports.getSingleBook = getSingleBook;
var getAuthors = (0, _client.gql)(_templateObject3());
exports.getAuthors = getAuthors;