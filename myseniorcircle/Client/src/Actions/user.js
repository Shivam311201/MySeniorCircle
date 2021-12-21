import {AUTH,FETCH_ALL,CREATE, FETCHSINGLE_POST, DELETE_POST, LIKE_POST, GET_USER, COMMENT_POST} from "../constants/actionTypes";
import * as api from "../api/index";
export const signin=(form,navigator)=> async (dispatch)=>
{
    try {
        const data= await api.signIn(form);
        dispatch({type:AUTH,data});
        navigator("/");
    } catch (error) {
        const code=error.response.status;
        if(code===400)
        alert("Invalid Credentials !!\nTry again.");
        else if(code===404){
        alert("User doesn't exist !!\nPlease sign up.");
        navigator("/signup");
        }
    }
};
export const signup=(form,navigator)=> async (dispatch)=>
{
    try {
        const data=await api.signUp(form);
        dispatch({type:AUTH,data});
        navigator("/");
    } catch (error) {
        console.log(error);
    }
};
export const updateuser=(form)=> async(dispatch)=>
{
    try {
        const data=await api.UpdateUser(form);
        dispatch({type:AUTH,data});
    } catch (error) {
        console.log(error);
    }
}
export const getuser=(id)=> async(dispatch)=>
{
    try {
        const user=await api.GetUser(id);
        await dispatch({type:GET_USER,payload:user.data});
    } catch (error) {
        console.log(error);
    }
}
export const addblog=(form,navigator)=> async (dispatch)=>
{
    try {
        const blog= await api.addBlog(form);
        dispatch({type:CREATE,payload:blog.data});
        navigator("/");
    } catch (error) {
        console.log(error);
    }
}
export const fetchblogs=()=> async (dispatch) =>
{
    try {
        const blogs=await api.fetchBlogs();
        dispatch({type:FETCH_ALL,payload:blogs.data});
    } catch (error) {
        console.log(error);
    }
}
export const fetchblogbyid=(id)=> async(dispatch) =>
{
    try {
        const blog=await api.fetchBlogById(id);
        await dispatch({type:FETCHSINGLE_POST,payload:blog.data});
    } catch (error) {
        console.log(error);
    }
}
export const deletepost=(id,navigator)=> async(dispatch)=>
{
    try {
        await api.DeletePost(id);
        dispatch({type:DELETE_POST,payload:id});
        navigator("/blogs");
    } catch (error) {
       console.log(error); 
    }
}
export const likepost=(id)=> async(dispatch)=>
{
    try {
        const post=await api.LikePost(id);
        dispatch({type:LIKE_POST,payload:post.data});
    } catch (error) {
       console.log(error); 
    }
}
export const commentpost=(id,form)=> async(dispatch)=>
{
    try {
        const post=await api.CommentPost(id,form);
        dispatch({type:COMMENT_POST,payload:post.data});
    } catch (error) {
       console.log(error); 
    }
}