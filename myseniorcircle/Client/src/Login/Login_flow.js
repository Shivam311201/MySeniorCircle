import React from "react";
import Login from "./login";
import Signup from "./signup";
import { useState,useEffect } from "react";
import "./login_style.css";
import { CSSTransition } from "react-transition-group";
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
    //  e8f1fc
     <div style={{backgroundColor:"#e7e7e8",height:winHeight,width:winWidth}}>
    <CSSTransition
    in={isSignup}
    timeout={1000}
    className="alert"
    unmountOnExit
    >
    <Signup formtype={setSignUp}/>
    </CSSTransition>
    <CSSTransition
    in={!isSignup}
    timeout={1000}
    className="alert"
    unmountOnExit
    >
    <Login formtype={setSignUp}/>
    </CSSTransition>
    </div>
 );
}
export default Login_flow;