import React,{useEffect} from "react";
import Logo from "../images/logo.png";
import "./blog_style.css";
import {Link} from "react-router-dom";
import { useNavigate,useLocation } from "react-router-dom";
import decode from "jwt-decode";

function CustomNavbar(props)
{
  const user=JSON.parse(window.localStorage.getItem("profile"));
  const navigate=useNavigate();
  const location=useLocation();
  const profilePath="/user/profile/myblogs";

  function logout()
  {
    window.localStorage.clear();
    navigate('/');
  }

  useEffect(() => {
    const token = user?.data?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) 
      logout();
    }
  }, [location]);

  return (props.FixedVal===true)&&
  (<div className="nav_row1">
    <Link to="/" style={{textDecoration:"none"}}><img src={Logo} className="logo_img"/></Link>
    <Link to="/" style={{textDecoration:"none"}}><div className="Logo_title">Senior Circle</div></Link>
    <div className="pages_option">
    <Link to="/" style={{textDecoration:"none"}}><div className="nav_options">Home</div></Link>
    <Link to="/about" style={{textDecoration:"none"}}><div className="nav_options">About</div></Link>
    <Link to="/blogs" style={{textDecoration:"none"}}><div className="nav_options">Blogs</div></Link>
    {user&&<Link to={profilePath} style={{textDecoration:"none"}}><div className="nav_options">My Profile</div></Link>}
    </div>
    <div className="button_class">
    {!user&&<Link to="/login" style={{textDecoration:"none"}}><button className="button_login">Login</button></Link>}
    {!user&&<Link to="/signup" style={{textDecoration:"none"}}><button className="button_signup">Sign up</button></Link>}
    {user&&<button className="button_signup" onClick={()=>logout()}>Log Out</button>}
    </div>
  </div>);
}
export default CustomNavbar;