import React, { useEffect } from "react";
import Logo from "../images/logo.png";
import {Link} from "react-router-dom";
import { LOGOUT } from "../constants/actionTypes";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
function Navbar()
{
  const dispatch=useDispatch();
  const navigate=useNavigate();
  function Logout()
  {
    dispatch({type:LOGOUT});
    navigate("/");
  }
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
     <button className="button_logout" onClick={Logout}>Log Out</button>
     </div>
   </div>);
}
export default Navbar;