import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './login.css'

const Login = () => {

  const userRef=useRef()
  const passwordRef=useRef()

  const {dispatch,isFetching}=useContext(Context)

  const handleSubmit=async(e)=>{
    e.preventDefault()
    dispatch({type:'LOGIN_START'});
    try{
   const res=await axios.post('/auth/login',{
    username:userRef.current.value,
    password:passwordRef.current.value
   })
   dispatch({type:'LOGIN_SUCCESS',payload:res.data})
    }
    catch(err){
dispatch({type:'LOGIN_FAILURE'})
    }
  }
  // console.log(user)
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form className="loginForm" onSubmit={handleSubmit} >
            <label htmlFor="">Username</label>
            <input type="text" className='loginInput' ref={userRef} name="" placeholder='Enter your username' id="" />
            <label htmlFor="">Password</label>
            <input type="password" className='loginInput' ref={passwordRef} name="" placeholder='Enter your password' id="" />
           <button className="loginButton" type='submit' disabled={isFetching}>Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link to='/register'>Register</Link>
        </button>
    </div>
  )
}

export default Login