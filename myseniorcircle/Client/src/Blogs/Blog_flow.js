import React, {useState} from "react";
import Footer from "../Footer";
import CustomNavbar from "./CustomNav";
import AllBlogs from "./allBlogs";
import { useSelector } from "react-redux";
import "./blog_style.css";

function Blog_flow()
{
    var prevScrollpos = window.pageYOffset;
    const {isLoading,posts,searchPosts}=useSelector((state)=>state.posts);
    const [arrowVal,setArrow]=useState(false);
    const [FixedVal,setFixed]=useState(true);
    const [Nav,setNav]=useState(1);

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
         <CustomNavbar FixedVal={FixedVal}/>
         <AllBlogs Nav={Nav} arrowVal={arrowVal} FixedVal={FixedVal}/>
         {!isLoading&&posts.length!==0&&searchPosts.length!==0&&<Footer/>}
    </div>);
}
export default Blog_flow;