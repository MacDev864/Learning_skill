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
      /* 
    0 = "computer"
    1 =  "thing"
    2 =  "sports"
    3 =  "animal"
    4 =  "social"
    5 =  "politics"
    6 =  "etc"
  
     */
    tag:{
        type:Number,
        require:false,
        enum:[0,1,2,3,4,5,6],
        default:0
    },
    /* 
    0 = กำลังทำ,
    1 = สำเร็จ
    2 = ส่งกลับ
    3 = ยกเลิก
     */
    status:{
        type:Number,
        enum:[0,1,2,3],
        default:0
    }
    ,
    isDeleted: {
        type: Boolean,
        default: false,
      },

});
export const NoteModel =  mongoose.model("Note",NoteSchema)
