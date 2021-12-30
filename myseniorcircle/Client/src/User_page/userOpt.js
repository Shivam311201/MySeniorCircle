import React, { useState,useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Profile from "../images/profile.jpg";
import AllBlog from "./AllBlog";
import WriteBlog from "./writeBlog";
import { faPenSquare,faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FileBase from "react-file-base64";
import {updateuser} from "../Actions/user.js";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import './userPage.css';

function UserOpt(props)   
{
  const user=JSON.parse(localStorage.getItem("profile")); 
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const [winHeight,setHeight]=useState(window.innerHeight);
  const [winWidth,setWidth]=useState(window.innerWidth);
  useEffect(() => {
      function handleResize() {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
      }
      window.addEventListener('resize', handleResize)
  });

  const Intialform={
    emailid:user.data.result.emailid,
    firstname:user.data.result.firstname,
    lastname:user.data.result.lastname,
    photo:user.data.result?.photo,
    collegeName:user.data.result?.collegeName,
    Experience:user.data.result?.Experience,
    token:user.data.token
  }
  const[editProfile,setProfile]=useState(false);
  const[form,setform]=useState(Intialform);
  const profilePath="/user/profile/";

  function handleChange(e){
    setform({...form,[e.target.name]:e.target.value});
  }

  return (<div>
     <Row className="m-0 p-0">
         <Col className="m-0 p-0" lg={4} md={4} sm={0} xs={0} style={{backgroundColor:"#0B0D17"}}>
             <div className="user_sidebar" style={{height:(winHeight-57)}}>
                 {editProfile&&<div className="detail">
                 <button className="detail_button" onClick={()=>{
                     setProfile(false);
                     setform(Intialform);
                     }}>Cancel</button>
                 <button className="detail_button" onClick={()=>{
                     setProfile(false);
                     dispatch(updateuser(form));
                     }}>Save</button>
                 </div>}
                 <div className="usersidebar_title" style={(editProfile==true)?{marginTop:"1px"}:{}}>{user?.data?.result?.firstname} {user?.data?.result?.lastname}</div>
                 <img src={form.photo?form.photo:Profile} className="usersidebar_img"/>
                 {!editProfile&&<div><button className="edit_button" onClick={()=>setProfile(true)}>Edit</button>
                 <div className="usersidebar_opt">
                 <div className="option1">
                 <FontAwesomeIcon icon={faBook} size="lg" className="myBlog_icon"/>
                 &nbsp;&nbsp;&nbsp;<div className="user_options" style={{cursor:"pointer"}} onClick={()=>{
                  navigate(profilePath+"myblogs");
                  }}>My Blogs</div>    
                 </div>
                 <div className="option2">
                 <FontAwesomeIcon icon={faPenSquare} size="lg" className="myBlog_icon"/>
                 &nbsp;&nbsp;&nbsp;<div className="user_options" style={{cursor:"pointer",width:"fit-content"}} onClick={()=>{
                  navigate(profilePath+"writeblog");
                  }}>Write Blog</div>    
                 </div>
                 </div>
                 </div>}
                 {editProfile&&<div>
                  <div className="fileinput"><FileBase type="file" multiple={false} onDone={({base64})=>setform({...form,photo:base64})}/></div>
                  <input required name="collegeName" value={form.collegeName} onChange={(e)=>handleChange(e)} className="writeDetails" type="text" placeholder="College name"></input>
                  <textarea required name="Experience" value={form.Experience} onChange={(e)=>handleChange(e)} className="writeExperience" type="text" placeholder="About Yourself"/></div>}
              </div>
         </Col>
         <Col className="m-0 p-0" lg={8} md={8} sm={12} xs={12}>
         {props.option===1?<AllBlog arrowVal={props.arrowVal}/>:<WriteBlog/>}
         </Col>   
     </Row>
  </div>);
}
export default UserOpt;