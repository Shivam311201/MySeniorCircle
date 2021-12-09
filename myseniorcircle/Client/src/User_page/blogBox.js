import React from "react";
import { useSelector } from "react-redux";
import BlogImage from "../images/BlogImage.jpg";
function BlogBox()
{
    return (<div>
    <div className="Blog_title">Google, London | Placement Interview</div>
    <div className="blog_box">
       <img src={BlogImage} className="blogimg_style"/>
       <div className="Blog_content">The four years at DTU were a life changing period. When I joined DTU in the first year, never could I ever have imagined I would be receiving an offer from Google, London at the end of my college journey.<br/><br/>I would say that the most important thing DTU gives you is the peer group competition and the most amazing seniors. The right guidance at the right moment has shaped my path for this accomplishment. I chose the path of what was required to get here exactly when it was needed and what helped me choose that path was my inner will to succeed and the external guidance and inspiration from great college seniors. </div> 
    </div>
    </div>);
}
export default BlogBox;