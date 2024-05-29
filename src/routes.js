import { Router } from "express";
import { create,getAll,getNoteById,updateNoteById,removeNoteById } from "./controllers/notes/note.Controller";
import { register} from "./controllers/auth/auth.Controller";
// 
const route = Router()
route.post("/create",create);
route.get("/get/notes",getAll);
route.get("/get/:id",getNoteById);
route.patch("/update/:id",updateNoteById);
route.patch("/remove/:id",updateNoteById);
route.delete("/delete/:id",removeNoteById);

route.post("/user/create",register);



export default route;