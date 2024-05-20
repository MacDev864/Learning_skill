import mongoose, { Schema } from "mongoose";

const NoteSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true,
    },
    tag:{
        type:String,
        require:false,
        enum:["computer","thing","sports","animal","social","politics","etc",],
        default:"computer"
    },
    status:{
        type:String,
        require:false,
        enum:["in-progress","completed","blacklog","canceled"],
        default:"in-progress"
    }
});
export const NoteModel =  mongoose.model("Note",NoteSchema)