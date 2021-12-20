import mongoose from "mongoose";
const BlogSchema=mongoose.Schema({
    title:{type:String},
    content:{type:String},
    posted:{type:String},
    user:{type:String},
    tags:{type:[String]},
    like:{type:[String],default:[]},
    comments:{type:[String],default:[]}
});

const userSchema = mongoose.Schema({
 firstname:{type:String,required:true},
 lastname:{type:String,required:true},
 emailid:{type:String,required:true}, 
 password:{type:String,required:true},
 photo:String,
 collegeName:{type:String},
 Experience:{type:String},
 Company:{type:String},
});
const User =mongoose.model("User",userSchema);
const Blog=mongoose.model("Post",BlogSchema);
export {User,Blog};