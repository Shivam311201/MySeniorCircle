import React, {useState} from "react";
import Navbar from "./Navbar";
import UserOpt from "./userOpt";
function User_flow()
{
    const[arrowVal,setArrow]=useState(false);
    const[stickyVal,setSticky]=useState(true);
    window.onscroll=()=>{
        if(window.scrollY <=650)
        setArrow(false);
        else setArrow(true);
        if((window.document.body.offsetHeight-window.scrollY)<801)
        setSticky(false);
        else setSticky(true);
    };

   return(<div>
       <Navbar/>
       <UserOpt stickyvalue={stickyVal} arrowVal={arrowVal}/>
   </div>)
}
export default User_flow;