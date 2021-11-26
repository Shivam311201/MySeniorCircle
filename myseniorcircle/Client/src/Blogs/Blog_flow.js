import React, {useState} from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SearchBar from "./searchBar";
import { CSSTransition } from "react-transition-group";
import "./blog_style.css";
function Blog_flow()
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
    return (<div>
         <CSSTransition
            in={stickyVal}
            timeout={100}
            className="alert"
            unmountOnExit
            >
            <Navbar/>
        </CSSTransition>   
         <SearchBar arrowVal={arrowVal} stickyVal={stickyVal}/>
         <Footer/>
    </div>);
}
export default Blog_flow;