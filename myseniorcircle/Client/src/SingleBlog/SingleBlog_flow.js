import React from "react";
import Blog from "./blog";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchblogbyid, getuser } from "../Actions/user";

function SingleBlog_flow(props)
{
    let [searchParams, setSearchParams] = useSearchParams();
    const userid=searchParams.get("user");
    const blogid=searchParams.get("blog");

    const dispatch=useDispatch();
    dispatch(fetchblogbyid(blogid));
    dispatch(getuser(userid));
    window.scrollTo(0,0);
    
    return (<div>
        <Navbar/>
        <Blog/>
        <Footer/>
    </div>);
}
export default SingleBlog_flow;