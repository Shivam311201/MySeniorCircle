import axios from "axios";
const API=axios.create({baseURL:"http://localhost:4000"});

export const signIn=(formData)=>API.post(`/signin`,formData);
export const signUp=(formData)=>API.post(`/signup`,formData);
export const fetchBlogs=()=>API.get(`/blogs`);
export const addBlog=(formData)=>API.post(`/users/profile/addblog`,formData);
export const fetchBlogById=(id)=>API.get(`/blogs/${id}`);
export const DeletePost=(id)=>API.delete(`/blogs/${id}`);
export const LikePost=(id)=>API.patch(`/blogs/like/${id}`);
export const DislikePost=(id)=>API.patch(`/blogs/dislike/${id}`);