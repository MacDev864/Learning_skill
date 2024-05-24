import { Router } from "express";
import { create,getAll,getNoteById,updateNoteById,removeNoteById } from "./controllers/notes/note.Controller";

const route = Router()
route.post("/create",create);
route.get("/get/notes",getAll);
route.get("/get/:id",getNoteById);
route.patch("/update/:id",updateNoteById);
route.patch("/remove/:id",updateNoteById);
route.delete("/delete/:id",removeNoteById);


export default route;