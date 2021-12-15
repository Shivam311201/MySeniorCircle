import { User,Blog } from "../model/user.js";

export const addBlog= async(req,res)=>{

    const newBlog = new Blog(req.body);
    try {
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const fetchAllblogs =async(req,res)=>{

    try {
        const allBlogs=await Blog.find();
        res.status(200).json(allBlogs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const fetchCustomBlog =async(req,res)=>{
    const {id}=req.params;
    try {
        const MyBlog=await Blog.findById(id);
        res.status(200).json(MyBlog);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteCustomBlog=async(req,res)=>{
    const {id}=req.params;
    try {
        await Blog.findByIdAndRemove(id);
        res.json({message:"Post deleted successfully."});        
    } catch (error) {
        res.status(404).json({ message: error.message });
    } 
}

export const LikeCustomBlog=async(req,res)=>{
    const {id}=req.params;
    
    const post=await Blog.findById(id);
    const updatedPost = await Blog.findByIdAndUpdate(id, { like: post.like + 1 }, { new: true });

    res.json(updatedPost);
}

export const DislikeCustomBlog=async(req,res)=>{
    const {id}=req.params;
    
    const post=await Blog.findById(id);
    const updatedPost = await Blog.findByIdAndUpdate(id, { dislike: post.dislike + 1 }, { new: true });

    res.json(updatedPost);
}
