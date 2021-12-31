import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { googleauth, signup } from "../Actions/user";
import Col from "react-bootstrap/Col";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux"; 
import {InputAdornment,IconButton } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import { VisibilityOff } from "@material-ui/icons";
import GoogleIcon from '@mui/icons-material/Google';
import GoogleLogin from "react-google-login";
import "./login_style.css";

function Signup(props)
{
  const [showPassword, setShowPassword] = useState(false);  
  const handleShowPassword = () => setShowPassword(!showPassword);
  const navigate=useNavigate();
  const FormFormat={
    firstname:"",
    lastname:"",
    emailid:"",
    password:""       
  }
  const[form,setForm]=useState(FormFormat);
  const dispatch=useDispatch();

  function handleChange(e){
      setForm({...form,[e.target.name]:e.target.value});
  }

  function handleSubmit(e){
      e.preventDefault();
      if(form.firstname===""){
        alert("First name can't be empty !");
        return;
      }
      else if(form.secondname===""){
        alert("Second name can't be empty !");
        return;
      }
      else if(form.emailid===""){
        alert("Email Id can't be empty !");
        return;
      }
      else if(form.password===""){
        alert("Password can't be empty !");
        return;
      }
    dispatch(signup(form,navigate));
  }

  const googleSuccess = async (res) => {
    const result = res?.profileObj;

    form.firstname=result.givenName;
    form.lastname=result.familyName;
    form.emailid=result.email;
    form.password=result.googleId;

    try {
      dispatch(googleauth(form,navigate));
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => console.log('Google Sign In was unsuccessful. Try again later');

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
                <input className="input_style1" onChange={(e)=>handleChange(e)} type="text" name="firstname" placeholder="First Name"/>
                <input className="input_style1" onChange={(e)=>handleChange(e)} type="text" name="lastname" placeholder="Last Name"/>
                <input className="input_style2" onChange={(e)=>handleChange(e)} type="email" name="emailid" placeholder="Email id"/><br/>
                <input className="input_style2" onChange={(e)=>handleChange(e)} type={showPassword ? "text" : "password"} name="password" placeholder="Password"/>
                <InputAdornment className="eye">
                <IconButton onClick={handleShowPassword} >
                  {showPassword===true ? <Visibility /> : <VisibilityOff />}
                </IconButton>
                </InputAdornment>
                </div>
                <button size="md" className="sign_but2" onClick={handleSubmit}>SIGN UP</button>
                <div style={{textAlign:"center",color:'#B9B9B9',marginTop:'10px'}}>
                  --------- OR --------- 
                </div>
                <div style={{textAlign:"center",marginTop:"5px"}}>
                <GoogleLogin
                  clientId="348438982756-1sii29uv02r004hm3vqemk8l761arkop.apps.googleusercontent.com"
                  render={(renderProps) => (
                  <div className="googleStyle" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  <GoogleIcon className="googleIcon"/> 
                  Sign up with Google</div>)}
                  onSuccess={googleSuccess}
                  onFailure={googleError}
                  cookiePolicy="single_host_origin"
                />
                </div>
             </Col>
         </Row>
     </div>
  </div>
  )
}
export default Signup;