import React from "react";
import Blog from "./blog";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router";
import { fetchblogbyid } from "../Actions/user";
import { useDispatch } from "react-redux";
function SingleBlog_flow()
{
    const {id}=useParams();
    const dispatch=useDispatch();
    dispatch(fetchblogbyid(id));
    return (<div>
        <Navbar/>
        <Blog/>
        <Footer/>
    </div>);
}
export default SingleBlog_flow;