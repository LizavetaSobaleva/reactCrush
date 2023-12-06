import React from "react";
import PostItem from "../Post/PostItem";
import "./PostList.css";

const PostList = ({title, posts, remove}) => {


  return (
    <div className="posts">
      <h1 style={{textAlign: 'center', fontWeight: '300'}}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
      ))}
    </div>
  );
}
export default PostList;