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
    select: false,
  },
  role: {
    type: String,
    trim: true,
    lowercase: true,
    enum: ["Admin", "Superadmin", "User"],
    default: "User",
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
UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};
UserSchema.pre('save', async function (next) {
    if (process?.env?.NODE_ENV && process.env.NODE_ENV === 'development') {
      console.log('Middleware called before saving the user is', this);
    }
  
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this;
    if (user.isModified('password')) {
      const salt = await bcrypt.genSalt(12);
      user.password = await bcrypt.hash(user.password, salt);
      user.confirmPassword = await bcrypt.hash(user.password, salt);
    }
    next();
  });
export const UserModel = mongoose.model("Users", UserSchema);
