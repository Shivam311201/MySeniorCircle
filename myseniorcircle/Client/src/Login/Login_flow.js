import React from "react";
import Login from "./login";
import Signup from "./signup";
import { useState,useEffect } from "react";
import "./login_style.css";
function Login_flow(props)
{
    const [isSignup, setSignUp] = useState(props.val);  
    const[winWidth, setWidth]=useState(window.innerWidth);
    const[winHeight, setHeight]=useState(window.innerHeight);
     useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
  }
      window.addEventListener('resize', handleResize);
    })
 return(
   <div style={{backgroundColor:"#e7e7e8",height:winHeight,width:winWidth}}>
     <div className="outercircle1">
     <div className="circle1"></div>
     </div>
      {isSignup&&<Signup formtype={setSignUp}/>}
      {!isSignup&&<Login formtype={setSignUp}/>}
     <div className="outercircle2">
     <div className="circle2"></div>
     </div>
   </div>
 );
}
export default Login_flow;