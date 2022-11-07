import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './navbar.css'
const Navbar = () => {
  const {user,dispatch}=useContext(Context)

  const handleLogout=()=>{
dispatch({type:'LOGOUT'})
  }
  return (
    <div className='navbar'>
        <div className="left">
  left 
        </div>
        <div className="center">
            <div className="list">
                <li className="item">
                  <Link  to='/' classname='link'>Home</Link>
                </li>
                <li className="item">
                  <Link to='/about' className='link'>About</Link>
                </li>
                <li className="item">
                <Link to='/contact' className='link'>Contact</Link>
                </li>
                <li className="item">
                <Link to='/write' className='link'>Write</Link>
                </li>
                <li className="item" onClick={handleLogout}>
                {user && 'Logout'}
                </li>
            </div>
        </div>
        <div className="right">
          {user ?
          (
            <Link to='/setting'>
               <img 
            className='my-image'
            width='50px'
            height='50px'
            src={user.profilePic} alt="profilePic"  />

            </Link>
           
          ):
          (
            <ul className='list'>
            <li className="item"><Link to='/login' className='link'>Login</Link></li>
          <li className="item">  <Link to='/register' className='link'>Register</Link></li>
            </ul>
          )}
           
        </div>
    </div>
  )
}

export default Navbar