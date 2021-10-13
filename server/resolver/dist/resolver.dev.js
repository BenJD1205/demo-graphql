"use strict";

var resolvers = {
  //Query
  Query: {
    books: function books(parent, args, context) {
      return regeneratorRuntime.async(function books$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(context.mongoDataMethods.getAllBooks());

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    book: function book(parent, _ref, _ref2) {
      var id, mongoDataMethods;
      return regeneratorRuntime.async(function book$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = _ref.id;
              mongoDataMethods = _ref2.mongoDataMethods;
              _context2.next = 4;
              return regeneratorRuntime.awrap(mongoDataMethods.getBookById(id));

            case 4:
              return _context2.abrupt("return", _context2.sent);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    authors: function authors(parent, args, _ref3) {
      var mongoDataMethods;
      return regeneratorRuntime.async(function authors$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              mongoDataMethods = _ref3.mongoDataMethods;
              _context3.next = 3;
              return regeneratorRuntime.awrap(mongoDataMethods.getAllAuthor());

            case 3:
              return _context3.abrupt("return", _context3.sent);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      });
    },
    author: function author(parent, _ref4, _ref5) {
      var id, mongoDataMethods;
      return regeneratorRuntime.async(function author$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = _ref4.id;
              mongoDataMethods = _ref5.mongoDataMethods;
              _context4.next = 4;
              return regeneratorRuntime.awrap(mongoDataMethods.getAuthorById(id));

            case 4:
              return _context4.abrupt("return", _context4.sent);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  },
  Book: {
    author: function author(_ref6, args, _ref7) {
      var authorId, mongoDataMethods;
      return regeneratorRuntime.async(function author$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              authorId = _ref6.authorId;
              mongoDataMethods = _ref7.mongoDataMethods;
              _context5.next = 4;
              return regeneratorRuntime.awrap(mongoDataMethods.getAuthorById(authorId));

            case 4:
              return _context5.abrupt("return", _context5.sent);

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  },
  Author: {
    books: function books(_ref8, args, _ref9) {
      var id, mongoDataMethods;
      return regeneratorRuntime.async(function books$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              id = _ref8.id;
              mongoDataMethods = _ref9.mongoDataMethods;
              _context6.next = 4;
              return regeneratorRuntime.awrap(mongoDataMethods.getAllBooks({
                authorId: id
              }));

            case 4:
              return _context6.abrupt("return", _context6.sent);

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      });
    }
  },
  //Mutation
  Mutation: {
    createAuthor: function createAuthor(parent, args, _ref10) {
      var mongoDataMethods;
      return regeneratorRuntime.async(function createAuthor$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              mongoDataMethods = _ref10.mongoDataMethods;
              _context7.next = 3;
              return regeneratorRuntime.awrap(mongoDataMethods.createAuthor(args));

            case 3:
              return _context7.abrupt("return", _context7.sent);

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      });
    },
    createBook: function createBook(parent, args, _ref11) {
      var mongoDataMethods;
      return regeneratorRuntime.async(function createBook$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              mongoDataMethods = _ref11.mongoDataMethods;
              _context8.next = 3;
              return regeneratorRuntime.awrap(mongoDataMethods.createBook(args));

            case 3:
              return _context8.abrupt("return", _context8.sent);

            case 4:
            case "end":
              return _context8.stop();
          }
        }
      });
    }
  }
};
module.exports = resolvers;