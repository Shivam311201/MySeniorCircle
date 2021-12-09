import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import postRoutes from "./Routes/post.js";
import userRoutes from "./Routes/user.js";
import authRoutes from "./Routes/auth.js";

const app=express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

const CONNECTION_URL="mongodb+srv://Shivam:Shvam123@cluster0.dlwd2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT=4000;

app.use("/",authRoutes);
// app.use("/",postRoutes);
app.use("/users/profile",userRoutes);

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> app.listen(PORT,()=>console.log("Server running at port: "+PORT)))
.catch((error)=>console.log(error.message));