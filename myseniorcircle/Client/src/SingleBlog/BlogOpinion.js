import React, {useEffect, useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import BlogImage from "../images/BlogImage.jpg";
import { faThumbsUp,faTrash,faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SingleBlog_style.css";
import { useNavigate } from "react-router-dom";
import { deletepost, likepost } from "../Actions/user";
function BlogOpinion(props)
{
  const {post}=useSelector((state)=>state.posts);
  const val=JSON.parse(window.localStorage.getItem("profile"));
  const curUser=val?.data.result._id;
  const dispatch=useDispatch();
  const navigator=useNavigate();

  var isPresent=false;
  if(post.like?.length!==0)
  post.like?.map((ele)=>{
    if(ele===curUser)
    isPresent=true;
  });
  
  const [like,setlike]=useState(post.like);
  const [present,setPresent]=useState(isPresent);
  const Val=(like?.length)-1;

  useEffect(()=>{
    setlike(post.like);
    setPresent(isPresent);
  },[post.like,isPresent]);

  function handleLike(){  
    if(!curUser)
    {
      alert("Please Login !!");
      navigator('/login');
    }
    dispatch(likepost(props.postId));
    console.log(present);
    if (present) {
      console.log("1");
      setlike(like?.filter((id) => id !== curUser));
    } else {
      console.log("2");
      setlike([...like, curUser]);
    }
    setPresent(!present);
  }

  return (<div style={{display:"flex"}}>
  <img className="singleblog_img" src={BlogImage}/>
  <div className="button_grp">
      
      <div className="like_but">
      <FontAwesomeIcon className="like_icon" onClick={handleLike} style={{color:(present?"#ff6347":"")}} size="2x" icon={faThumbsUp}/>
      &nbsp;<div className="like_cnt">
      {(like?.length>0)&&(like.find((item)=>item===curUser)?(like?.length>1?("You and "+Val+" others likes"):"You liked"):(like?.length===1?(like?.length+" like"):(like?.length+" likes")))}  
      {(like?.length==0)&&"Like"}
      </div>
      </div>
      <div className="cmnt_but">
      <FontAwesomeIcon className="cmnt_icon" size="2x" icon={faComment}/>
      &nbsp;<div className="cmnt_cnt">
      Comments
      </div>
      </div>
      {(curUser===props.user)&&<div className="delete_but">
      <FontAwesomeIcon className="delete_icon" size="2x" icon={faTrash} onClick={()=>dispatch(deletepost(props.postId,navigator))}/>
      <div className="but_delete">Delete</div>
      </div>}
  </div>
  </div>);
}
export default BlogOpinion;
