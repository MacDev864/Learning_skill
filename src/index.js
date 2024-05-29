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

app.listen(`${process.env.PORT}`,`${process.env.HOST}`,()=>{
    console.log("Server running in host "+`${process.env.HOST}`);
    console.log("Server running in port "+`${process.env.PORT}`);
    mongoose.connect(`${process.env.DBHOST}`)
})