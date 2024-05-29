"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _note = require("./controllers/notes/note.Controller");
var _auth = require("./controllers/auth/auth.Controller");
// 
var route = (0, _express.Router)();
/*----------------------------------------Note------------------------------------- */
route.post("/create", _note.create);
route.get("/get/notes", _note.getAll);
route.get("/get/:id", _note.getNoteById);
route.patch("/update/:id", _note.updateNoteById);
route.patch("/remove/:id", _note.updateNoteById);
route["delete"]("/delete/:id", _note.removeNoteById);
/*----------------------------------------------------------------------------------*/

/*----------------------------------------Auth------------------------------------- */
route.post("/register", _auth.register);
route.post("/login", _auth.login);
route.post("/logout", _auth.logout);
/*----------------------------------------------------------------------------------*/
var _default = exports["default"] = route;