import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Context } from "../../context/Context";
import "./setting.css";
import axios from "axios";

const Setting = () => {
  const { user } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    await axios.put("/users" + user._id, updatedUser);
    } catch (err) {}
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
            <img src={user.profilePic} alt="" srcset="" />
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
          <input type="password" name=""  id="" />
          <button className="settingSubmit" type="submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;
