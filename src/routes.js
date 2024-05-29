import { Router } from "express";
import { create,getAll,getNoteById,updateNoteById,removeNoteById } from "./controllers/notes/note.Controller";
import { login, logout, register} from "./controllers/auth/auth.Controller";
// 
const route = Router()
/*----------------------------------------Note------------------------------------- */
route.post("/create",create);
route.get("/get/notes",getAll);
route.get("/get/:id",getNoteById);
route.patch("/update/:id",updateNoteById);
route.patch("/remove/:id",updateNoteById);
route.delete("/delete/:id",removeNoteById);
/*----------------------------------------------------------------------------------*/














/*----------------------------------------Auth------------------------------------- */
route.post("/register",register);
route.post("/login",login);
route.post("/logout",logout);
/*----------------------------------------------------------------------------------*/




export default route;