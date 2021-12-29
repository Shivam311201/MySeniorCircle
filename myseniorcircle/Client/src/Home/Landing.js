import React from "react";
import Coverphoto from "../images/coverphoto.png";
function Landing()
{
  return (<div>
      <div style={{backgroundColor:"#ddeeff"}}>
      {/* e8f1fc */}
      <img className="coverPhoto_style" src={Coverphoto}/>
      </div>  
      <div className="landing_title">
      <div className="animated fadeIn" style={{animationDelay: "500ms"}}>
      <div className="landing_intro">Introducing</div>
      <div className="landing_senior">Senior Circle</div>
      </div>
      <div className="animated fadeInUp" style={{animationDelay: "1000ms"}}>
      <div className="landing_line">A platform where experiences are empowered ...</div>
      </div> 
      </div>
  </div>);
}
export default Landing;