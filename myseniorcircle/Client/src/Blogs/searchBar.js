import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { faSearch,faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import "./blog_style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Blog from "../images/blog.png"
import BlogBox from "./blogBox";
function SearchBar(props)   
{
    function scrollup()
    {
        window.scrollTo(0,0);
    }
   return (<div>
       <Row className="m-0 p-0">
           <Col className="m-0 p-0" lg={4} md={4} sm={0} xs={0}>
               {props.stickyVal&&<div className="blog_sidebar">
                   <div className="sidebar_title">Blogs</div>
                   <img src={Blog} className="sidebar_img"/>
                   <div className="sidebar_content"><i>“Blogs of experience which takes someone financially or someone medically, but teaches you like no other.”</i></div>
               </div>}
               {!props.stickyVal&&<div className="nonblog_sidebar">
                   <div className="sidebar_content"><i>“Blogs of experience which takes someone financially or someone medically, but teaches you like no other.”</i></div>
                   <img src={Blog} className="sidebar_img"/>
                   <div className="sidebar_title">Blogs</div>
               </div>}
           </Col>
           <Col className="m-0 p-0" lg={8} md={8} sm={12} xs={12}>
           {props.stickyVal&&<div className="Search_bar">
                   <FontAwesomeIcon className="searchIcon" icon={faSearch} />
                   <input type="text" className="searchInput" placeholder="Search by title.."></input>
               </div>}
            
            <Row className="m-0 p-0">
                <Col className="m-0 p-0" lg={10} md={10} sm={10} xs={10}>
                    <div className="blog_outerArea">
                       <BlogBox/>
                       <BlogBox/>
                       <BlogBox/>
                       <BlogBox/>
                       <BlogBox/>
                       <BlogBox/>
                   </div>
                </Col>
                <Col className="m-0 p-0 uparrow" lg={2} md={2} sm={2} xs={2}>{props.arrowVal&&<FontAwesomeIcon icon={faArrowAltCircleUp} onClick={scrollup} className="fa-3x uparrowIcon"/>}</Col>
            </Row>
           </Col>   
       </Row>
   </div>);
}
export default SearchBar;