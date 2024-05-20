import { Router } from "express";
import { create } from "./controllers/notes/note.Controller";

const route = Router()
route.get("/",create);


export default route;