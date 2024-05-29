import mongoose, { Schema } from "mongoose";

const TokenSchema = new Schema({
    
        userId: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: 'User',
        },
    
        accessToken: {
          type: String,
          required: false,
        },
        refreshToken: {
          type: String,
          required: false,
        },
},{ timestamps: true });
const TokenModel = mongoose.model("Token", TokenSchema);
 export default TokenModel;