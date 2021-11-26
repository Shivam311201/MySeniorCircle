import React, { useState } from "react";
import BlogOpinion from "./BlogOpinion";
import "./SingleBlog_style.css";
function Blog()
{
    return (<div style={{backgroundColor:"#ddeeff",paddingBottom:"20px"}}>
        <div className="singleBlog_title">Google, London | Placement Interview</div>
        <div className="singleblog_date">Published on Sat Nov 06 2021</div>
        <BlogOpinion/>
        <div className="singleblog_content">
        One of the more popular frugal blogs in the UK, Miss Thrifty is targeting young mums with her money saving, frugal tips and articles. And rightly so! The market is massive and she’s meeting a need for this type of information. Young mums aren’t exactly rolling in cash. They may have had to give up work and are now relying on just one wage coming in, so the need to be more frugal with everyday living is a must.<br/><br/>The great thing about this blog is the conversational tone and the real person behind the brand. I think it’s inspiring to other mums to see someone like them making such a difference in other people’s lives by creating amazingly useful content that is 100% actionable. Also it may inspire mums to set up their own blog and to write about their experiences as a mother and a wife in the 21st century.
        </div>
        <div className="end_line1"></div>
        <div className="writerName">Hemant Gutpa</div>
        <div className="writerPos">Occasional writer, full-time procrastinator</div>
        <div className="end_line2"></div>
    </div>);
}
export default Blog;