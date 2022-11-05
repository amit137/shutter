import React from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Setting from './pages/settings/Setting'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Posts from './components/posts/Posts'
import SinglePost from './components/singlePost/SinglePost'

const App = () => {

  const user=false;
  return (
    <div>
       
        <Router>
        <Navbar/>
          <Routes>
    <Route  path='/' element={<Home/>} />
    <Route path='/register' element={user? <Home/>:<Register/>} />
    <Route path='/login' element={user? <Home/>:<Login/>} />
    <Route path='/write' element={user?<Write/>:<Register/>} />
    <Route path='/setting' element={user?<Setting/>:<Register/>} />
    <Route path='/post/:postId' element={<SinglePost/>} />
          </Routes>
        </Router>
    </div>
  )
}

export default App