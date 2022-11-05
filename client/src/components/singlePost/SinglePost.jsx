import React from "react";
import "./singlePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXnC3fwMwkbIt3ejGRIw3NmbDyUtgS5g2jA&usqp=CAU'
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, veritatis!
        <div className="singlePostEdit">
            <button>edit</button>
            <button>delete</button>
        </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author : <b>Amit</b></span>
            <span className="singlePostDate">1 hour ago </span>
        </div>
        <p className="singlePostDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam corporis quaerat voluptas, aut accusantium rem obcaecati impedit, doloremque mollitia fugit laudantium doloribus magni dolore numquam saepe esse tempore qui soluta!</p>
      </div>
    </div>
  );
};

export default SinglePost;
