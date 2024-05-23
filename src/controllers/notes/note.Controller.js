import { createNote, getAllNotes ,findNoteById} from "../../services/notes/note.Service";

export const create = async (req, res) => {
  const create = await createNote(req.body);
  let status = create.success ? 200:500;
  return res.status(status).send(create);

};
export const getAll = async (req, res) => {
  const notes = await getAllNotes();
  let status = notes.success ? 200:500;
  return res.status(status).send(notes);
};
export const getNoteById = async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  if (!id) {
    return res.status(500).send(   {
      data:[],
      message:"",
      success:false,
      error:true
  })
  }

  const note = await findNoteById(id);
  let status = note.success ? 200:500;
  return res.status(status).send(note);
};
