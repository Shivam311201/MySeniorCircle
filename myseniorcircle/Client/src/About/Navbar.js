import React, { useEffect } from "react";
import Logo from "../images/logo.png"
function Navbar()
{
  return (<div className="nav_row">
     <img src={Logo} className="logo_img"/>
     <div className="Logo_title">Senior Circle</div>
     <div className="pages_option">
     <div className="nav_options">Home</div>
     <div className="nav_options">About</div>
     <div className="nav_options">Blogs</div>
     </div>
     <div className="button_class">
     <button className="button_login">Login</button>
     <button className="button_signup">Sign up</button>
     </div>
   </div>);
}
export default Navbar;