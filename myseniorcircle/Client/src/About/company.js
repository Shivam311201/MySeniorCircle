import React from "react";
import { Col, Row } from "react-bootstrap";
import AboutImg from "../images/about_img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
function About_company()
{
    return (<div>
        <div className="about_head"><FontAwesomeIcon icon={faAddressCard} size="lg" /> Who are we ?</div>
        <Row className="m-0 p-0" style={{backgroundColor:"#ddeeff"}}>
        <Col className="m-0 p-0" lg={4} md={4} sm={5} xs={12}>
        <img src={AboutImg} className="aboutImg_style"/>
        </Col>
        <Col className="m-0 p-0" lg={8} md={8} sm={7} xs={12}>
        <div className="about_content">
        Today, placement and higher education has become the foremost necessity in today’s money-oriented world. The students as well as their parents expect good placement opportunities from the institutions they choose. Meanwhile, the colleges ensure job opportunity to almost every student by conducting training programs to sharpen the skills of the students when they attend interviews. But still before attending the interviews, it can be beneficial to have a hand on experience.<br/><br/>  
        We, as <b>Senior Circle</b>, try to provide an experience of interviews through our blogs. We provide you with the blogs written by interviewers, interviwees and admitted students at some of reputable institutions of the world. We aim to provide our readers with the same anxiety and stress experienced by the interviewee.<br/><br/>
        We aim to help our readers in achieving their goal through our blogs.     
        </div>
        </Col>
        </Row>
    </div>);
}
export default About_company;