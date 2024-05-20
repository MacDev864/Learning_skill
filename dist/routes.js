"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _note = require("./controllers/notes/note.Controller");
var route = (0, _express.Router)();
route.get("/", _note.create);
var _default = exports["default"] = route;