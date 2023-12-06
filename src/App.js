import React, { useState } from "react";
import "./App.css";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import MySelect from "./components/UI/select/MySelect";

const fontLink = document.createElement("link");
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "React", body: "Blach blach" },
    { id: 3, title: "TypeScript", body: "blach blach blach" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} title="Create post"/>

      <div className="optionsPanel">
        {/* <MySelect
          defaultValue="Sort by"
        /> */}
      </div>

      {posts.length !== 0  
        ? <PostList remove={removePost} posts={posts} title="Posts" />
        : <h2 style={{textAlign: 'center', fontWeight: 'lighter'}}> No posts yet</h2>
      }
    </div>
  );
}

export default App;
