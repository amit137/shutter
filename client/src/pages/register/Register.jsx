import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState(false)

  const handleSubmit=async(e)=>{
    setError(false)
    e.preventDefault()
   try{
    const res=await axios.post('/auth/register',{
      username,
      email,
      password
    });
    res.data && window.location.replace('/login')
   }
catch(err){
  setError(true)
}
  };

  return (
    <div className='register'>
        <span className="registerTitle">register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
            <input type="text" className='registerInput' 
            name="" placeholder='Enter your username' id="" onChange={(e)=>setUsername(e.target.value)} />
            <label htmlFor="">Email</label>
            <input type="text" className='registerInput' name="" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="">Password</label>
            <input type="password" className='registerInput' name="" placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} />
           <button className="registerButton" >register</button>
        </form>
        <button className="registerLoginButton">
          <Link to='/login'>Login</Link>
        </button>
        {error && <span style={{color:'red',marginTop:'10px'}}>Something went wrong</span>}
    </div>
  )
}

export default Register