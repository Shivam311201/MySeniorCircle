import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import About_company from "./company";
import About_developer from "./developer";
function About_flow()
{
    return (<div>
        <Navbar/>
        <About_company/>
        <About_developer/>
        <Footer/>
    </div>);
}
export default About_flow;