import {
  createNote,
  getAllNotes,
  findNoteById,
  updateNotesById,deleteNoteById,removesNoteById
} from "../../services/notes/note.Service";

export const create = async (req, res) => {
  try {
    const create = await createNote(req.body);
  let status = create.success ? 200 :404;
  return res.status(status).send(create);
  } catch (error) {
    return res.status(500).send({
      data: error.reason,
      message:error.message,
      success: false,
      error: true,
    });
  }
};
export const getAll = async (req, res) => {
 try {
  const notes = await getAllNotes(req.query);
  let status = notes.success ? 200 :404;
  return res.status(status).send(notes);
 } catch (error) {
  return res.status(500).send({
    data: error.reason,
    message:error.message,
      success: false,
      error: true,
    });
  
 }
};
export const getNoteById = async (req, res) => {
 try {
  const id = req.params.id;
  if (!id) {
    return res.status(404).send({
      data: {},
      message: "",
      success: false,
      error: true,
    });
  }

  const note = await findNoteById(id);
  const status = note.success ? 200 : 404;
  return res.status(status).send(note);
 } catch (error) {
  return res.status(500).send({
    data: error.reason,
    message:error.message,
      success: false,
      error: true,
    });
  
 }
};
export const updateNoteById = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    if (!id) {
      return res.status(404).send({
        data: {},
        message: "",
        success: false,
        error: true,
      });
    }
    const note = await updateNotesById(id,body);
    let status = note.success ? 200 :404;
    return res.status(status).send(note);
  } catch (error) {
  return res.status(500).send({
    data: error.reason,
    message:error.message,
      success: false,
      error: true,
    });
    
  }
};
export const softdeleteNoteById = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    if (!id) {
      return res.status(404).send({
        data: {},
        message: "",
        success: false,
        error: true,
      });
    }
    const note = await removesNoteById(id,body);
    let status = note.success ? 200 :404;
    return res.status(status).send(note);
  } catch (error) {
  return res.status(500).send({
    data: error.reason,
    message:error.message,
      success: false,
      error: true,
    });
    
  }
};
export const removeNoteById = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    if (!id) {
      return res.status(404).send({
        data: {},
        message: "",
        success: false,
        error: true,
      });
    }
    const note = await deleteNoteById(id);
    let status = note.success ? 200 :404;
    return res.status(status).send(note);
  } catch (error) {
  return res.status(500).send({
    data: error.reason,
    message:error.message,
      success: false,
      error: true,
    });
    
  }
};
