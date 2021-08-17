import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://d1y8sb8igg2f8e.cloudfront.net/images/Black_Fatherhood.2e16d0ba.fill-1200x630.png" />
      {props.message} 
      <div>
        <span>big like</span> {props.like}
      </div>
    </div>
  );
};

export default Post;
