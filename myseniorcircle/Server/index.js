import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app=express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

const CONNECTION_URL="mongodb+srv://Shivam:alibaba2001@cluster0.dlwd2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT=4000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> app.listen(PORT,()=>console.log("Server running at port: "+PORT)))
.catch((error)=>console.log(error.message));