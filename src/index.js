import bodyParser from "body-parser";
import express from "express";
import route from "./routes";
import mongoose from "mongoose";



const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use("/api/v1",route)

app.listen(3000,()=>{
    console.log("http//localhost::3000");
    mongoose.connect("mongodb+srv://conan00789:IhurzCFdPhOGlJ1D@cluster0.qqwoofi.mongodb.net/learning_skill_Api")
})