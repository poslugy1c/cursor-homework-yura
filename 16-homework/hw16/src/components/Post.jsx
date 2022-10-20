import React from "react";
import FLAG from "../img/fl.png";

function Post({ author, content, image, date }) {
  return (
    <div>
      <div className="container">
        <img className="author_photo" src={author.photo} />
        <h1>{author.name}</h1>
        <img className="flag" src={FLAG} />
        <div className="author_nickname">{author.nickname}</div>
        <div className="date">{date}</div>
      </div>
      <div className="content">{content}</div>
      <div className="post_image">
        <img src={image} />
      </div>
    </div>
  );
}

export default Post;
