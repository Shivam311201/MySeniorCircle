import React from "react";
import BlogBox from "./blogBox";
import { Col, Row } from "react-bootstrap";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function AllBlog(props)
{
    function scrollup()
    {
        window.scrollTo(0,0);
    }
  return(<Row className="m-0 p-0">
          <Col className="m-0 p-0" lg={10} md={10} sm={10} xs={10}>
          <div className="user_outerArea">
          <BlogBox/>
          <BlogBox/>
          <BlogBox/>
          <BlogBox/>
          <BlogBox/>
          </div>       
          </Col>
          <Col className="m-0 p-0 uparrow" lg={2} md={2} sm={2} xs={2}>{props.arrowVal&&<FontAwesomeIcon icon={faArrowAltCircleUp} onClick={scrollup} className="fa-3x uparrowIcon"/>}</Col>
        </Row>);
}
export default AllBlog;