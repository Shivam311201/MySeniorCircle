import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { faSearch,faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./blog_style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Blog from "../images/blog.png"
import BlogBox from "./blogBox";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { fetchbysearch } from "../Actions/user";

function AllBlogs(props)   
{
    const {posts,isLoading}=useSelector((state)=>state.posts);
    const [search,setSearch]=useState([]);
    const dispatch=useDispatch();

    function scrollup(){
        window.scrollTo(0,0);
    }

    function detectEnter(e) {
        if(e.keyCode===13)
        dispatch(fetchbysearch(search));
    }

    function updateSearch(e){
        setSearch(e.target.value);
    }
    
    return (<div>
       <Row className="m-0 p-0">
           <Col className="m-0 p-0" lg={4} md={4} sm={0} xs={0}>
               {props.FixedVal&&(<div className="blog_sidebar1">
                   <div className="sidebar_title">Blogs</div>
                   <img src={Blog} className="sidebar_img"/>
                   <div className="sidebar_content"><i>“Blogs of experience which takes someone financially or someone medically, but teaches you like no other.”</i></div>
               </div>)}
               {!props.FixedVal&&(<div className={props.Nav==1?"blog_sidebar blog_sidebar3":"blog_sidebar blog_sidebar4"}>
                   <div className="sidebar_content"><i>“Blogs of experience which takes someone financially or someone medically, but teaches you like no other.”</i></div>
                   <img src={Blog} className="sidebar_img"/>
                   <div className="sidebar_title">Blogs</div>
               </div>)}
           </Col>
           <Col className="m-0 p-0" lg={8} md={8} sm={12} xs={12}>
            {props.FixedVal&&<div className="Search_bar">
               <FontAwesomeIcon className="searchIcon" icon={faSearch} onClick={()=>dispatch(fetchbysearch(search))}/>
               <input type="text" value={search} onChange={(e)=>updateSearch(e)} onKeyDown={(e)=>detectEnter(e)} className="searchInput" placeholder="Search blogs..."></input>
            </div>}
            {isLoading&&<div className="load"><CircularProgress size="4rem"/></div>}
            {!isLoading&&<Row className="m-0 p-0">
                <Col className="m-0 p-0" lg={10} md={10} sm={10} xs={10}>
                    <div className="blog_outerArea">
                        {posts?.map((item)=>(
                            <BlogBox key={item._id} item={item}/>
                        ))}
                    </div>
                </Col>
                <Col className="m-0 p-0 uparrow" lg={2} md={2} sm={2} xs={2}>{props.arrowVal&&<FontAwesomeIcon icon={faArrowAltCircleUp} onClick={scrollup} className="fa-3x uparrowIcon"/>}</Col>
            </Row>}
            {posts?.length===0&&!isLoading&&<div className="NoFound">No posts Found :(</div>}
           </Col>   
       </Row>
   </div>);
}
export default AllBlogs;