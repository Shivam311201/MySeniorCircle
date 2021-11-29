import React, { useEffect } from "react";
import "./SingleBlog_style.css";
import {Link} from "react-router-dom";
import Logo from "../images/logo.png"
function Navbar()
{
  return (<div className="nav_row">
     <Link to="/" style={{textDecoration:"none"}}><img src={Logo} className="logo_img"/></Link>
     <Link to="/" style={{textDecoration:"none"}}><div className="Logo_title">Senior Circle</div></Link>
     <div className="pages_option">
     <Link to="/" style={{textDecoration:"none"}}><div className="nav_options">Home</div></Link>
     <Link to="/about" style={{textDecoration:"none"}}><div className="nav_options">About</div></Link>
     <Link to="/blogs" style={{textDecoration:"none"}}><div className="nav_options">Blogs</div></Link>
     </div>
     <div className="button_class">
     <Link to="/login" style={{textDecoration:"none"}}><button className="button_login">Login</button></Link>
     <Link to="/signup" style={{textDecoration:"none"}}><button className="button_signup">Sign up</button></Link>
     </div>
   </div>);
}
export default Navbar;