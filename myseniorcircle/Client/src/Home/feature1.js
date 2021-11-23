import React from "react";
import { Row,Col } from "react-bootstrap";
import Feature1Img from "../images/Feature1.png";
function Feature1()
{
   return (<div style={{backgroundColor:"#ddeeff",height:"420px",alignItems:"center"}}>
   {/* e8f1fc */}
    <Row className="m-0 p-0">
        <Col xs={12} sm={12} md={6} lg={7} className="m-0 p-0">
        <div className="Fea1_title">
        Turning interviews to <br/>Experiences
        </div>
        <div className="fea1_para">There is a general saying, "Turning wounds into wisdoms". We aim at converting the wounds caused at interviews into wisdom of experiences as we know <b>Experiences Talks</b>. We make our audience to learn from the past experiences of others. <br/>Want to be part of it and learn from others' experiences ? <br/><br/> <b>Go check out the blogs:</b></div>
        <button className="blogs_but">Blogs</button>
        </Col>
        <Col xs={12} sm={12} md={6} lg={5} className="m-0 p-0" style={{display:"flex",flexDirection:"row-reverse"}}><img clasName="fea1_img" src={Feature1Img}/></Col>
    </Row>
   </div>); 
}
export default Feature1;