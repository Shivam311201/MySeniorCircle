import React, { useEffect, useState } from "react";
import BlogOpinion from "./BlogOpinion";
import { useSelector } from "react-redux";
import "./SingleBlog_style.css";
import { useDispatch } from "react-redux";
import { Col, Row } from "react-bootstrap";
function Blog(props)
{
    const {user}=useSelector((state)=>state.posts);

    return (<div style={{backgroundColor:"#ddeeff",paddingBottom:"20px"}}>
        <div className="singleBlog_title">{props.post?.title}</div>
        <div className="singleblog_date">Published on {props.post.posted}</div>
        <BlogOpinion customPost={props.post} user={props.post?.user} postId={props.post?._id}/>
        <div className="singleblog_content">
        {props.post?.content}
        </div>
        <div className="end_line1"></div>
        <Row className="m-0 p-0">
        <Col className="m-0 p-0" lg={2} md={2} sm={2} xs={2}>
           <img src={user.photo} className="userPhoto"/> 
        </Col>
        <Col className="m-0 p-0" lg={10} md={10} sm={10} xs={10}>
        <div className="writerName">{user.firstname+" "+user.lastname}</div>
        <div className="writerPos">{user.Experience}</div>
        </Col>
        </Row>
        <div className="end_line2"></div>
    </div>);
}
export default Blog;