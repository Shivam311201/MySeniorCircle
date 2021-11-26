import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import { useState,useEffect } from "react";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import "./login_style.css";
import {InputAdornment,IconButton } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import { VisibilityOff } from "@material-ui/icons";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Login(props)
{
    const intialState = {
        emailid:"",
        password: "",
      };  
    const [showPassword, setShowPassword] = useState(false);  
    const handleShowPassword = () => setShowPassword(!showPassword);
    const [form, setForm] = useState(intialState);    
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(e.target.name);
        console.log(e.target.value);
      };
    const handleSubmit = async (e) =>  {
        let response = await fetch("http://localhost:4000/signin", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        });
        response = await response.json();
        localStorage.setItem("access-token", response.accessToken);
      };
      const[winWidth, setWidth]=useState(window.innerWidth);
      const[winHeight, setHeight]=useState(window.innerHeight);
       useEffect(() => {
        function handleResize() {
          setWidth(window.innerWidth);
          setHeight(window.innerHeight);
    }
        window.addEventListener('resize', handleResize);
      })
  return(<div className="backg_sign">
     <div className="box-sign">
       {(winWidth>575)&&
         <Row className="m-0">
             <Col className="sign_form" lg={8} md={8} sm={8} xs={12}>
                <div className="data-3">Login to Senior Circle</div> 
                <div className="form_style">
                <input className="input_style2" required onChange={handleChange} type="text" name="emailid" placeholder="Email id"/><br/>
                <input className="input_style2" required onChange={handleChange} handleShowPassword={handleShowPassword} type={showPassword ? "text" : "password"} name="password" placeholder="Password"/>
                <InputAdornment className="eye">
                <IconButton onClick={handleShowPassword} >
                  {showPassword===true ? <Visibility /> : <VisibilityOff />}
                </IconButton>
                </InputAdornment>
                </div>
                <div className="forgotpass">
                    Forgot password?
                </div>
                <button size="md" className="sign_but3" onClick={handleSubmit}>LOG IN
                    {/* <Link to="#">Log-In</Link> */}
                </button>
                <div style={{textAlign:"center",color:'#B9B9B9',marginTop:'10px'}}>
                    or log in via
                </div>
                <div style={{textAlign:"center",marginTop:"5px"}}>
                <GoogleIcon fontSize="large"/>
                <FacebookIcon fontSize="large"/>
                <LinkedInIcon fontSize="large"/>
                </div>
             </Col>
             <Col className="sign2_detail" lg={4} md={4} sm={4} xs={12}>
                 <div className="data-1">Hello There!</div>
                 <div className="data-2">Enter your details and start your journey with us.</div>
                 {/* <Link to="/signup"> */}
                 <button size="md" className="sign_but1" onClick={()=>{props.formtype(true)}}>SIGN UP</button>
                 {/* </Link> */}
             </Col>
         </Row>}
         {(winWidth<576)&&
         <Row className="m-0">
             <Col className="sign2_detail" lg={4} md={4} sm={4} xs={12}>
                 <div className="data-1">Hello There!</div>
                 <div className="data-2">Enter your details and start your journey with us.</div>
                 {/* <Link to="/signup"> */}
                 <button size="md" className="sign_but1" onClick={()=>{props.formtype(true)}}>SIGN UP</button>
                 {/* </Link> */}
             </Col>
             <Col className="sign_form" lg={8} md={8} sm={8} xs={12}>
                <div className="data-3">Login to Senior Circle</div> 
                <div className="form_style">
                <input className="input_style2" required onChange={handleChange} type="text" name="emailid" placeholder="Email id"/><br/>
                <input className="input_style2" required onChange={handleChange} handleShowPassword={handleShowPassword} type={showPassword ? "text" : "password"} name="password" placeholder="Password"/>
                <InputAdornment className="eye">
                <IconButton onClick={handleShowPassword} >
                  {showPassword===true ? <Visibility /> : <VisibilityOff />}
                </IconButton>
                </InputAdornment>
                </div>
                <div className="forgotpass">
                    Forgot password?
                </div>
                <button size="md" className="sign_but3" onClick={handleSubmit}>LOG IN
                    {/* <Link to="#">Log-In</Link> */}
                </button>
                <div style={{textAlign:"center",color:'#B9B9B9',marginTop:'10px'}}>
                    or log in via
                </div>
                <div style={{textAlign:"center",marginTop:"5px"}}>
                <GoogleIcon fontSize="large"/>
                <FacebookIcon fontSize="large"/>
                <LinkedInIcon fontSize="large"/>
                </div>
             </Col>
         </Row>}
     </div>
  </div>
  )
}
export default Login;