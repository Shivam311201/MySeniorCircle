import React, {useState} from "react";
function WriteBlog()
{
    const[title,setTitle]=useState("");
    const[content,setContent]=useState("");

    return (<div>
        <div className="writeHead">Write a Blog...</div>
        <input required value={title} onChange={(e)=>{setTitle(e.target.value);}} className="writeTitle" type="text" placeholder="Title"></input>
        <br/>
        <textarea required content={content} onChange={(e)=>setContent(e.target.value)} className="writeContent" type="text" placeholder="Decription"/>
        <br/>
        <button className="button_cancel">Cancel</button>
        <button className="button_post">Post</button>
    </div>);
}
export default WriteBlog;