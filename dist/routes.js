"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _note = require("./controllers/notes/note.Controller");
var route = (0, _express.Router)();
route.post("/", _note.create);
route.get("/", _note.getAll);
route.get("/:id", _note.getNoteById);
var _default = exports["default"] = route;