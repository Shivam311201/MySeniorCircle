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