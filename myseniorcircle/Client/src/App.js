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
function App() {
  
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchblogs());
  },[]);
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<Home_flow/>}/>
    <Route exact path="/signup" element={<Login_flow val={true}/>}/>
    <Route exact path="/login" element={<Login_flow val={false}/>}/>
    <Route exact path="/about" element={<About_flow/>}/>
    <Route exact path="/blogs" element={<Blog_flow/>}/>
    <Route exact path="/blogs/:id" element={<SingleBlog_flow/>}/>
    <Route exact path="/profile/2" element={<User_flow/>}/>
    </Routes>
    </Router>);
}

export default App;
