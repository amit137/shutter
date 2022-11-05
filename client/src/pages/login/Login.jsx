import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label htmlFor="">Email</label>
            <input type="text" className='loginInput' name="" placeholder='Enter your email' id="" />
            <label htmlFor="">Password</label>
            <input type="password" className='loginInput' name="" placeholder='Enter your password' id="" />
           <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link to='/register'>Register</Link>
        </button>
    </div>
  )
}

export default Login