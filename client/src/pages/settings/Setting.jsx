import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Context } from "../../context/Context";
import "./setting.css";
import axios from "axios";

const Setting = () => {
  const { user,dispatch } = useContext(Context);
  const PF='http://localhost:5000/images/'

 

  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success,setSuccess]=useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:'UPDATE_START'})
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;

      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
    const res=await axios.put("/users/" + user._id, updatedUser);
    setSuccess(true)
    dispatch({type:'UPDATE_SUCCESS',payload:res.data})
    } catch (err) {
      dispatch({type:'UPDATE_FAILURE'})
    }
  };

  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
          <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingDP">
            <img src={file ? URL.createObjectURL(file) : PF+user.profilePic} alt='profilepic'/>
            <label htmlFor="fileInput">
              <button className="settingDPIcon">+</button>
            </label>
            <input type="file" name="" id="fileInput" 
            onChange={(e)=>setFile(e.target.files[0])}/>
          </div>
          <label htmlFor="">Username</label>
          <input type="text" name="" placeholder={user.username} onChange={(e)=>setUsername(e.target.value)} />
          <label htmlFor="">Email</label>
          <input type="email" name="" placeholder={user.email} onChange={(e)=>setEmail(e.target.value)} />
          <label htmlFor="">Password</label>
          <input type='password'  onChange={(e)=>setPassword(e.target.value)}/>
          <button className="settingSubmit" type="submit">Update</button>

          {success && (
            <span>Profile has been updated</span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;
