import mongoose, { Types } from "mongoose";
import { NoteModel } from "../../models/note.model";
export const createNote = async () => {
  let { title, description, status, tag } = notedata;
  const isTitleExit = await NoteModel.findOne({
    title: new RegExp(`^${title}$`, "i"),
  });

  if (isTitleExit) {
    return {
      data: isTitleExit,
      message: `Title address ${title} is already exists, please pick a different one.`,
      success: false,
      error: true,
    };
  }

  const newnote = new NoteModel(notedata);
  newnote.save();
  return {
    data: newnote,
    message: "create succesfully",
    success: true,
    error: false,
  };
};
export const getAllNotes = async () => {
  const notes = await NoteModel.find().exec();

  if (notes.length > 0) {
    return {
      data: notes,
      message: "",
      success: true,
      error: false,
    };
  }
  return {
    data: [],
    message: "",
    success: false,
    error: true,
  };
};
export const findNoteById = async (id) => {
  const notes = await NoteModel.find().exec();
  var obj;
  let note = notes.map((item, index) => {
    // console.log(item);
    let result = item.id == id ? obj = item :null;

   
    return  result;
  });

  if (!note) {
    return {
      data: [],
      message: "",
      success: false,
      error: true,
    };
  }
  console.log(obj);
  return {
    data: obj,
    message: "",
    success: true,
    error: false,
  };
};
