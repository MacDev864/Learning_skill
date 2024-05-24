import bodyParser from "body-parser";
import express from "express";
import route from "./routes";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config()

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use("/api/v1",route)

app.listen(3000,()=>{
    console.log(`${process.env.HOST}`);
    mongoose.connect(`${process.env.DBHOST}`)
})