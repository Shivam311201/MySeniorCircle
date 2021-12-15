import React from "react";
import { Link } from "react-router-dom";
import BlogImage from "../images/BlogImage.jpg";
function BlogBox(props)
{
    const content=props.item?.content?.substr(0,200);
    const path="/blogs/"+props.item._id;
    return (<div>
    <div className="Blog_title">{props.item.title}</div>
    <div className="blog_box">
       <img src={BlogImage} className="blogimg_style"/>
       <div className="Blog_content">{content}... <Link to={path}>Read More</Link> </div> 
    </div>
    </div>);
}
export default BlogBox;