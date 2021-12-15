import React, { useEffect, useState } from "react";
import BlogOpinion from "./BlogOpinion";
import { useSelector } from "react-redux";
import "./SingleBlog_style.css";
function Blog()
{
    const {post}=useSelector((state)=>state.posts);
    
    return (<div style={{backgroundColor:"#ddeeff",paddingBottom:"20px"}}>
        <div className="singleBlog_title">{post?.title}</div>
        <div className="singleblog_date">Published on Sat Nov 06 2021</div>
        <BlogOpinion customPost={post} user={post?.user} postId={post?._id}/>
        <div className="singleblog_content">
        {post?.content}
        </div>
        <div className="end_line1"></div>
        <div className="writerName">Hemant Gutpa</div>
        <div className="writerPos">Occasional writer, full-time procrastinator</div>
        <div className="end_line2"></div>
    </div>);
}
export default Blog;