import React, {useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import BlogImage from "../images/BlogImage.jpg";
import { faThumbsUp,faThumbsDown,faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SingleBlog_style.css";
import { useNavigate } from "react-router-dom";
import { deletepost, dislikepost, likepost } from "../Actions/user";
function BlogOpinion(props)
{
  const {post}=useSelector((state)=>state.posts);
  const [like,setlike]=useState(false);
  const [dislike,setDislike]=useState(false);
  const dispatch=useDispatch();
  
  const val=JSON.parse(window.localStorage.getItem("profile"));
  const curUser=val?.data.user._id;
  const navigator=useNavigate();

  return (<div style={{display:"flex"}}>
  <img className="singleblog_img" src={BlogImage}/>
  <div className="button_grp">
      
      <div className="like_but">
      <FontAwesomeIcon className="like_icon" onClick={()=>{
        setlike(!like);
        post.like+=1;
        dispatch(likepost(props.postId))
        }} style={{color:like?"#ff6347":""}} size="2x" icon={faThumbsUp}/>
      &nbsp;<div className="like_cnt">+{post?.like} others</div>
      <div className="but_title">&nbsp;&nbsp;Like</div>
      </div>

      <div className="dislike_but">
      <FontAwesomeIcon className="dislike_icon" onClick={()=>{
        setDislike(!dislike); 
        post.dislike+=1;
        dispatch(dislikepost(props.postId))
        }} style={{color:dislike?"#3cb371":""}} size="2x" icon={faThumbsDown}/>
      &nbsp;<div className="dislike_cnt">+{post?.dislike} others</div>
      <div className="but_title">Dislike</div>
      </div>
      
      {(curUser===props.user)&&<div className="delete_but">
      <FontAwesomeIcon className="delete_icon" size="2x" icon={faTrash} onClick={()=>dispatch(deletepost(props.postId,navigator))}/>
      <div className="but_title">Delete</div>
      </div>}
  </div>
  </div>);
}
export default BlogOpinion;
