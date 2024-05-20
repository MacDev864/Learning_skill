import { NoteModel } from "../../models/note.model";

function createNote(notedata) {
    let {title,description,status,tag,} = notedata;
    if (title == "") {
        return {
            data:{},
            message:"Please fill in information",
            success:false,
            error:true
        }
    }
    const newnote = new NoteModel(notedata)
   
    return {
        data: newnote.save(),
        message:"create succesfully",
        success:true,
        error:false
    };
}
export default createNote;