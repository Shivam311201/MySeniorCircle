import React, {useState} from "react";
import BlogImage from "../images/BlogImage.jpg";
import { faThumbsUp,faThumbsDown,faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SingleBlog_style.css";
function BlogOpinion()
{
  const[like,setlike]=useState(false);
  const[dislike,setDislike]=useState(false);

  return (<div style={{display:"flex"}}>
  <img className="singleblog_img" src={BlogImage}/>
  <div className="button_grp">
      <div className="like_but">
      <FontAwesomeIcon className="like_icon" onClick={()=>{setlike(!like);setDislike(false);}} style={{color:like?"#ff6347":""}} size="2x" icon={faThumbsUp}/>
      &nbsp;<div className="like_cnt">+4 others</div>
      <div className="but_title">&nbsp;&nbsp;Like</div>
      </div>
      <div className="dislike_but">
      <FontAwesomeIcon className="dislike_icon" onClick={()=>{setDislike(!dislike);setlike(false);}} style={{color:dislike?"#3cb371":""}} size="2x" icon={faThumbsDown}/>
      &nbsp;<div className="dislike_cnt">+4 others</div>
      <div className="but_title">Dislike</div>
      </div>
      <div className="delete_but">
      <FontAwesomeIcon className="delete_icon" size="2x" icon={faTrash}/>
      <div className="but_title">Delete</div>
      </div>
  </div>
  </div>);
}
export default BlogOpinion;
