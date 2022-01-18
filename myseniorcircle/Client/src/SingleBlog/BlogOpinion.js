import React from "react";
import { useSelector } from "react-redux";
import "./SingleBlog_style.css";
import ReviewButton from "./ReviewButtons";

function BlogOpinion(props)
{
  const {post}=useSelector((state)=>state.posts);

  return (<div style={{display:"flex"}}>
  <img className="singleblog_img" src={post.blogphoto}/>
  {props.winWidth>750&&<div className="button_grp">
    <ReviewButton postId={props.postId} user={props.user} myRef={props.myRef}/>
  </div>}
  </div>);
}
export default BlogOpinion;
