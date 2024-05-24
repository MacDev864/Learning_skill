import mongoose, { Types } from "mongoose";
import { NoteModel } from "../../models/note.model";
export const createNote = async (notedata) => {
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
  const notes = await NoteModel.find({isDeleted:0}).exec();

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
/*
export const findNoteById = async (id) => {
  const notes = await NoteModel.find({id:id}).exec();
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
  return {
    data: obj,
    message: "",
    success: true,
    error: false,
  };
};
*/
export const findNoteById = async (id) => {
  const note = await NoteModel.findById(id)

  if (!note || note.isDeleted == 1) {
    return {
      data:{},
      message: "",
      success: false,
      error: true,
    };
  }
  return {
    data: note,
    message: "",
    success: true,
    error: false,
  };
}
export const updateNotesById = async(id,data)=>{
  if (data.status > 3 || data.tag > 6) {
    return {
      data: {},
      message: "Please Check data to grater",
      success: false,
      error: true,
    };
  }
 await  NoteModel.findByIdAndUpdate(id,data);
 const note = await NoteModel.findById(id)

  if (!note) {
    return {
      data: {},
      message: "",
      success: false,
      error: true,
    };
  }
  return {
    data: note,
    message: "",
    success: true,
    error: false,
  };
}
export const deleteNoteById = async(id,data)=>{
  let note = await  NoteModel.findByIdAndDelete(id);
 
   if (!note) {
     return {
       data: {},
       message: "",
       success: false,
       error: true,
     };
   }
   return {
     data: note,
     message: "",
     success: true,
     error: false,
   };
 }
 export const removesNoteById = async(id,data)=>{
  await  NoteModel.findByIdAndUpdate(id,data);
 
   if (!note) {
     return {
       data: {},
       message: "",
       success: false,
       error: true,
     };
   }
   return {
     data: note,
     message: "",
     success: true,
     error: false,
   };
 }