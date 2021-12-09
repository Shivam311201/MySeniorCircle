import React from "react";
import { Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Feature2Img from "../images/Feature2.png";
function Feature2()
{
   const user=JSON.parse(localStorage.getItem('profile'));
   return (<div>
    <Row className="m-0 p-0">
        <Col xs={12} sm={12} md={6} lg={5} className="m-0 p-0"><img src={Feature2Img} className="fea2img_style"/></Col>
        <Col xs={12} sm={12} md={6} lg={7} className="m-0 p-0">
        <div className="Fea1_title">
        Explore the guide <br/> within you
        </div>
        <div className="fea1_para">There is a general saying, "Teacher is the best friend". Your inteview experiences can be a teacher for someone. Your experiences can change one's complete life. Your blogs can act as guide to someone to crack placement. If you are comfortable, please share your experiences. <br/><br/> <b>Post your experiences:</b></div>
        <Link to={user?"/profile/2":"/login"} style={{textDecoration:"none"}}>
        <button className="blogs2_but">Write blog</button>
        </Link>
        </Col>
    </Row>
   </div>); 
}
export default Feature2;