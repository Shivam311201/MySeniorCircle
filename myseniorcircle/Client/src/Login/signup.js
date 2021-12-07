import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { signup } from "../Actions/user";
import Col from "react-bootstrap/Col";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux"; 
import "./login_style.css";
import {InputAdornment,IconButton } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import { VisibilityOff } from "@material-ui/icons";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Signup(props)
{
  const [showPassword, setShowPassword] = useState(false);  
  const handleShowPassword = () => setShowPassword(!showPassword);
  const navigate=useNavigate();
  const FormFormat={
    firstname:"",
    lastname:"",
    emailid:"",
    Password:""       
  }
  const[form,setForm]=useState(FormFormat);
  const dispatch=useDispatch();

  function handleChange(e)
  {
      setForm({...form,[e.target.name]:e.target.value});
  }

  function handleSubmit(e)
  {
      e.preventDefault();
    dispatch(signup(form,navigate));
  }

  return(<div className="backg_sign">
     <div className="box-sign">
         <Row className="m-0">
             <Col className="sign_detail" lg={4} md={4} sm={4} xs={12}>
                 <div className="data-1">Welcome Back</div>
                 <div className="data-2">Already have an account?</div>
                 <Link to="/login">
                 <button onClick={()=>{props.formtype(false)}} size="md" className="sign_but1">LOG IN
                 </button>
                 </Link>
             </Col>
             <Col className="sign_form" lg={8} md={8} sm={8} xs={12}>
                <div className="data-3">Create Account</div> 
                <div style={{textAlign:"center"}}>
                <input className="input_style1" onChange={handleChange} type="text" name="firstname" placeholder="First Name"/>
                <input className="input_style1" onChange={handleChange} type="text" name="lastname" placeholder="Last Name"/>
                <input className="input_style2" onChange={handleChange} type="text" name="emailid" placeholder="Email id"/><br/>
                <input className="input_style2" onChange={handleChange} tandleShowPassword={handleShowPassword} type={showPassword ? "text" : "password"} name="password" placeholder="Password"/>
                <InputAdornment className="eye">
                <IconButton onClick={handleShowPassword} >
                  {showPassword===true ? <Visibility /> : <VisibilityOff />}
                </IconButton>
                </InputAdornment>
                </div>
                <button size="md" className="sign_but2" 
                onClick={handleSubmit}
                >SIGN UP
                    {/* <Link to="#">Log-In</Link> */}
                </button>
                <div style={{textAlign:"center",color:'#B9B9B9',marginTop:'10px'}}>
                    or sign up via
                </div>
                <div style={{textAlign:"center",marginTop:"5px"}}>
                <GoogleIcon fontSize="large"/>
                <FacebookIcon fontSize="large"/>
                <LinkedInIcon fontSize="large"/>
                </div>
             </Col>
         </Row>
     </div>
  </div>
  )
}
export default Signup;