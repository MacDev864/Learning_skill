import mongoose, { Types } from "mongoose";
import UserModel from "../../models/users.model";
export const registers = async (userdata) => {
  let { username } = userdata;
  const isNameExit = await UserModel.find({username:username})
//   const isTitleExit = await UserModel.findOne({
//     username: new RegExp(`^${username}$`, "i"),
//   });
console.log(isNameExit);
  // if (isTitleExit) {
  //   return {
  //     data: isTitleExit,
  //     message: `Title address ${username} is already exists, please pick a different one.`,
  //     success: false,
  //     error: true,
  //   };
  // }

  // const user = new UserModel(userdata);
  // user.save();

  // return {
  //   data: user,
  //   message: "create succesfully",
  //   success: true,
  //   error: false,
  // };
};
export const getAllNotes = async (query) => {
  let baseQuery = {};

  const page = query.page || 1;
  const size = query.size || 25;
  if (query.status) {
    baseQuery = {
      ...baseQuery,
      ...{
        status: query.status,
      },
    };
  }
  if (query.tag) {
    baseQuery = {
      ...baseQuery,
      ...{
        tag: query.tag,
      },
    };
  }
  if (query.condition == "or") {
    baseQuery = {
      $or: Object.entries(baseQuery).map(([key, value]) => ({
        [key]: value,
      })),
    };
  }
  // baseQuery = {
  //   ...baseQuery,
  //   ...{
  //     isDeleted: 0,
  //   },
  // };
  console.log(baseQuery, {
    baseQuery,
  });
  const notes = await NoteModel.find(baseQuery)
    .skip((page - 1) * size)
    .limit(size)
    .exec();

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
  const note = await NoteModel.findById(id);

  if (!note || note.isDeleted == 1) {
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
};
export const updateNotesById = async (id, data) => {
  if (data.status > 3 || data.tag > 6) {
    return {
      data: {},
      message: "Please Check data to grater",
      success: false,
      error: true,
    };
  }
  await NoteModel.findByIdAndUpdate(id, data);
  const note = await NoteModel.findById(id);

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
};
export const deleteNoteById = async (id, data) => {
  let note = await NoteModel.findByIdAndDelete(id);

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
};
export const removesNoteById = async (id, data) => {
  await NoteModel.findByIdAndUpdate(id, data);

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
};
