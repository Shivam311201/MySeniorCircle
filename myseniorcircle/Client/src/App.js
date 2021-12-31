import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About_flow from "./About/about_flow";
import Blog_flow from "./Blogs/Blog_flow";
import Home_flow from "./Home/Home_flow";
import Login_flow from "./Login/Login_flow";
import SingleBlog_flow from "./SingleBlog/SingleBlog_flow";
import User_flow from "./User_page/user_flow";
import {useDispatch} from "react-redux";
import { fetchblogs } from "./Actions/user";
import { Navigate } from "react-router-dom";

function App() {
  
  const dispatch=useDispatch();
  const user=JSON.parse(localStorage.getItem("profile"));

  useEffect(()=>{
    dispatch(fetchblogs());
  },[dispatch]);
 
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<Home_flow/>}/>
    <Route exact path="/signup" element={!user?<Login_flow val={true}/>:<Navigate to="/"/>}/>
    <Route exact path="/login" element={!user?<Login_flow val={false}/>:<Navigate to="/"/>}/>  
    <Route exact path="/about" element={<About_flow/>}/>
    <Route exact path="/blogs" element={<Blog_flow/>}/>
    <Route exact path="/blogs/read" element={<SingleBlog_flow/>}/>
    <Route exact path="/user/profile/Myblogs" element={<User_flow option={1}/>}/>
    <Route exact path="/user/profile/writeBlog" element={<User_flow option={2}/>}/>
    </Routes>
    </Router>);
}

export default App;
