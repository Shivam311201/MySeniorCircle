import React, {useState} from "react";
import CustomNavbar from "../CustomNav";
import UserOpt from "./userOpt";
function User_flow(props)
{
    const [arrowVal,setArrow]=useState(false);
    window.onscroll=()=>{
        if(window.scrollY <=650)
        setArrow(false);
        else setArrow(true);

    };

   return(<div>
       <CustomNavbar FixedVal={true}/>
       <UserOpt arrowVal={arrowVal} option={props.option}/>
   </div>)
}
export default User_flow;