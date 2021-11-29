import React, { useEffect } from "react";
import Logo from "../images/logo.png";
import {Link} from "react-router-dom";
function Navbar()
{
  return (<div className="nav_row">
     <Link style={{textDecoration:"none"}} to="/"><img src={Logo} className="logo_img"/></Link>
     <Link style={{textDecoration:"none"}} to="/"><div className="Logo_title">Senior Circle</div></Link>
     <div className="pages_option">
     <Link style={{textDecoration:"none"}} to="/"><div className="nav_options">Home</div></Link>
     <Link style={{textDecoration:"none"}} to="/about"><div className="nav_options">About</div></Link>
     <Link style={{textDecoration:"none"}} to="/blogs"><div className="nav_options">Blogs</div></Link>
     <Link style={{textDecoration:"none"}} to="/profile/2"><div className="nav_options">My Profile</div></Link>
     </div>
     <div className="button_class">
     <Link style={{textDecoration:"none"}} to="/"><button className="button_logout">Log Out</button></Link>
     </div>
   </div>);
}
export default Navbar;