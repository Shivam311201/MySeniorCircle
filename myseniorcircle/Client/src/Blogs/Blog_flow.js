import React, {useState} from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SearchBar from "./searchBar";
import "./blog_style.css";
function Blog_flow()
{
    var prevScrollpos = window.pageYOffset;
    const[arrowVal,setArrow]=useState(false);
    const[FixedVal,setFixed]=useState(true);
    const[Nav,setNav]=useState(1);

    window.onscroll=()=>{
        //For setting the arrow
        if(window.scrollY <=650)
        setArrow(false);
        else setArrow(true);

        //For setting sidebar
        if((window.document.body.offsetHeight-window.scrollY)<801)
        setFixed(false);
        else setFixed(true);

        //For setting navbar
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos)
            setNav(1);   
         else setNav(2);
        prevScrollpos = currentScrollPos;
    };

    return (<div>
         <Navbar FixedVal={FixedVal}/>
         <SearchBar Nav={Nav} arrowVal={arrowVal} FixedVal={FixedVal}/>
         <Footer/>
    </div>);
}
export default Blog_flow;