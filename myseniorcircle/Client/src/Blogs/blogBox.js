import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchblogbyid, getuser } from "../Actions/user";
import BlogImage from "../images/BlogImage.jpg";
function BlogBox(props)
{
    const content=props.item?.content?.substr(0,204);
    const path="/blogs/userid/"+props.item.user+"/blogid/"+props.item._id;
    const navigator=useNavigate();
    const dispatch=useDispatch();
    const RedirectToBlog=()=>
    {
        dispatch(fetchblogbyid(props.item._id));
        dispatch(getuser(props.item.user));
        navigator(path);
    }
    return (<div>
    <div className="Blog_title">{props.item.title}</div>
    <div className="blog_box">
       <img src={props.item.blogphoto} className="blogimg_style"/>
       <div className="Blog_content">{content}... <div className="readMore" onClick={()=>RedirectToBlog()}>Read More</div> </div> 
    </div>
    </div>);
}
export default BlogBox;