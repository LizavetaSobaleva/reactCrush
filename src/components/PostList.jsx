import React from "react";
import PostItem from "./Post/PostItem";
import MyBlock from "./UI/block/MyBlock";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ title, posts, remove }) => {
  if (!posts.length) {
    return (
      <h2 style={{ textAlign: "center", fontWeight: "lighter" }}>
        No founded posts
      </h2>
    );
  }

  return (
    <MyBlock>
      <h1 style={{ textAlign: "center", fontWeight: "300" }}>{title}</h1>

      <TransitionGroup style={{width: '100%'}}>
        {posts.map((post, index) => 
          <CSSTransition 
            key={post.id} 
            timeout={500} 
            classNames="post"
          >
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </MyBlock>
  );
};

export default PostList;