import React from 'react'
import Post from '../post/Post'
import './posts.css'

const Posts = ({posts}) => {
  console.log(posts)
  return (
    <div className='posts'>
      {posts.map((p)=>(
          <Post post={p}/>
      ))}
       
       
    </div>
  )
}

export default Posts