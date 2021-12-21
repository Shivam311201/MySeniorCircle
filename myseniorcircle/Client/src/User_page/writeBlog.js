import React, {useState} from "react";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router";
import { addblog } from "../Actions/user";
import FileBase from "react-file-base64";

function WriteBlog()
{
    const user=JSON.parse(localStorage.getItem("profile"));
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const formFormat={
        title:"",
        content:"",
        posted:new Date().toDateString(),
        user:user.data.result._id,
        blogphoto:"",
        like:[],
        comments:[],
        tags:[]
    }
    const [form,setform]=useState(formFormat);
    
    function updateForm(e)
    {
        setform({...form,[e.target.name]:e.target.value});
    }
    function postBlog()
    {
        dispatch(addblog(form,navigate));
    }
    return (<div>   
        <div className="writeHead">Write a Blog...</div>
        <input required name="title" onChange={updateForm} className="writeTitle" type="text" placeholder="Title"></input>
        <br/>
        <input required name="tags" onChange={updateForm} className="writeTitle" type="text" placeholder="Tags"></input>
        <br/>
        <textarea required name="content" onChange={updateForm} className="writeContent" type="text" placeholder="Decription"/>
        <br/>
        <div className="fileinput1"><FileBase type="file" multiple={false} onDone={({base64})=>setform({...form,blogphoto:base64})}/></div>
        <div className="blogbuttonGroup">
        <button className="button_cancel" onClick={()=>navigate("/")}>Cancel</button>
        <button className="button_post" onClick={postBlog}>Post</button>
        </div>
    </div>);
}
export default WriteBlog;