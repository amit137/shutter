import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import "./singlePost.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const SinglePost = () => {

  const PF = "http://localhost:5000/images/";
  const location=useLocation()
  const path=location.pathname.split('/')[2];
  console.log(path)

  const {user}=useContext(Context)

  const [post,setPost]=useState({})
  const [title,setTitle]=useState('')

  const [desc,setDesc]=useState('')
  const [updated,setUpdated]=useState(false)

  useEffect(()=>{
    const getPost=async()=>{
      const res=await axios.get('/posts/'+path)
      console.log(res.data)
     setPost(res.data)
     setTitle(res.data.title)
     setDesc(res.data.desc)
    }
getPost()
  },[path])


  const handleUpdate=async()=>{
    try{
         await axios.put(`/posts/${post._id}`,{
          username:user.username,title,desc
         })
         window.location.reload()
    }
    catch(err){

    }
  }

  const handleDelete=async()=>{
   try{
    await axios.delete(`/posts/${post._id}`,{data:{username:user.username}})
    setUpdated(false)
   }catch(err){

   }
  }

  const handleEdit=()=>{
    setUpdated(true)
  }
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
        <img
        src={PF+post.photo}
        className="singlePostImg"
      />
        )}
        {updated ? (<input type="text" value={title} 
        onChange={(e)=>setTitle(e.target.value)}
        autoFocus /> ) :(
 <h1 className="singlePostTitle">

 {title}
 {post.username===user?.username && (
   <div className="singlePostEdit">
   <button onClick={handleEdit}>edit</button>
   <button onClick={handleDelete}>delete</button>
</div>
 )}

</h1>
        )}

       
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author : 
            <Link to={`/?user=${post.username}`} className='link'><b>{post.username}</b></Link>
            </span>
            <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updated ? (<textarea value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea> ):( <p className="singlePostDesc">{desc}</p>)}
       
       {updated && (
        <button onClick={handleUpdate}>Update</button>
       )}
      </div>
    </div>
  );
};

export default SinglePost;
