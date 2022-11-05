import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
        <span className="registerTitle">register</span>
        <form className="registerForm">
        <label htmlFor="">Username</label>
            <input type="text" className='registerInput' name="" placeholder='Enter your username' id="" />
            <label htmlFor="">Email</label>
            <input type="text" className='registerInput' name="" placeholder='Enter your email' id="" />
            <label htmlFor="">Password</label>
            <input type="password" className='registerInput' name="" placeholder='Enter your password' id="" />
           <button className="registerButton">register</button>
        </form>
        <button className="registerLoginButton">
          <Link to='/login'>Login</Link>
        </button>
    </div>
  )
}

export default Register