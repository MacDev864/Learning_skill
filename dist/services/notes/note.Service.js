"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _note = require("../../models/note.model");
function createNote(notedata) {
  var title = notedata.title,
    description = notedata.description,
    status = notedata.status,
    tag = notedata.tag;
  if (title == "") {
    return {
      data: {},
      message: "Please fill in information",
      success: false,
      error: true
    };
  }
  var newnote = new _note.NoteModel(notedata);
  return {
    data: newnote.save(),
    message: "create succesfully",
    success: true,
    error: false
  };
}
var _default = exports["default"] = createNote;