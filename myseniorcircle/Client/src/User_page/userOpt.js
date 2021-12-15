import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Profile from "../images/profile.jpg";
import './userPage.css';
import AllBlog from "./AllBlog";
import WriteBlog from "./writeBlog";
import { faPenSquare,faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function UserOpt(props)   
{
  const[option,setOption]=useState(1);
  const user=JSON.parse(localStorage.getItem("profile")); 
    console.log(user);
   return (<div>
       <Row className="m-0 p-0">
           <Col className="m-0 p-0" lg={4} md={4} sm={0} xs={0} style={{backgroundColor:"#0B0D17"}}>
               <div className="user_sidebar">
                   <div className="usersidebar_title">{user?.data?.user?.firstname} {user?.data?.user?.lastname}</div>
                   <img src={Profile} className="usersidebar_img"/>
                   <button className="edit_button">Edit</button>
                   <div className="usersidebar_opt">
                   <div className="option1">
                   <FontAwesomeIcon icon={faBook} size="lg" className="myBlog_icon"/>
                   &nbsp;&nbsp;&nbsp;<div className="user_options" style={{cursor:"pointer"}} onClick={()=>setOption(1)}>My Blogs</div>    
                   </div>
                   <div className="option2">
                   <FontAwesomeIcon icon={faPenSquare} size="lg" className="myBlog_icon"/>
                   &nbsp;&nbsp;&nbsp;<div className="user_options" style={{cursor:"pointer",width:"fit-content"}} onClick={()=>setOption(2)}>Write Blog</div>    
                   </div>
                   </div>
               </div>
           </Col>
           <Col className="m-0 p-0" lg={8} md={8} sm={12} xs={12}>
           {option===1?<AllBlog arrowVal={props.arrowVal}/>:<WriteBlog/>}
           </Col>   
       </Row>
   </div>);
}
export default UserOpt;