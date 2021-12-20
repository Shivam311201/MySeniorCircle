import React from "react";
import Blog from "./blog";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router";
import { fetchblogbyid, getuser } from "../Actions/user";
import { useDispatch,useSelector } from "react-redux";
function SingleBlog_flow()
{
    const {id}=useParams();
    const dispatch=useDispatch();
    dispatch(fetchblogbyid(id));
    const {post}=useSelector((state)=>state.posts);
    const searchId=post?.user;
    if(searchId)
    dispatch(getuser(searchId));
    
    return (<div>
        <Navbar/>
        <Blog post={post}/>
        <Footer/>
    </div>);
}
export default SingleBlog_flow;