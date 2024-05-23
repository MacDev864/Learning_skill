import { Router } from "express";
import { create,getAll,getNoteById } from "./controllers/notes/note.Controller";

const route = Router()
route.post("/",create);
route.get("/",getAll);
route.get("/:id",getNoteById);


export default route;