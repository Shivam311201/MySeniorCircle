import mongoose from "mongoose";
const BlogSchema=mongoose.Schema({
    title:{type:String},
    content:{type:String},
    posted:{type:Date},
    user:{type:String},
    like:{type:Number},
    Dislike:{type:Number}
});

const userSchema = mongoose.Schema({
 firstname:{type:String},
 lastname:{type:String},
 emailid:{type:String},
 password:{type:String},
 photo:
 {
    data:Buffer,
    contentType:String
 },
 collegeName:{type:String},
 Experience:{type:String},
 Company:{type:String},
});
const User =mongoose.model("User",userSchema);
const Blog=mongoose.model("Post",BlogSchema);
export {User,Blog};