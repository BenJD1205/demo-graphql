"use strict";

var Book = require('../models/Book');

var Author = require('../models/Author');

var mongoDataMethods = {
  getAllBooks: function getAllBooks() {
    var condition,
        _args = arguments;
    return regeneratorRuntime.async(function getAllBooks$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            condition = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;

            if (!(condition === null)) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return regeneratorRuntime.awrap(Book.find());

          case 4:
            _context.t0 = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.next = 9;
            return regeneratorRuntime.awrap(Book.find(condition));

          case 9:
            _context.t0 = _context.sent;

          case 10:
            return _context.abrupt("return", _context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  getBookById: function getBookById(id) {
    return regeneratorRuntime.async(function getBookById$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(Book.findById(id));

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  getAllAuthor: function getAllAuthor() {
    return regeneratorRuntime.async(function getAllAuthor$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(Author.find());

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  getAuthorById: function getAuthorById(id) {
    return regeneratorRuntime.async(function getAuthorById$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(Author.findById(id));

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    });
  },
  createAuthor: function createAuthor(args) {
    var newAuthor;
    return regeneratorRuntime.async(function createAuthor$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            newAuthor = new Author(args);
            _context5.next = 3;
            return regeneratorRuntime.awrap(newAuthor.save());

          case 3:
            return _context5.abrupt("return", _context5.sent);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    });
  },
  createBook: function createBook(args) {
    var newBook;
    return regeneratorRuntime.async(function createBook$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            newBook = new Book(args);
            _context6.next = 3;
            return regeneratorRuntime.awrap(newBook.save());

          case 3:
            return _context6.abrupt("return", _context6.sent);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    });
  }
};
module.exports = mongoDataMethods;