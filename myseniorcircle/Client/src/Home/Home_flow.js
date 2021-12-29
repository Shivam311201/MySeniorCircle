import React from "react";
import Navbar from "../Navbar";
import Landing from "./Landing";
import { faPoll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import My_carousel from "./carousel"
import Feature1 from "./feature1";
import Feature2 from "./feature2";
import Footer from "../Footer";
export default function Home_flow()
{
  return (<div className="Home_style">
    <Navbar/>
    <Landing/>
    <div className="trends">What's Trending <FontAwesomeIcon icon={faPoll}/></div>
    <My_carousel/>  
    <Feature1/>
    <Feature2/>
    <Footer/>
    </div>);
}