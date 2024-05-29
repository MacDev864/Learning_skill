import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please provide username"],
    minlength: [6, "Username must be more than 6 characters"],
    maxlength: [30, "Username must be more than 30 characters"],
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: [6, "Password must be more than 6 characters"],
    trim: true,
  },
  /*
  0 => SuperAdmin
  1 => Admin
  2 => User
  3 => User

  
  
  
  */
  role: {
    type: Number,
    enum: [0, 1, 2, 3],
    default: 0,
  },
  status: {
    type: Number,
    enum: [0, 1, 2, 3],
    default: 0,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});


const UserModel = mongoose.model("Users", UserSchema);
 export default UserModel;