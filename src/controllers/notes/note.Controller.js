import createNote from "../../services/notes/note.Service"

export const create = async (req,res) =>{
  const create = await  createNote(req.body);
  if (create.success == false) {
   return res.status(500).send(create)
  }
  return res.status(200).send(create);

}