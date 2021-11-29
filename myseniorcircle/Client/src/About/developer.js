import React from "react";
import DeveloperImg from "../images/developer.jpg"
import "./about_style.css";
function About_developer()
{
    return(<div>
        <div className="developer_heading">About the developer</div>
        <div style={{ paddingBottom: "30px",textAlign:"center",backgroundColor:"#ddeeff" }}>
        <img src={DeveloperImg} className="devImg_style"/>
        <div className="content_developer">
          <br />
          <br />
          <br />
          <div class="container">
            Hola!!, myself Shivam Garg, a 2nd year CS student at DTU. Currently,
            I am exploring the field of web development and trying to have a
            hand-on-experience over MERN stack through some projects. I am also
            very passionate about coding.
          </div>
        </div>
      </div>
    </div>
  );
}
export default About_developer;