import React from "react";
import "./PostItem.css";
import MainButton from "../UI/button/MainButton";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  const router = useNavigate()

  return (
    <div className="post">
      <div className="post_content">
        <strong>
          {props.post.id}. {props.post.title[0].toUpperCase() + props.post.title.substring(1)}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post_btn">
        <MainButton onClick={() => router(`/posts/${props.post.id}`)}>Open</MainButton>
        <MainButton onClick={() => props.remove(props.post)}>Delete</MainButton>
      </div>
    </div>
  );
};
export default PostItem;
