import React from "react";
import Blog from "./blog";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchblogbyid, getuser } from "../Actions/user";
function SingleBlog_flow()
{
    const {user,blog}=useParams();
    const dispatch=useDispatch();
    dispatch(fetchblogbyid(blog));
    dispatch(getuser(user));
    window.scrollTo(0,0);
    return (<div>
        <Navbar/>
        <Blog/>
        <Footer/>
    </div>);
}
export default SingleBlog_flow;