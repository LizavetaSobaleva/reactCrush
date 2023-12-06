import React from "react";
import "./PostItem.css";
import MainButton from "../UI/button/MainButton";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post_content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post_btn">
        <MainButton onClick={() => props.remove(props.post)}>Delete</MainButton>
      </div>
    </div>
  );
};
export default PostItem;
