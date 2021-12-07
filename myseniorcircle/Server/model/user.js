import mongoose from "mongoose";
const PostSchema=mongoose.Schema({
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
 posts:[PostSchema]   
});
const User =mongoose.model("User",userSchema);
export {User};